import React from 'react'

function MemeCard({data}) {
    // console.log(props.data)
    const {author, title,url}= data
  return (
    <div>
        <p>{author}</p>
        <p>{title}</p>
        <img alt='meme' src={url}/>
    </div>
  )
}

export default MemeCard