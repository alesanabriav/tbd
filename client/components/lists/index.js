import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/lists';
import Paginate from '../paginate';
import Item from './item';
import Form from './form';

const lists = React.createClass({
	getInitialState() {
		return {
			showForm: false
		}
	},

	componentWillMount() {
		this.props.dispatch(action.fetch());
	},

	handleSubmit(list) {
		this.props.dispatch(action.store(list))
		.then(res => console.log(res));
	},

	toggleForm() {
		this.setState({showForm: !this.state.showForm});
	},

	remove(id) {
    this.props.dispatch(action.remove(id));
  },

	render() {
		const {items} = this.props;
		let listsNodes = items.map( item => <Item item={item} />);

		return (
			<div className="col-12 viewport_container">

			<div className={this.state.showForm ? "card" : "hidden"}>
				<div className="card__content">
					<Form onSubmit={this.handleSubmit} />
				</div>
			</div>
			
				<div className="card lists">
						<div className="card__header">
							<h3 className="pull-left" style={{marginRight: '15px'}}>Listas</h3>
							<Paginate onChange={this.paginate} />
							<button className="flex-right" onClick={this.toggleForm}>Agregar lista</button>
						</div>
						
						<div className="card__content">
							<table>
								<thead>
									<tr>
										<th>Nombre</th>
										<th># Empresas</th>
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
