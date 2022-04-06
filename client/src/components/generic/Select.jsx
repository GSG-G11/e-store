import React from 'react';
import './Select.css';

const Select = ({ name, children, value, onChange }) => {
  return (
    <>
      <select
        className="select"
        onChange={onChange}
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
