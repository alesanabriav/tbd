'use strict';
import Sequelize from 'sequelize';
import seq from './connection';
import List from './list';
import Company from './company';

const CompanyList = seq.define('company_list', {}, {
	timestamps: false
});

Company.belongsToMany(List, { through: CompanyList, foreignKey: 'company_id' });
List.belongsToMany(Company, { through: CompanyList, foreignKey: 'list_id' });

export default CompanyList;
