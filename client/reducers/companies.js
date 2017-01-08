'use strict';
const TYPE = 'COMPANIES';

const initiState = {
  items: [],
  company: {},
  list: null,
  ids: [],
  company: {},
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

    case `${TYPE}_SET_COMPANY`:
      return {...state, company: action.payload};
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
      let items =  state.items.map(item => 
        item.id == action.payload.id ? {...item, ...action.payload} : item
      );

      return { ...state, items: items };
    break;

    case `${TYPE}_REMOVE`:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload)
      };
    break;

    case `${TYPE}_ADD_TO_LIST`:
      return {
        ...state,
        ids: [action.payload].concat(state.ids)
      };
    break;

    case `${TYPE}_CLEAN_LIST`:
      return {
        ...state,
        ids: []
      };
    break;

    case `${TYPE}_SET_LIST`:
      return {
        ...state,
        list: action.payload
      };
    break;

    
    
    default:
      return state;
    break;
  }
}
