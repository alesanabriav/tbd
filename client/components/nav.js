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
          <a href="/empresas">Empresas</a>
          </li>
          <li> <a href="/listas">Listas</a></li>
        </ul>
      </div>
    )
  }
});
