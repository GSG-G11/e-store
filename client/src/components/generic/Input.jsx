import React from 'react';
import './Input.css';

const Input = ({ name, type }) => {
  return (
    <>
      <div className="input-form">
        <label htmlFor={name} className="label-input">
          {name}
        </label>
        <input name={name} type={type} className="input"></input>
      </div>
    </>
  );
};

export default Input;
