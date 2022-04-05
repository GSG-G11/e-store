import React from 'react';
import './Select.css';

const Select = ({ name, handleChange, children, value }) => {
  return (
    <>
      <select
        className="select"
        onChange={handleChange}
        id={name}
        name={name}
        value={value}
      >
        {children.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
