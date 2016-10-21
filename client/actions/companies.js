'use strict';
const TYPE = "COMPANIES";

export function fetchCompanies() {
  return {
    type: `${TYPE}_FULFILLED`,
    payload: [{name: 'brandspa', phone: '122434'}, {name: 'taller84', phone: '122434'}]
  }
}

export function addCompanyToList() {

}

export function setCompany() {
  
}