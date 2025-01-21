import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom'
import { updateUser } from '../features/userDetailsSlice';

function Update() {
    const {id}= useParams();
    const [updateData,setUpdateData]=useState('')
    const allUsers= useSelector((state)=>state.firstReducer.users)
    console.log(allUsers)
    const dispatch=useDispatch();
    const navigate= useNavigate();

 useEffect(()=>{
    const singleUser=allUsers.filter((item)=>item.id ===id)
    setUpdateData(singleUser[0])
 },[])
 console.log(updateData,"update")
const newData=(e)=>{
setUpdateData({...updateData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
dispatch(updateUser(updateData))
navigate('/read')
}
  return (
    <div>
    <h2 className="my-2">Edit the data</h2>
    <form className="w-50 mx-auto my-5"onSubmit={handleSubmit} >
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
        value={updateData && updateData.name}
        onChange={newData}
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          value={updateData && updateData.email}
          onChange={newData}
       
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Age</label>
        <input
          type="text"
          name="age"
          class="form-control"
          value={updateData && updateData.age}
          onChange={newData}
       
          required
        />
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          type="radio"
          value="Male"
          checked={updateData && updateData.gender==="Male"}
          onChange={newData}
       
          required
        />
        <label class="form-check-label">Male</label>
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          type="radio"
          value='Female'
          onChange={newData}
       
          checked={updateData && updateData.gender==="Female"}
        />
        <label class="form-check-label">Female</label>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Update