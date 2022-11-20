import React, { useState } from 'react';
import './InpupStyles.css';

const Input = ({ icon, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? 'has-value' : ''}`}
        id="textbox"
        type="text"
      />
      <span className="material-symbols-outlined">{icon}</span>
      <label htmlFor="textbox">{label}</label>
    </div>
  );
};

export default Input;
