import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/companies';

const Company = React.createClass({
	componentWillMount() {
		this.props.dispatch(action.fetchOne(this.props.id));
	},

	render() {
		const {company} = this.props;

		return (
			<div className="col-12 viewport_container">
				<div className="card__header">
            <h3 className="pull-left">Empresa: {company.name}</h3>
        </div>
				<div className="card__content">
					<table>
						<thead>
							<tr>
								<th>NIT</th>
								<th>Ciudad</th>
								<th>Dirección</th>
								<th>Teléfono</th>
								<th>Email</th>
								<th>Asesor</th>
								<th>Contacto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>{company.nit}</td>
							<td>{company.city}</td>
							<td>{company.address}</td>
							<td>{company.phone}</td>
							<td>{company.email}</td>
							<td>{company.advisor}</td>
							<td>{company.contact}</td>
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
