'use strict';
import React from 'react';

const initialState = {
    type: 'add',
    name: '',
    commercial_name: '',
    nit: '',
    email: '',
    city: '',
    address: '',
    phone: '',
    contact_name: ''
};

export default React.createClass({
  getInitialState() {
    return initialState;
  },

  componentWillReceiveProps(props) {
      if(props.company.id) {
        Object.keys(props.company)
        .forEach((key) => {
            props.company[key] = props.company[key] == null ? '' : props.company[key];
        });

          let newState = {...props.company, type: 'update'};
          this.setState({...initialState, ...newState});
      }
    },

  handleInputChange(field, evt) {
    let newState = {};
    newState[field] = evt.target.value;
    this.setState({...this.state, ...newState});
  },
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  },

  cancel(e) {
      e.preventDefault();
      this.props.cancel();
  },

  render() {

    return (
      <form className="row" onSubmit={this.handleSubmit} id="companyform">
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'name')}
                placeholder="Razón social" 
                value={this.state.name}
            />
        </div>
        
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'commercial_name')}
                placeholder="Nombre comercial" 
                value={this.state.commercial_name}
            />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'nit')}
                placeholder="NIT" 
                value={this.state.nit}
            />
        </div>
        
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'email')}
                placeholder="Email" 
                value={this.state.email}
            />
        </div>

         <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'city')}
                placeholder="Ciudad" 
                value={this.state.city}
            />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'address')}
                placeholder="Dirección" 
                value={this.state.address}
            />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'phone')}
                placeholder="Teléfono" 
                value={this.state.phone}
            />
        </div>

		<div className="input-container col-6">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'contact_name')}
                placeholder="Contacto" 
                value={this.state.contact_name}
            />
        </div>

        <div className="col-12">
            <button className="pull-left" onClick={this.cancel}>Cancelar</button>
            <button className="pull-right">Guardar</button>
        </div>
       
      </form>
    );
  }
});