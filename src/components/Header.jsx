import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/crown'
import { auth } from '../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'

function Header({currentUser, hidden}) {

  
  return (
    <div className='header'>
        <Link to='/' className='logoContainer'>
            <Logo  className="logo"/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>shop</Link>
            <Link to='/shop' className='option'>contact</Link>
            {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>sign out</div>
              :
              <Link to='/sign-in' className='option'>sign in</Link>
            }
            <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown />
        }
        
    </div>
  )
}

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header)