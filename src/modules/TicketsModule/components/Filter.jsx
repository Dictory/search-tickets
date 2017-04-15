import React from 'react';
import map from 'lodash/map';
import FilterItem from './FilterItem';
import styles from './Filter.css';

const Filter = ({ filters }) => {
  const list = map(filters, filter => <FilterItem key={filter.value} item={filter} />);
  return <div className={styles.box}><div className={styles.list}>{list}</div></div>;
};

export default Filter;
