import React from 'react';
import CheckBox from './CheckBox';
import './Filter.css';

const FilterItem = ({ item: { value, label }, checked, hasOnly, handleOnly, handleToggle }) => (
  <div styleName="item">
    <a styleName="button" tabIndex={0} onClick={() => handleToggle(value)}>
      <CheckBox checked={checked} onChange={() => {}} />
      <div>{ label }</div>
    </a>
    {hasOnly &&
      <button styleName="only" onClick={() => handleOnly(value)}>Только</button>
    }
  </div>
);

export default FilterItem;
