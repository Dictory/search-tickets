import React from 'react';
import map from 'lodash/map';
import FilterItem from './FilterItem';
import styles from './Filter.css';
import inFilter from '../actions/inFilter';
import { CLEAR_VALUE } from '../constants';

const Filter = ({ items, filter, handleToggle, handleOnly }) => {
  const list = map(items, item => <FilterItem
    key={item.value}
    item={item}
    checked={
      item.value === CLEAR_VALUE
        ? filter.get('items').size === 0
        : inFilter(filter, item.value)
    }
    hasOnly={item.value !== CLEAR_VALUE}
    handleToggle={handleToggle}
    handleOnly={handleOnly}
  />);
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>Количество пересадок</div>
        <div className={styles.list}>{list}</div>
      </div>
    </div>
  );
};

export default Filter;
