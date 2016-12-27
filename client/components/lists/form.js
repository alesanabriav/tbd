import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			title: ''
		}
	},

	handleInputChange(field, e) {
		let state = {
			...this.state,
			[field]: e.currentTarget.value
		};
		
		this.setState(state);
	},

	cancel(e) {
		e.preventDefault();
	},

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
	},

	render() {
		return (
			<form className="row" onSubmit={this.handleSubmit}>
				  <div className="input-container col-12">
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this, 'title')}
                placeholder="Nombre"
                value={this.state.title}
            />
						 <div className="col-12">
            <button className="pull-left" onClick={this.cancel}>Cancelar</button>
            <button className="pull-right">Guardar</button>
        </div>
        </div>
			</form>
		)
	}
});