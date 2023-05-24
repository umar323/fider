import React from 'react'
import error from '../images/error.png'
function NotFound() {
  return (
    <div className='error'>
      <img src={error} alt="error" className="error__image" />
      <h2 className="error__title">This page doesn't exist</h2>
      <button className="error__button">Home page</button>
    </div>
  )
}

export default NotFound