import React,{useState,useContext} from 'react'
import {BiSearch} from 'react-icons/bi'
import { Context } from '../context/context'

function UserSearch() {
    const {dataSearch,users,setUsers} = useContext(Context)
    const [search,setSearch] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        if (search.trim() === '') {
            alert("enter user's name")
        }else{
            dataSearch(search)
        }
    }

  return (
    <div className="search">
        <div className="container">
            <form className="search__form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="search__input"
                    placeholder="Search..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className="search__btn" type="submit"><BiSearch /></button>
            </form>
            {users.length > 0 ? <button className="search__clear" onClick={()=>setUsers([])}>Clear</button> : null}
        </div>
    </div>
  )
}

export default UserSearch