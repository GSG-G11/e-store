import React from 'react';
import './Input.css'

const Input = ({ name ,type, handleChange}) => {
    return(
        <>
        <div className='input-form'>
            <label htmlFor={name} className='label-input'>{name}</label>
                <input name={name} type={type} value={handleChange} className='input'></input>
        </div>
        </>
    )
}

export default Input;