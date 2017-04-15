import React from 'react';
import styles from './CheckBox.css';

const CheckBox = ({ checked }) => (
  <div className={styles.box}>
    <input type="checkbox" value="None" name="check" checked={checked} />
    <div className={styles.label} />
  </div>
);

export default CheckBox;
