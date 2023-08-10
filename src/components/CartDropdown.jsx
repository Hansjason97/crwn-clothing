import React from 'react'
import CustomButton from './CustomButton'

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown