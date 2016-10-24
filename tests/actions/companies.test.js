import * as actions from '../../client/actions/companies';
import sinon from 'sinon';
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const TYPE = "COMPANIES";

describe('company actions', () => {
  beforeEach(function () {
      moxios.install()
    })


  it('it should fetch a list', () => {

    moxios
    .stubRequest('/api/v1/companies', {
        status: 200,
        response: [{name: 'company name'}]
      })


     const store = mockStore({ todos: [] });
   
     const expectedActions =[ { type: `${TYPE}_FULFILLED`, payload: [{name: 'company name'}] }];

      store.dispatch(actions.fetchCompanies()).then(e => expect( store.getActions() ).toBe(expectedActions) );

  })

});