import React from 'react';

export default React.createClass({
	handleChange(e) {
		this.props.onChange(e.currentTarget.value);
	},

	render() {
		return (
			 <select onChange={this.handleChange}>
        <option value="">Seleccionar lista</option>
        	{this.props.items.map(list => 
          	<option value={list.id}> {list.title}</option>  
          )}
      </select>
		)
	}
});

