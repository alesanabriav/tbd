'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'axios';
import  {fetchCompanies, paginateCompanies} from '../../actions/companies';
import Item from './item';

const companies =  React.createClass({
  componentWillMount() {
    this.props.dispatch(fetchCompanies());
  },

  paginate(type, evt) {
    let offset = this.props.companies.offset;
    if(type == 'more') offset += 25;
    if(type == 'less' && offset > 0) offset -= 25;
    this.props.dispatch(paginateCompanies(offset));
  },

  search(e) {
    
  },

  render() {
    const {nameLink, items} = this.props.companies;
    const companiesNodes = items.map((company, ind) => {
      return <Item key={ind} company={company} />
    });

    return (
       <div className="col-12">
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
