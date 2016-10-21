'use strict'; 
import React from 'react';

export default React.createClass({
  addCompanyToList() {
    this.props.addToList(this.props.company);
  },

  editCompany() {
    this.props.editCompany(this.props.company);
  },

  render() {
    const {name, email, phone} = this.props.company;
    return (
      <tr>
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