'use strict';
const TYPE = 'LISTS';

const initiState = {
  items: [],
  errors: [],
  list: {},
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