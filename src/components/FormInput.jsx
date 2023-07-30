import React from 'react'

function FormInput({handleChange, label, ...otherProps}) {
  return (
    <div className='formGroup'>
        <input className='formInput' onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} formInputLabel`}>{label}</label>)
            : null
        }
    </div>
  )
}

export default FormInput