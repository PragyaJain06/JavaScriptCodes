import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";


const CreateForm = () => {
 
const [user,setUser]=useState({})
console.log(user,"before dispatch")
const dispatch=useDispatch();

 const handleSubmit=(e)=>{
    e.preventDefault();
// it should basically send the user data to the mock api 
console.log(user)
dispatch(createUser(user))
 }
 const getUserData=(e)=>{
setUser({...user, [e.target.name]:e.target.value})
 }

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit} >
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={(e)=>getUserData(e)}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={(e)=>getUserData(e)}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={(e)=>getUserData(e)}
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={(e)=>getUserData(e)}
            required
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={(e)=>getUserData(e)}
          />
          <label class="form-check-label">Female</label>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;