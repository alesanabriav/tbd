'use strict';
import _ from 'lodash';

const TYPE = 'COMPANIES';

const initiState = {
  items: [],
  query: {
    offset: 0,
    nameLike: null
  },
  fetching: false,
  fetched: false
};

export default function reducer(state = initiState, action) {
  switch(action.type) {
    case `${TYPE}_FETCH`:
      return {...state, fetching: true};
    break;
    case `${TYPE}_FULFILLED`:
      return {
        ...state, 
        fetching: false, 
        items: action.payload
      };
    break;
    case `${TYPE}_PAGINATE`:
      return {
        ...state,
        query: action.payload
      };
    break;
    case `${TYPE}_SEARCH`:
      return {
        ...state,
        query: action.payload
      };
    break;
    case `${TYPE}_ADD`:
      return {
        ...state,
        items: [...[ action.payload ], ...state.items]
      };
    break;
    case `${TYPE}_UPDATE`:
      let items =  state.items.map(item => {
          if(item.id == action.payload.id) {
            return {...item, ...action.payload};
          }

          return item;
        });

      return {
        ...state,
        items: items
      };
    break;
    case `${TYPE}_REMOVE`:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload)
      };
    break;
    default:
      return state;
  }
}
