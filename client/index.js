'use strict';
import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import page from 'page.js';
 require("../sass/main.scss");


page('/', () => {
  render(<App />, document.getElementById('app'));
});

page('/empresas', () => {
  render(<App />, document.getElementById('app'));
});

page('/listas', () => {
  render(<App />, document.getElementById('app'));
});

page();