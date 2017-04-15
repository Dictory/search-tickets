import React from 'react';
import CheckBox from './CheckBox';
import styles from './Filter.css';

const FilterItem = ({ item: { value, label }, checked, handleOnly, handleToggle }) => (
  <div className={styles.item}>
    <div className={styles.button}>
      <CheckBox checked={checked} onClick={handleToggle} />
      <div>{ label }</div>
    </div>
    <button className={styles.only} onClick={() => handleOnly(value)}>Только</button>
  </div>
);

export default FilterItem;
