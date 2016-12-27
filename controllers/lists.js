'use strict';
import seq from '../models/connection';
import List from '../models/list';
import Company from '../models/company';
import CompanyList from '../models/company_list';
import campaigns from './campaigns';

export default function(sequelize) {
  const Model = List;
  const _this = this;
  return {
    get(req, res) {
      let q = req.query;
      let initialQuery = {limit: 25, order: 'id DESC', offset: 0};
      let order = q.order ? {order: q.order} : {};
      let offset = q.offset ? {offset: parseInt(q.offset)} : {};
      let nameLike = q.nameLike ? {where: {name: {$like: `%${q.nameLike}%`}}} : {};
      
      let query = {
        ...initialQuery, 
        ...order, 
        ...offset,
        ...nameLike,
        include: [{model: Company, attributes: ['id', 'name'] }]
      };

      Model.findAll(query)
      .then(companies => res.json(companies));
    },

    getOne(req, res) {
      let id = req.params.id;

      Model
      .findOne({where: {id}, include: [{model: Company, attributes: ['id', 'name'] }] })
      .then(com => res.json(com));
    },

    store(req, res) {
      let data = req.body;
      Model
      .create(data)
      .then(companyStored => {
       res.json(companyStored);
      })
    },

    update(req, res) {
     res.json(req.body);
    },

    destroy(req, res) {
      let id = req.body.id;
      Model
      .findOne({where: {id: id}})
      .then(mod => {
        return mod.destroy();
      })
      .then(() => res.json({destroy: 'ok'}))
     
    },

    addCompanies(req, res) {
      let companies = req.body.companies ? req.body.companies : [];
      let id = req.params.id;
      let ind = companies.length - 1;

      //transform values to make mysql statement
      let value = companies.reduce((b, a, i) => {
        let comma = i == ind ? '' : ',';

        return b.concat(`(${a}, ${id})${comma}`);
      }, '');

      if(companies.length) {
        seq.query(`INSERT INTO company_lists (company_id, list_id) VALUES${value}`).spread(function(results, metadata) {
          return res.json(metadata);
        });
      } else {
        return res.json({message: 'nothing to add'});
      }
    },

    removeCompanies(req, res) { 
      let id = req.params.id;
      let companies = req.query;
      let actions = Object.keys(companies).map(companyKey => {
        return seq
          .query(`DELETE FROM company_lists WHERE company_id=${companies[companyKey]} AND list_id=${id};`)
          .spread(function(results, metadata) {
            return Promise.resolve(results);
          });
      });

      Promise
      .all(actions)
      .then(data => res.json({data}));
    },

    sendCampaign(req, res) {
      let {content, listId} = req.body;
      
      return Model
      .findOne({where: {id: listId}, include: [{model: Company, attributes: ['id', 'name', 'email'] }] })
      .then(list => {
        let actions = list.companies.map(company => {
          return campaigns().sendMail(company.email, 'campaña test',  content);
        });

        return Promise.all(actions).then(com => res.json({response: com}));
      });
    }
  }
}