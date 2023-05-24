import React,{useContext} from 'react'
import { Context } from '../context/context'
import Loading from './Loading'
import User from './User';

function Users() {
    const {users,loading} = useContext(Context)
    if (loading) {
        return <Loading />
    }
  return (
    <div className="users container">
        {users.map((user)=>(
            <User key={user.id} user={user} />
        ))}
    </div>
  )
}

export default Users