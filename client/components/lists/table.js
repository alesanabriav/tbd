import React from 'react';
import Item from './item';

export default React.createClass({

	render() { 
		let listsNodes = this.props.lists.map(item => <Item key={item.key} item={item} />);
		
		return (
			<table>
      	<thead>
        	<tr>
            <th>#</th>
              <th>Razón Social</th>
              <th>Numero de Clientes</th>
          </tr>
        </thead>
        <tbody>
          {companiesNodes}
        </tbody>
    	</table>
		)
	}

});