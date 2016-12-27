'use strict';
import {combineReducers} from 'redux';
import companies from './companies';
import lists from './lists';

export default combineReducers({
  companies,
  lists
});
