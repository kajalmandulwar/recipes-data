import React from 'react'
import "../style.css";
import ArticlesInfo from './ArticlesInfo'
import smallData from "./data2"
// import Rating from "./Rating";
const Articles = () => {
  return (
   <>
    <div className="Article">
    {smallData.map((data)=>{
      //console.log(data.cuisine);
      return(
        <ArticlesInfo
        key={data.id}
        image={data.image}
        name={data.name}
        cuisine={data.cuisine}
        />
      )
    })}
    </div>
   </>
  )
}

export default Articles