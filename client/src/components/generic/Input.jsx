import React from 'react';

const Input = ({id, name ,type, value}) => {
    return(
        <>
            <label>
                <input name={name} type={type} value={value} onChange={}></input>
            </label>
        </>
    )
}

export default Input;