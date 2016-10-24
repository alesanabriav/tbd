'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'axios';
import  {
  fetchCompanies, 
  paginateCompanies,
  searchCompanies,
  addCompany,
  removeCompany
} from '../../actions/companies';
import Item from './item';
import Form from './form';
import Paginate from './paginate';

const companies =  React.createClass({
  getInitialState() {
    return {
      showForm: false
    }
  },

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

  remove(id) {
    this.props.dispatch(removeCompany(id));
  },

  handleSubmit(data) {
    if(data.type == 'add') this.props.dispatch(addCompany(data));
  },

  render() {
    const {nameLink, items} = this.props.companies;
    const companiesNodes = items.map((company, ind) => {
      return <Item key={ind} company={company} edit={this.edit} remove={this.remove} />
    });

    return (
       <div className="col-12 viewport_container">
        <div 
          className={this.state.showForm ? "card form_companies form_companies-show" : "card form_companies"}>
          <div className="card__content">
             <Form handleSubmit={this.handleSubmit} />
          </div>
       </div>

        <div className="card companies">
          <div className="card__header">
            <h3 className="pull-left">Empresas</h3>
            <Paginate onChange={this.paginate} />
            <button className="flex-right" onClick={() => this.setState({...this.state, showForm: !this.state.showForm})}>Agregar empresa</button>
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
