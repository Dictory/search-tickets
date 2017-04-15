import camelize from 'camelize';
import sortBy from 'lodash/sortBy';
import config from '../config';

import {
  REQUEST, RECEIVE,
} from '../constants';

const load = () => (dispatch) => {
  dispatch({ type: REQUEST });
  return fetch(config.tickets.urls.load())
  .then(res => res.json())
  .then(res => camelize(res))
  .then((response) => {
    dispatch({
      type : RECEIVE,
      items: sortBy(response.tickets, ['price']),
    });
  });
};

export default load;
