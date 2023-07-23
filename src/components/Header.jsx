import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/crown'

function Header() {
  return (
    <div className='header'>
        <Link to='/' className='logoContainer'>
            <Logo  className="logo"/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>shop</Link>
            <Link to='/shop' className='option'>contact</Link>
        </div>
    </div>
  )
}

export default Header