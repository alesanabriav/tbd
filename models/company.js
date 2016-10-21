'use strict';
import Sequelize from 'sequelize';

export default function company(seq) {

  return seq.define('companies', {
    name: {
      type: Sequelize.STRING
    },
    nit: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  },
  {
    underscored: true
  });
}
