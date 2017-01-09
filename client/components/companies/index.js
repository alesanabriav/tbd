'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/companies';
import * as listAction from 'actions/lists';
import Item from './item';
import Form from './form';
import Paginate from '../paginate';
import ListOptions from '../lists/options';

const companies =  React.createClass({
  getInitialState() {
    return {
      showForm: false,
      showAlert: false,
      company: {},
      addedAll: false
    }
  },

  componentWillMount() {
    this.props.dispatch(action.fetch());
    this.props.dispatch(listAction.fetch());
  },

  paginate(type, evt) {
    if(evt) evt.preventDefault();
    let {query} = this.props.companies;
    this.props.dispatch(action.paginate(query, type));
  },

  search(evt) {
    let {query} = this.props.companies;
    this.props.dispatch(action.search(query, evt.target.value));
  },

  edit(e) {
    window.location = '#companyform';
    this.setState({...this.state, company: e, showForm: true});
  },

  remove(id) {
    this.props.dispatch(action.remove(id));
  },

  handleSubmit(data) {
    if(data.type == 'add') {
      this.props.dispatch(action.add(data))
      .then(() => this.toggleForm())
    }

    if(data.type == 'update') {
      this.props.dispatch(action.update(data))
      .then(() => this.toggleForm())
    }
  },

  toggleForm() {
    this.setState({...this.state, showForm: !this.state.showForm});
  },

  addToList(id) {
    this.props.dispatch(action.addToList(id));
  },

  removeToList(id) {
    this.props.dispatch(action.removeToList(id));
  },

  handleListId(id) {
    this.props.dispatch(action.setList(id));
  },

  addCompanies() {
    let {list, ids} = this.props.companies;
    this.props.dispatch(listAction.addCompanies(list, ids))
    .then(() => {
      this.setState({showAlert: true});
      this.props.dispatch(action.cleanIds())
    });
  },

  addAll() {
    let ids = this.props.companies.items.map(company => company.id);
    
    if(this.state.addedAll) {
      ids.forEach(id => this.props.dispatch(action.removeToList(id)));
    } else {
      ids.forEach(id => this.props.dispatch(action.addToList(id)));
    }

    this.setState({addedAll: !this.state.addedAll});
    
  },

  
  render() {
    const {nameLink, items, ids} = this.props.companies;
    const companiesNodes = items.map((company, ind) =>
      <Item
        ids={ids}
        key={ind} 
        company={company}
        edit={this.edit} 
        remove={this.remove} 
        onAddToList={this.addToList}
        onRemoveToList={this.removeToList}
        />
    );

    return (
       <div className="col-12 viewport_container">
        <div 
          className={this.state.showForm ? "card form_companies form_companies-show" : "card form_companies"}>
          <div className="card__content">
             <Form 
                handleSubmit={this.handleSubmit} 
                cancel={this.toggleForm} 
                company={this.state.company}
              />
          </div>
       </div>

        <div className="card companies">
          <div className="card__header">
            <h3 className="pull-left">Empresas</h3>
            <Paginate onChange={this.paginate} />
            <button className="flex-right" onClick={this.toggleForm}>Agregar empresa</button>
          </div>
          
          <div className="card__content">

            <input 
              type="text" 
              placeholder="Buscar por nombre" 
              onChange={this.search} 
              value={nameLink} 
            />

        <ListOptions items={this.props.lists.items} onChange={this.handleListId} />

        <button onClick={this.addCompanies}>Agregar</button>

        <div className={ this.state.showAlert ? "alert" : "hidden"}> Empresas Agregadas </div>

              <table>
                <thead>
                  <tr>
                    <th> 
                      <input type="checkbox" onChange={this.addAll} /> 
                    </th>
                    <th>Razón Social</th>
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
