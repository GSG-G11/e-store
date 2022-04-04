import React from 'react';
import './Select.css'

const Select = ({ name , handleChange, children}) => {
    return(
        <>
        <select className='select' onChange={handleChange} id={name} name={name}>
          {children.map(e => <option key={e} value={e}>{e}</option>)}
       </select>
        </>
    )
}

export default Select;