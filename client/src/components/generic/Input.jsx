import React from 'react';

const Input = ({ name ,type, value, handleChange}) => {
    return(
        <>
            <label>
                {name}
                <input name={name} type={type} value={value} onChange={handleChange}></input>
            </label>
        </>
    )
}

export default Input;