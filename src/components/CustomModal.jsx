import React from 'react'
import './customModal.css';
import { useSelector } from 'react-redux';
function CustomModal({id,showPopUp ,setExpand}) {
    const allUsers= useSelector((state)=>state.firstReducer.users)
    console.log(allUsers,"all")
    const singleUser= allUsers.filter((item)=>{
        return item.id===id
    })
    console.log(singleUser)
function handleClose(){
    setExpand(false);
}
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={handleClose}>Close</button>
            <h1>{singleUser[0].gender}</h1>
        </div>
    </div>
  )
}

export default CustomModal