'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'axios';
import  {fetchCompanies, paginateCompanies, searchCompanies} from '../../actions/companies';
import Item from './item';
import Form from './form';

const companies =  React.createClass({
  componentWillMount() {
    this.props.dispatch(fetchCompanies());
  },

  paginate(type, evt) {
    if(evt) evt.preventDefault();
    let {query} = this.props.companies;
    this.props.dispatch(paginateCompanies(query, type));
  },

  search(evt) {
    let {query} = this.props.companies;
    this.props.dispatch(searchCompanies(query, evt.target.value));
  },

  edit(e) {
    console.log('edit', e);
  },

  render() {
    const {nameLink, items} = this.props.companies;
    const companiesNodes = items.map((company, ind) => {
      return <Item key={ind} company={company} editCompany={this.edit} />
    });

    return (
       <div className="col-12">
        <div className="card companies">
          <div className="card__content">
             <Form />
          </div>
       </div>
        <div className="card companies">
          <div className="card__header">
            <h3 className="pull-left">Empresas</h3>
            <div className="btn-group">
              <button 
                className="btn-group__btn" 
                onClick={this.paginate.bind(this, 'less')}> 
                <i className="ion-chevron-left"></i> 
              </button>

              <button 
                className="btn-group__btn" 
                onClick={this.paginate.bind(this, 'more')}> 
                <i className="ion-chevron-right"></i> 
              </button>
              
            </div>
            <button className="flex-right">Agregar empresa</button>
          </div>
          <div className="card__content">

            <input 
              type="text" 
              placeholder="Buscar por nombre" 
              onChange={this.search} 
              value={nameLink} 
            />

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Razón Social</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {companiesNodes}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    )
  } 
});

export default connect((store) => {
  return store;
})(companies);
