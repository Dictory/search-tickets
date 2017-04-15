import React from 'react';
import CheckBox from './CheckBox';
import styles from './Filter.css';

const FilterItem = ({ item: { value, label }, checked, hasOnly, handleOnly, handleToggle }) => (
  <div className={styles.item}>
    <a className={styles.button} tabIndex={0} onClick={() => handleToggle(value)}>
      <CheckBox checked={checked} onChange={() => {}} />
      <div>{ label }</div>
    </a>
    {hasOnly &&
      <button className={styles.only} onClick={() => handleOnly(value)}>Только</button>
    }
  </div>
);

export default FilterItem;
