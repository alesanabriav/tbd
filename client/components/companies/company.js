import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/companies';

const Company = React.createClass({
	componentDidMount() {
		this.props.dispatch(action.fetchOne(this.props.id));
	},

	render() {
		const {company} = this.props;

		return (
			<div className="col-12 viewport_container">
				<div className="card__content">
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>NIT</th>
								<th>Ciudad</th>
								<th>Dirección</th>
								<th>Teléfono</th>
								<th>Contacto</th>
								<th>Email</th>
								<th>Asesor</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>{company.name}</td>
							<td>{company.nit}</td>
							<td>{company.city}</td>
							<td>{company.address}</td>
							<td>{company.phone}</td>
							<td>{company.contact}</td>
							<td>{company.email}</td>
							<td>{company.phone}</td>
							<td>{company.advisor}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});


export default connect((store) => {
  return store.companies;
})(Company);
