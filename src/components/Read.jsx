import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../features/userDetailsSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';
function Read() {
    const dispatch = useDispatch();
    const {users,loading,search}= useSelector((state)=>state.firstReducer)
    const [id,setId]=useState('')
    const[expand,setExpand]=useState(false);
    const[radioData,setRadioData]= useState('')
    console.log(id,"id")

    useEffect(()=>{
        dispatch(readUser())
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }
    const handleView=(id)=>{
        setId(id);
        setExpand(true);
    }

  return (
<>
<h1>Reading All Data</h1>
<input
        class="form-check-input mx-auto"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label mx-2">All</label>
      <input
        class="form-check-input mx-auto"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label mx-auto">Male</label>
      <input
        class="form-check-input mx-auto"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label my-4">Female</label>
{expand && <CustomModal id={id} showPopUp={expand} setExpand={setExpand}/>}
{users&& users.filter((ele)=>{
  if(search){
    return ele.name.toLowerCase().includes(search.toLowerCase())
  }else{
    return ele;
  }
}).filter((item)=>{
  if(radioData ==="Male"){
    return item.gender==="Male";
  }else if(radioData ==="Female"){
    return item.gender==="Female"
  }else{
    return item;
  }
}
  )
.map((item)=>{
return(
    <div key={item.id} className="card mx-auto">
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
      <h6>{item.gender}</h6>
      <button className='card-link'onClick={()=>handleView(item.id)}>View</button>
      <Link to={`/edit/${item.id}`} className='card-link'>Edit</Link>
      <Link className='card-link' onClick={()=>dispatch(deleteUser(item.id))}>Delete</Link>
      
    </div>
  </div>
)

   
})}

</>
    
  )
}

export default Read