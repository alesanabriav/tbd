'use strict';
import Sequelize from 'sequelize';
import seq from './connection';

export default seq.define('companies', {
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

