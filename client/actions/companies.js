'use strict';
import request from 'axios';
const TYPE = "COMPANIES";

export function fetchCompanies(params = {}) {
  return function(dispatch) {
    request
    .get('/api/v1/companies', {params: params})
    .then(res => {
      dispatch({ type: `${TYPE}_FULFILLED`, payload: res.data });
    })
  }
}

export function paginateCompanies(offset) {
  let params = {offset};
  
  return function(dispatch) { 
    dispatch({type: `${TYPE}_PAGINATE`, payload: offset});
    dispatch(fetchCompanies(params));
  }
}

export function searchCompanies(query) {
  let params = {nameLike: query};
  
  return function(dispatch) { 
    dispatch({type: `${TYPE}_SEARCH`, payload: queryLike});
    dispatch(fetchCompanies(params));
  }
}

export function addCompanyToList() {

}

export function setCompany() {
  
}