import React from 'react'
import ShopIcon from '../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../redux/cart/cart.actions'

function CartIcon({toggleCartHidden}) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <img src={ShopIcon} alt="Shop icon" className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)