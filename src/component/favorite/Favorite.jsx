import React, { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";
import RecipeItem from "../recipe-item/RecipeItem";

function Favorite() {
  const { addToFavorite } = useContext(RecipeContext);
  // console.log(addToFavorite);
  return (
    <div className="flex flex-wrap py-5 gap-3 justify-center  items-center">
      {addToFavorite && addToFavorite.length > 0 ? (
        addToFavorite.map((item) => <RecipeItem item={item} />)
      ) : (
        <h2 className=" text-5xl font-bold text-[#402218] justify-center  items-center mt-9 p-3 rounded-md">No item added</h2>
      )}
    </div>
  );
}

export default Favorite;
