import React from 'react'

function Shimmer() {
  return Array(20).fill(0).map(()=>  <div style={{backgroundColor:'gray'}}></div>)
}

export default Shimmer