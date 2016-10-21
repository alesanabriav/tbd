'use strict';
import Company from '../models/company';

export default function(sequelize) {
  const Model = Company(sequelize);

  return {
    get(req, res) {
      let q = req.query;
      let order = q.order ? {order: q.order} : {};
      let offset = q.offset ? {offset: parseInt(q.offset)} : {};
      let nameLike = q.nameLike ? {name: {$like: `%${q.nameLike}`}} : {};
      let initialQuery = {limit: 25, order: 'id DESC', offset: 0};

      let query = {
        ...initialQuery, 
        ...order, 
        ...offset
      };

      Model.findAll(query)
      .then(companies => res.json(companies));

    }
  }
}