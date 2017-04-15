import React from 'react';
import styles from './Button.css';

const Button = ({ price }) => (
  <button className={styles.box}>
    Купить за { price.toLocaleString() } ₽
  </button>
);

export default Button;
