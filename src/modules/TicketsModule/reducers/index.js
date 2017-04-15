import { fromJS } from 'immutable';
import {
  REQUEST, RECEIVE, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER, ONLY_FILTER,
} from '../constants';

const path = ({ filter }, type = 'items') => ['filters', filter, type];

const ticketsStore = (state = fromJS({
  isFetching: true,
  items     : [],
  filters   : {
    stops: {
      items: [],
    },
  },
}), action) => {
  switch (action.type) {
    case REQUEST:
      return state.set('isFetching', true);
    case RECEIVE:
      return state.set('isFetching', false).set('items', fromJS(action.items || []));
    case ADD_FILTER:
      return state.updateIn(path(action), arr => arr.push(action.value));
    case REMOVE_FILTER:
      return state.updateIn(path(action), arr => arr.filter(item => item !== action.value));
    case CLEAR_FILTER:
      return state.setIn(path(action), fromJS([]));
    case ONLY_FILTER:
      return state.setIn(path(action), fromJS(action.values || []));
    default:
      return state;
  }
};

export default ticketsStore;
