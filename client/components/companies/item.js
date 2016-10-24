'use strict'; 
import React from 'react';

export default React.createClass({
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

  render() {
    const {id, name, email, phone} = this.props.company;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <button onClick={this.edit}>Editar</button>
          <button onClick={this.remove}>Eliminar</button>
          <button onClick={this.addToList}>Agregar</button>
          </td>
      </tr>
    )
  }
});