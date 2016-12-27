'use strict';
import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="nav">
        <div className="nav__logo">
          <a href="/">Taller84</a>
        </div>
        <ul className="nav__menu">
          <li>
          <a href="/companies">Empresas</a>
          </li>
          <li> <a href="/lists">Listas</a></li>
          <li> <a href="/campaign">Campaña</a></li>
        </ul>
      </div>
    )
  }
});
