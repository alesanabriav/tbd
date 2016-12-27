'use strict'; 
import React from 'react';

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
    this.props.remove(this.props.company.id);
  },

  showRemove() {
    this.setState({showRemove: !this.state.showRemove});
  },

  add(e) {
    this.props.onAddToList(this.props.company.id);
  },

  render() {
    const {id, name, email, phone} = this.props.company;
    return (
      <tr>
        <td><input type="checkbox" onChange={this.add} /></td>
        <td>{name}</td>
        <td>
          <button onClick={this.edit}>Editar</button>
          <button onClick={this.showRemove} className={this.state.showRemove ? 'hidden' : ''}>Eliminar</button>
          <button onClick={this.remove} className={this.state.showRemove ? '' : 'hidden'}>Seguro?</button>
          </td>
      </tr>
    )
  }
});