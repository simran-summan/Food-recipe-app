import React, { useContext, useEffect } from "react";
import RecipeContext from "../../context/RecipeContext";
import { useParams } from "react-router-dom";
import StarRating from "../starRating/StarRating"

function Details() {
  const { recipeDetails, setRecipeDetails, handleAddFavorite ,addToFavorite} = useContext(RecipeContext);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    async function getRecipeDetailData() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }
   
    getRecipeDetailData();
  }, []);

 console.log(recipeDetails);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300 mx-8"
            alt=""
          />
        </div>
        <StarRating noOfStar= {5}/>
      </div>
      <div>
        <span className="text-sm text-[#402218] font-bold">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h2 className="font-bold text-4xl truncate text-[#402218]">
          {recipeDetails?.recipe?.title}
        </h2>
        <div>
          <button className=" text-sm p-2 mt-4 px-6 rounded-lg uppercase font-medium tracking-wider bg-[#865439] inline-block shadow-sm shadow-black  text-[#e9ded9] hover:shadow-black hover:shadow-md duration-100"
          onClick={() => handleAddFavorite(recipeDetails?.recipe)}>
            {addToFavorite.findIndex((item) => item.id === id) !== -1? "Remove from favorite" : "Add to favorite"}
          </button>
          <h2 className="font-bold text-2xl truncate text-[#402218] mt-5  underline">
            Ingredients:
          </h2>
          <ul className=" list-disc text-[#402218] font-medium flex flex-wrap flex-col h-[28rem]">
            {recipeDetails?.recipe?.ingredients.map((ingredient) => (
              <li className="m-2 ml-8 text-lg w-80">
                <span>{ingredient.quantity}</span>
               {ingredient.unit && <span className="px-1">{ingredient.unit}</span>}
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
