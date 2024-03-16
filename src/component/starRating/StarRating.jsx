import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './style.css'

function StarRating({noOfStar}) {
  const [rating , setRating] = useState(0)
  const [hover , setHover] = useState(0)
   
  function handleClick(currentIndex) {
    console.log(currentIndex);
     setRating(currentIndex)
  }
  function handleMouseEnter(currentIndex) {
    console.log(currentIndex);
     setHover(currentIndex)
  }
  function handleMouseLeave() {
     setHover(rating)
  }

  return (
    <div className=' m-12 flex'>
      {[...Array(noOfStar)].map((_,index) => {
        index += 1
        return(
       <FaStar
       key={index}
       className={index <= (hover || rating)? 'active': 'inactive'}
       onClick={()=> {handleClick(index)}}
       onMouseEnter={() => {handleMouseEnter(index)}}
       onMouseLeave={()=> handleMouseLeave()}
      size={40}
      /> 
      )
      })}
      
    </div>
  )
}

export default StarRating
