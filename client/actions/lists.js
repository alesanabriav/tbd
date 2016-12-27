import request from 'axios';
const TYPE = 'LISTS';
const endpoint = '/api/v1/lists';

export function get(id) {
  return dispatch => {
    return request
    .get(`${endpoint}/${id}`)
    .then(res => dispatch({ type: `${TYPE}_LIST`, payload: res.data }) )
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}

export function fetch(params = {}) {
  return dispatch => {
    return request
    .get(endpoint, {params})
    .then(res => dispatch({ type: `${TYPE}_FULFILLED`, payload: res.data }) )
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}

export function store(list = {}) {
  return dispatch => {
    return request
    .post(endpoint, list)
    .then(res => dispatch({type: `${TYPE}_ADD`, payload: res.data}))
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}

export function addCompanies(list, companies) {
  return dispatch => {
    return request
    .post(`${endpoint}/${list}/companies`, {companies})
    .then(res => dispatch({type: `${TYPE}_ADD_COMPANIES`, payload: res.data}))
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}

export function removeCompanies(listId, companies = []) {
  return dispatch => {
    return request
    .delete(`${endpoint}/${listId}/companies`, {params: companies})
    .then(res => dispatch({type: `${TYPE}_REMOVE_COMPANIES`, payload: res.data}))
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}

export function sendCampaign(data) {
  return dispatch => {
    return request
    .post(`${endpoint}/sendcampaign`, data)
    .then(res => dispatch({type: `${TYPE}_SENDCAMPAIGN`, payload: res.data}))
    .catch(err => dispatch( { type: `${TYPE}_FAIL`, payload: err}) );
  }
}
