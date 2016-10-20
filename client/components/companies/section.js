'use strict';
import React from 'react';
import request from 'axios';
export default React.createClass({
  componentDidMount() {
    request
    .get('/api/v1/companies')
    .then(res => res.data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  },

  render() {
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brand spa</td>
                    <td>ale@brandspa.com</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    )
  } 
});