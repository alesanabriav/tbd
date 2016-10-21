'use strict'; 
import React from 'react';

export default React.createClass({
  addCompanyToList() {
    this.props.addToList(this.props.company);
  },

  editCompany(e) {
    if(e) e.preventDefault();
    this.props.editCompany(this.props.company);
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
          <button onClick={this.editCompany}>Editar</button>
          <button onClick={this.addCompanyToList}>Agregar</button>
          </td>
      </tr>
    )
  }
});