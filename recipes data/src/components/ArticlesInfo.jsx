import React from 'react'
import Rating from './Rating'
import "../style.css";

const ArticlesInfo =({image,name,cuisine})=>{
  return (
    <>
    <div className="article-content">
        <div className="article-imge">
          <img src={image} alt={name} />
        </div>
        <div className="article-info">
          <h3>{name}</h3>
          <p>{cuisine}</p>
          <Rating/>
        </div>
      </div>
      </>
  )
}



export default ArticlesInfo