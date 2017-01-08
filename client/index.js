'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import page from 'page.js';
import axios from 'axios';
import store from './store';
import App from './components/app';
import Companies from './components/companies';
import Company from './components/companies/company';
import Lists from './components/lists';
import ListCompanies from './components/lists/companies';
import Campaign from './components/campaign';
import Login from './components/login';

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



function checkAuth(ctx, cb) {
  let token = localStorage.getItem('t84-db-token');
  let isAuth = token ? true : false;

  if(isAuth) {
    axios.defaults.headers.common['x-access-token'] = token;
    return cb();
  } else {
    page.redirect('login');
  }
}

page('/login', () => {
  render(<Login/> , appContainer);
});

page('/*', checkAuth);

page('/', () => {
  render( root(<Companies />) , appContainer);
});

page('/companies', () => {
  render( root(<Companies />) , appContainer);
});

page('/companies/:id', (ctx) => {
  render( root(<Company id={ctx.params.id}  />) , appContainer);
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