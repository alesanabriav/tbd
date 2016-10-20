'use strict';
import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="nav">
        <div className="nav__logo">
          Taller84
        </div>
        <ul className="nav__menu">
          <li>
          <a href="#">Empresas</a>
          </li>
          <li> <a href="#">Listas</a></li>
        </ul>
      </div>
    )
  }
});
