'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import page from 'page.js';
import store from './store';
import App from './components/app';
import Companies from './components/companies';
import Lists from './components/lists';
import ListCompanies from './components/lists/companies';
import Campaign from './components/campaign';

//import sass
require("../sass/main.scss");

const appContainer =  document.getElementById('app');

function root(child) {
  return (
    <App>
      <Provider store={store}>
        {child}
      </Provider>
    </App>);
};

page('/', () => {
  render( root(<Companies />) , appContainer);
});

page('/companies', () => {
  render( root(<Companies />) , appContainer);
});

page('/lists', () => {
  render( root(<Lists />) , appContainer);
});

page('/lists/:id/companies', (ctx) => {
  render( root(<ListCompanies id={ctx.params.id}  />) , appContainer);
});

page('/campaign', () => {
  render( root(<Campaign />) , appContainer);
});

page();