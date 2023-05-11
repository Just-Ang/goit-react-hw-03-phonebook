import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  
  <label className={css.label}>
   Find contacts by name
    <input  className={css.input} type="text" value={value} onChange={onChange} />
  </label>

);

export default Filter;


Filter.propTypes = {
  value: PropTypes.string.isRequired,
}