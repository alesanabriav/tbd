'use strict';
import Company from '../models/company';
import List from '../models/list';
import CompanyList from '../models/company_list';
const Model = Company;

export default function(sequelize) {
  
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
        include: [{model: List}]
      };

      Model.findAll(query)
      .then(companies => res.json(companies));
    },

    getOne(req, res) {
      let id = req.params.id;

       Model
      .findOne({where: {id: id}})
      .then(company => res.json(company))
    },

    store(req, res) {
      let company = req.body;

      Model
      .create(company)
      .then(companyStored => {
       res.json(companyStored);
      })
    },

    update(req, res) {
      let id = req.params.id;

      Model
      .findOne({where: {id} })
      .then(com => com.update(req.body))
      .then(com => res.json(com));
    },

    destroy(req, res) {
      let id = req.body.id;
      Model
      .findOne({where: {id: id}})
      .then(mod => {
        return mod.destroy();
      })
      .then(() => res.json({destroy: 'ok'}))
     
    }
  }
}