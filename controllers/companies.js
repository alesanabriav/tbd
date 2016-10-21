'use strict';
import Company from '../models/company';

export default function(sequelize) {
  const Model = Company(sequelize);

  return {
    get(req, res) {
      let order = req.query.order ? {order: req.query.order} : {};
      let offset = req.query.offset ? {offset: parseInt(req.query.offset)} : {};
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