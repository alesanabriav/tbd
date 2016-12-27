'use strict';
import Sequelize from 'sequelize';
import seq from './connection';

export default seq.define('lists', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: true
    }
  },
  {
    underscored: true
});



