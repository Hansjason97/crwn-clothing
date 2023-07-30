import React from 'react'

function CustomButton({children,color, ...otherProps}) {
  return (
    <button className={`customButton ${color}`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton