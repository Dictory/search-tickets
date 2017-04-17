import React from 'react';
import './CheckBox.css';

const CheckBox = ({ checked, onChange }) => (
  <div styleName="box">
    <input type="checkbox" value="None" name="check" checked={checked} onChange={onChange} />
    <div styleName="label" />
  </div>
);

export default CheckBox;
