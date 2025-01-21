import { Navigate, Outlet } from "react-router-dom"
import Login from "./Login"

export const Protected=()=>{
   let isAuthenticated= true
  return  isAuthenticated?<Outlet/> : <Navigate to="/login"/>
}

//outlet is a place where children can render

{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<ShimmerUI/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route element={<Protected/>}>
  <Route path='/team' element={<Team/>}/>
  <Route path='/about' element={<Routing/>}/>
  </Route>
</Routes>
</BrowserRouter> */}
