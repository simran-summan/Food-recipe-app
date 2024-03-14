import React from 'react'
import { Link } from 'react-router-dom';

function RecipeItem({item}) {
  // console.log(`/recipe-item/${item?.id}`);

  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 shadow-md shadow-black bg-[#402218] gap-5 rounded-2xl  ml-9 my-2 text-[#D7B19D]'>
        <div className='h-40  justify-center overflow-hidden items-center rounded-xl'>
         <img src={item?.image_url} alt="recipe img..."  className=' block w-full'/>
         </div>
         <div>   
         <span className='text-xs font-medium text-[#e9ded9]'>{item?.publisher}</span>
         <h2 className='font-bold text-xl truncate '>{item?.title}</h2>   
         <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-2 mt-4 px-6 rounded-lg uppercase font-medium tracking-wider bg-[#865439] inline-block shadow-sm shadow-black  text-[#e9ded9] hover:shadow-black hover:shadow-md duration-100"
        >
          Recipe Details
        </Link>
        </div>
        
    </div>
  )
}

export default RecipeItem
