import React, { useEffect, useState } from 'react';
import b from '../package.json';
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
function ShimmerUI() {
    const [data,setData]= useState([])
    useEffect(()=>{
        fetchData();
    },[])

const fetchData= async()=>{
    const response= await fetch("https://meme-api.com/gimme/20")
    try{
        if(!response.ok){
            throw new Error("error while fetching the data")
        }else{
            const data= await response.json();
            setData(data.memes);
            return data;
        }
    }catch(error){
        console.log(error)
    }
} 

  return (
    <div>{b.version}
    <div><Link to="/about">Click for About Page</Link>
    <Link to="/login">Welcome to Login Page!</Link>
    <Link to="/team">This is teams page</Link>
    </div>
    {data ? data.map((item,index)=>{
        console.log(index)
        return <MemeCard key={index} data={item}/>
    }
    ):(
       <Shimmer/>
    )}
    </div>
    
  )
}

export default ShimmerUI