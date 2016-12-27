import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/lists';
import Company from './company';

const lists = React.createClass({
	getInitialState() {
		return {
			companies: []
		}
	},

	componentWillMount() {
		this.props.dispatch(action.get(this.props.id));
	},

	handleCompanies(item, e) {
		let companies;

		if(this.state.companies.indexOf(item.id) == '-1') {
			companies = [...this.state.companies, item.id];
		} else {
			companies = this.state.companies.filter(id =>{
				return id != item.id;
			});
		}
 
		this.setState({companies});
	},

	remove(e) {
		e.preventDefault();
		this.props.dispatch(action.removeCompanies(this.props.id, this.state.companies));
	},

	render() {
		const companies = this.props.list.companies ? this.props.list.companies : [];

		let listsNodes = companies.map( item => 
			<Company key={item.id} onChange={this.handleCompanies} item={item} />
		);

		return (
			<div className="col-12 viewport_container">
				
				<div className="card lists-companies">
						<div className="card__header">
							<h3 className="pull-left" style={{marginRight: '15px'}}>Lista: {this.props.list.title}</h3>
						</div>
						
						<div className="card__content">
						<button onClick={this.remove}>Eliminar de la lista</button>
							<table>
								<thead>
									<tr>
										<th>#</th>
										<th>Nombre</th>
										<th>Opciones</th>
									</tr>
								</thead>
								<tbody>
									{listsNodes}
								</tbody>
							</table>
						</div>
				</div>
			</div>
		)
	}
});

export default connect((store) => {
  return store.lists;
})(lists);
