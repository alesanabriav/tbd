'use strict';
import request from 'axios';

const TYPE = "COMPANIES";

function fullfiledCompanies(companies) {
  return { type: `${TYPE}_FULFILLED`, payload: companies};
};

function failCompanies(err) {
  return { type: `${TYPE}_FAIL`, payload: err};
};

export function fetchCompanies(params = {}) {
  return dispatch => {
    return request
    .get('/api/v1/companies', {params: params})
    .then(res => {

      return dispatch(fullfiledCompanies(res.data));
    })
    .catch(err => dispatch( failCompanies(err) ));
  }
}

export function paginateCompanies(query, type) {
  let {offset} = query;
  if(type == 'more') offset += 25;
  if(type == 'less' && offset > 0) offset -= 25;
  query = {...query, offset};

  return function(dispatch) { 
    dispatch({type: `${TYPE}_PAGINATE`, payload: query});
    dispatch(fetchCompanies(query));
  }
}

export function searchCompanies(query, name) {
  if(name.length <= 0) name = null;
  query = {...query, nameLike: name};
  
  return function(dispatch) { 
    dispatch({type: `${TYPE}_SEARCH`, payload: query});
    dispatch(fetchCompanies(query));
  }
}

export function addCompany(company) {
  return function(dispatch) {
    request
    .post('/api/v1/companies', company)
    .then(res => {
      dispatch({type: `${TYPE}_ADD`, payload: res.data})
    })
  }
}

export function updateCompany(company) {
  return function(dispatch) {
    request
    .put(`/api/v1/companies/${company.id}`, company)
    .then(res => {
      dispatch({type: `${TYPE}_UPDATE`, payload: res.data})
    })
  }
}

export function removeCompany(id) {
  return function(dispatch) {
    request
    .delete('/api/v1/companies',  {data:{id}})
    .then(res => {
      dispatch({type: `${TYPE}_REMOVE`, payload: id})
    })
  }
  
}

export function addCompanyToList() {

}

export function setCompany() {
  
}