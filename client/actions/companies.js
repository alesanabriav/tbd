'use strict';
import request from 'axios';

const TYPE = "COMPANIES";
const endpoint = "/api/v1/companies";

function fullfiledCompanies(companies) {
  return { type: `${TYPE}_FULFILLED`, payload: companies};
};

function failCompanies(err) {
  return { type: `${TYPE}_FAIL`, payload: err};
};

export function fetch(params = {}) {
  return dispatch => {
    return request
    .get(endpoint, {params})
    .then(res => dispatch(fullfiledCompanies(res.data)))
    .catch(err => dispatch( failCompanies(err) ));
  }
}

export function fetchOne(id) {
  return dispatch => {
    return request
    .get(`${endpoint}/${id}`)
    .then(res => dispatch({type: `${TYPE}_SET_COMPANY`, payload: res.data}))
    .catch(err => dispatch({type: `${TYPE}_FAIL`, payload: res.data}))
  }
}

export function paginate(query, type) {
  let {offset} = query;
  if(type == 'more') offset += 25;
  if(type == 'less' && offset > 0) offset -= 25;
  query = {...query, offset};

  return function(dispatch) { 
    dispatch({type: `${TYPE}_PAGINATE`, payload: query});
    dispatch(fetch(query));
  }
}

export function search(query, name) {
  if(name.length <= 0) name = null;
  query = {...query, nameLike: name};
  
  return function(dispatch) { 
    dispatch({type: `${TYPE}_SEARCH`, payload: query});
    dispatch(fetch(query));
  }
}

export function add(company) {
  return function(dispatch) {
    return request
    .post(endpoint, company)
    .then(res => dispatch({type: `${TYPE}_ADD`, payload: res.data}))
  }
}

export function update(company) {
  return function(dispatch) {
    return request
    .put(`${endpoint}/${company.id}`, company)
    .then(res => dispatch({type: `${TYPE}_UPDATE`, payload: res.data}))
  }
}

export function remove(id) {
  return function(dispatch) {
    request
    .delete('/api/v1/companies',  {data: {id}})
    .then(res => {
      dispatch({type: `${TYPE}_REMOVE`, payload: id})
    })
  }
}

export function addToList(id) {
  return {type: `${TYPE}_ADD_TO_LIST`, payload: id}
}

export function cleanIds() {
  return {type: `${TYPE}_CLEAN_LIST`, payload: []}
}

export function setList(id) {
  return {type: `${TYPE}_SET_LIST`, payload: id}
}

