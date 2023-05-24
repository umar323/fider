import React from 'react'
import UserSearch from '../components/UserSearch'
import Users from '../components/Users'

function Home() {
  return (
    <div className="home">
    <UserSearch />
    <Users />
    </div>
  )
}

export default Home