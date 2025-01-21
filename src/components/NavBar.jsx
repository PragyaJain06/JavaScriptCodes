import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDetailsSlice'

function NavBar() {
  const allUsers = useSelector((state)=>state.firstReducer.users)
  const [search,setSearch]=useState('')
  const dispatch=useDispatch();
  console.log(search,"value of search")
  useEffect(()=>{
dispatch(searchUser(search))
  },[search])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to='/read'>Read All Posts ({allUsers.length})</Link>
        </li>
        <li className="nav-item mr-2">
          <Link to="/">Create Post</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li> */}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 " type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
      </form>
    </div>
  </nav>
  )
}

export default NavBar