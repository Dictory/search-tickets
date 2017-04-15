import { combineReducers } from 'redux';

import ticketsStore from '../../modules/TicketsModule/reducers';

const rootReducer = combineReducers({
  ticketsStore,
});

export default rootReducer;
