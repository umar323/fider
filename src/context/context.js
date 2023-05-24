import { createContext,useState } from "react";

const Context = createContext()

function ContextProvider({children}) {

  const [users,setUsers] = useState([])
  const [user,setUser] = useState([])
  const [loading,setLoading] = useState(false)

  const dataSearch = (search)=>{
    setLoading(true)
    fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${search}`,{
      headers:{
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    .then((res)=>res.json())
    .then(({items})=>setUsers(items))
    setLoading(false)
  }


  const dataUser = async (login)=>{
    let res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`,{
      headers:{
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    let data = await res.json()
    setUser(data)
  }

  return (
    <Context.Provider value={{dataSearch,users,setUsers,loading,user,dataUser}}>{children}</Context.Provider>
  )
}

export {ContextProvider,Context}