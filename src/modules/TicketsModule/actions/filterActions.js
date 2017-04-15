import {
  ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER, ONLY_FILTER,
} from '../constants';

const addFilter = ({ value, filter = 'stops' }) => dispatch => dispatch({ type: ADD_FILTER, value, filter });
const removeFilter = ({ value, filter = 'stops' }) => dispatch => dispatch({ type: REMOVE_FILTER, value, filter });
const clearFilter = ({ filter = 'stops' }) => dispatch => dispatch({ type: CLEAR_FILTER, filter });
const onlyFilter = ({ values, filter = 'stops' }) => dispatch => dispatch({ type: ONLY_FILTER, values, filter });

export { addFilter, removeFilter, clearFilter, onlyFilter };
