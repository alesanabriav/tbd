import React from 'react';
import page from 'page.js';
import request from 'axios';

const login = React.createClass({
	getInitialState() {
		return {
			user: '',
			password: '',
			errors: []
		}
	},

	handleChange(field, e) {
		this.setState({[field]: e.currentTarget.value});
	},

	login() {
		request
		.post('/login', this.state)
		.then(res => {
			console.log(res);
			localStorage.setItem('t84-db-token', res.data.token);
			page.redirect('/');
		})
		.catch(err => this.setState({errors: err.response.data.message}));
	},

	render() {
		return (
			<div style={{width: '500px', margin: '30px'}}>
				<input type="text" onChange={this.handleChange.bind(null, 'user')} placeholder="usuario" value={this.state.user} />
				<input type="password" onChange={this.handleChange.bind(null, 'password')} placeholder="contraseña" value={this.state.password}  />
				<div>
					{this.state.errors}
				</div>
				<button onClick={this.login}>login</button>
			</div>
		)
	}
});

export default login;