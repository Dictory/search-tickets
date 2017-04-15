import { combineReducers } from 'redux';

import ticketsStore from 'TicketsModule/reducers';

const rootReducer = combineReducers({
  ticketsStore,
});

export default rootReducer;
