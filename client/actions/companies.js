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

export function addCompanyToList() {

}

export function setCompany() {
  
}