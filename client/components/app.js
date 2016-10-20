'use strict';
import React from 'react';
import Nav from './nav';
import Companies from './companies/section';

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <Companies />
      </div>
    )
  }
});
