import React, { useState } from 'react';
import './InpupStyles.css';

const TextArea = ({ icon, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="md-textbox textarea">
      <textarea
        onChange={handleChange}
        className={`${value ? 'has-value-textarea' : ''}`}
        id="textbox"
        type="text"
      />
      <span className="material-symbols-outlined ">{icon}</span>
      <label htmlFor="textbox" className="textarea-span">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
