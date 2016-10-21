'use strict';

export default React.createClass({

  render() {
    return (
      <Form className="row">
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'name')" 
                placeholder="Razón social" />
        </div>
        
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'commercial_name')" 
                placeholder="Nombre comercial" />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'nit')" 
                placeholder="NIT" />
        </div>
        
        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'email')" 
                placeholder="Email" />
        </div>

         <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'city')" 
                placeholder="Ciudad" />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'address')" 
                placeholder="Dirección" />
        </div>

        <div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'phone')" 
                placeholder="Teléfono" />
        </div>

				<div className="input-container col-6">
            <input 
                type="text" 
                onChange="handleInputChange.bind(this, 'contact_name')" 
                placeholder="Contacto" />
        </div>
       
      </Form>
    );
  }
});