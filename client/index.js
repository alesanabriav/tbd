'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import page from 'page.js';
import store from './store';
import App from './components/app';
import Companies from './components/companies';

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
  render(
    root(<Companies />)
    , appContainer);
});

page('/empresas', () => {
  render(<App />, appContainer);
});

page('/listas', () => {
  render(<App />, appContainer);
});

page();