'use strict';
const TYPE = 'LISTS';

const initiState = {
  items: [],
  errors: [],
  list: {
    companies: []
  },
  query: {
    offset: 0,
    nameLike: null
  },
  fetching: false,
};

export default function reducer(state = initiState, action) {
  switch(action.type) {
    case `${TYPE}_FETCH`:
      return {...state, fetching: true};
    break;

    case `${TYPE}_LIST`:
      return {...state, list: action.payload};
    break;

    case `${TYPE}_FULFILLED`:
      return {
        ...state, 
        fetching: false, 
        items: action.payload
      };
    break;

    case `${TYPE}_ADD`:
      return {
        ...state, 
        fetching: false, 
        items: [action.payload].concat(state.items)
      };
    break;

    case `${TYPE}_REMOVE`:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload)
      };
    break;

    case `${TYPE}_REMOVE_COMPANIES`:
    
      let companies = state.list.companies.filter(company => action.payload.indexOf(company.id) == -1 );
      console.log(companies);
      return {
        ...state,
        list: {...state.list, companies} 
      };
    break;

    case `${TYPE}_FAIL`:
      return {
        ...state, 
        fetching: false, 
        errors: action.payload
      };
    break;

		default:
			return state; 
		break;
	}

}