'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'axios';
import  {fetchCompanies} from '../../actions/companies';
import Item from './item';

const companies =  React.createClass({
  componentWillMount() {
    this.props.dispatch(fetchCompanies());
  },

  render() {
    const companiesNodes = this.props.companies.items.map((company, ind) => {
      return <Item key={ind} company={company} />
    });

    return (
       <div className="col-12">
        <div className="card">
          <div className="card__header">
            <h3 className="pull-left">Empresas</h3>
            <button className="flex-right">Agregar empresa</button>
          </div>
          <div className="card__content">
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
