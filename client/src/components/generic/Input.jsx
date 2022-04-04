import React from 'react';

const Input = ({ name ,type, value}) => {
    return(
        <>
            <label>
                <input name={name} type={type} value={value} onChange={}></input>
            </label>
        </>
    )
}

export default Input;