import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className='navbar__logo'>
          <FaGithub />
          <span>Github Finder</span>
        </Link>
        <div className="navbar__list">
          <NavLink to='/' className={({isActive})=>isActive ? 'navbar__link active' : 'navbar__link'}>Home</NavLink>
          <NavLink to='/about' className={({isActive})=>isActive ? 'navbar__link active' : 'navbar__link'}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar