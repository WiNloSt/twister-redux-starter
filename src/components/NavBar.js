import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ isLoggedIn }) => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <button
          type='button'
          className='navbar-toggle collapsed'
          data-toggle='collapse'
          data-target='#bs-example-navbar-collapse-1'
          aria-expanded='false'
        >
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <Link to='/' className='navbar-brand'>Twister</Link>
      </div>
      <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        { renderButtons(isLoggedIn) }
      </div>
    </div>
  </nav>
)

NavBar.propTypes = {
  isLoggedIn: React.PropTypes.bool
}

const renderButtons = isLoggedIn =>
  isLoggedIn ? (
    <form className='navbar-form navbar-right' role='logout'>
      <a className='btn btn-primary' href='login.html'>Log out</a>
    </form>
  ) : (
    <form className='navbar-form navbar-right' role='logout'>
      <a className='btn btn-default' href='login.html'>Log in</a>
      <a className='btn btn-primary' href='signup.html' style={{
        marginLeft: '0.2em'
      }}>Sign up</a>
    </form>
  )

export default NavBar
