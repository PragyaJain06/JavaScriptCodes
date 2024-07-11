import { Navigate, Outlet } from "react-router-dom"
import Login from "./Login"

export const Protected=()=>{
   let isAuthenticated= true
  return  isAuthenticated?<Outlet/> : <Navigate to="/login"/>
}

//outlet is a place where children can render
