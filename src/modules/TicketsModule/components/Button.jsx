import React from 'react';
import './Button.css';

const Button = ({ price }) => (
  <button styleName="box">
    Купить за { price.toLocaleString() } ₽
  </button>
);

export default Button;
