import React from 'react';
import {connect} from 'react-redux';
import Editor from 'components/lib/editor';
import * as listAction from 'actions/lists';
import Upload from './upload';

const campaign = React.createClass({
	getInitialState() {
		return {
			content: '',
			listId: '',
			errors: []
		}
	},

	componentWillMount() {
		this.props.dispatch(listAction.fetch());
	},

	handleContent(html) {
		this.setState({content: html});
	},

	addImage(file) {
		let url = `${window.location.origin}/uploads/${file.filename}`;
		this.refs['ed'].insertImage(url);
	},

	handleList(e) {
		let list = e.currentTarget.value;
		this.setState({listId: list});
	},

	handleChange(field, e) {
		let val = e.currentTarget.value;
		this.setState({[field]: val});
	},

	send(e) {
		e.preventDefault();
		let errors = [];
		if(!this.state.subject) errors.push('Ingrese el titulo de la campaña');
		if(!this.state.listId) errors.push('Seleccione una lista');
		if(!this.state.content) errors.push('Ingrese el contenido de la campaña');
		this.setState({errors});
		if(errors.length == 0) {
			this.props.dispatch(listAction.sendCampaign(this.state));
		}
	},

	render() {
		const ListsNodes = this.props.lists.items.map(opt => { 
			return <option value={opt.id}>{opt.title}</option> 
		});

		return (
			<div className="col-12 viewport_container">
				<div className="card">
				<div className="card__header">
							<h3 className="pull-left" style={{marginRight: '15px'}}>Campaña</h3>
						</div>
						
					<div className="card__content">
						<input type="text" placeholder="Título de la campaña" onChange={this.handleChange.bind(null, 'subject')} />
						<select value={this.state.listId} onChange={this.handleList}>
							<option value="">Seleccionar lista</option>
							{ListsNodes}
						</select>
						<Upload onChange={this.addImage}/> 
						<Editor ref="ed" value="" onChange={this.handleContent} />
					
						<br/>
						<div style={this.state.errors.length > 0 ? {'background': 'red', padding: '10px', 'color': '#fff'} : {}}>
						{this.state.errors.join(', ')}
						</div>
						<button className="btn" onClick={this.send}> Enviar </button>
					</div>
				</div>
			</div>
		)
	}
});

export default connect(store => store)(campaign);