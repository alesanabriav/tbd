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

export function addCompanyToList() {

}

export function setCompany() {
  
}