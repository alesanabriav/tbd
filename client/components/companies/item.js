'use strict'; 
import React from 'react';
import page from 'page.js';

export default React.createClass({
  getInitialState() {
    return {
      showRemove: false,
      added: false
    }
  },

  addToList() {
    this.props.addToList(this.props.company);
  },

  edit(e) {
    if(e) e.preventDefault();
    this.props.edit(this.props.company);
  },

  remove(e) {
    if(e) e.preventDefault();
    this.props.remove(this.props.company.id);
  },

  showRemove() {
    this.setState({showRemove: !this.state.showRemove});
  },

  add(e) {
    if(!this.state.added) {
      this.props.onAddToList(this.props.company.id);
      this.setState({added: true});
    } else {
      this.props.onRemoveToList(this.props.company.id);
      this.setState({added: false});
    }
  },

  see(e) {
   let id = this.props.company.id;
    page(`/companies/${id}`);
  },

  render() {
    const {id, name, email, phone} = this.props.company;

    return (
      <tr>
        <td><input type="checkbox" onChange={this.add} checked={this.props.ids.indexOf(id) != -1 ? true : false } /></td>
        <td>{name}</td>
        <td>
          <button onClick={this.see}>Ver</button>
          <button onClick={this.edit}>Editar</button>
          <button onClick={this.showRemove} className={this.state.showRemove ? 'hidden' : ''}>Eliminar</button>
          <button onClick={this.remove} className={this.state.showRemove ? '' : 'hidden'}>Seguro?</button>
          </td>
      </tr>
    )
  }
});