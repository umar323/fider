import React from 'react'
import { Link } from 'react-router-dom';

function User({user}) {
  return (
    <div className="user">
        <div className="user__avatar">
          <img src={user.avatar_url} alt="" className="user__image" />
        </div>
        <div className="user__info">
          <h2 className="user__login">{user.login}</h2>
          <Link to={`/users/${user.login}`} className='user__link'>Visit Profile</Link>
        </div>
    </div>
  )
}

export default User