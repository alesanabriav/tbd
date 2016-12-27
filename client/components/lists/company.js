import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			checked: false
		}
	},

	handleChange() {
		let val = !this.state.checked;
		this.setState({checked: val});
		this.props.onChange({add: val, id: this.props.item.id});
	},

	render() {
		let {item} = this.props;
		return (
			<tr>
				<td>
					<input 
						type="checkbox" 
						onChange={this.handleChange.bind(null, item)}
						value={this.state.checked}
						checked={this.state.checked}
					/>
					</td>
				<td>{item.name}</td>
				<td></td>
			 </tr>
		)
	}
});