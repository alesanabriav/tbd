'use strict'; 
import React from 'react';
import page from 'page.js';

export default React.createClass({
  getInitialState() {
    return {
      showRemove: false
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
    let id = this.props.item.id;
    this.props.remove(id);
  },

  showRemove() {
    this.setState({showRemove: !this.state.showRemove});
  },

  see() {
   let id = this.props.item.id;
    page(`/lists/${id}/companies`);
  },

  render() {
    const {id, title, companies} = this.props.item;

    return (
      <tr>
        <td>{title}</td>
        <td>{companies ? companies.length : 0}</td>
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
