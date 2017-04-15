import {
  REQUEST, RECEIVE,
} from '../constants';

const ticketsStore = (state = {
  isFetching: true,
  items     : [],
}, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true };
    case RECEIVE:
      return { ...state, isFetching: false, items: action.items };
    default:
      return state;
  }
};

export default ticketsStore;
