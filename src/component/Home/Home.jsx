import React, { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";
import RecipeItem from "../recipe-item/RecipeItem";

function Home() {
  const { loading, recipeList } = useContext(RecipeContext);

  if (loading) return <div>Loading... please wait</div>;

  return (
    <div className="flex flex-wrap py-5 gap-3 justify-center  items-center bg-[#C68B59]">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className=" text-5xl font-bold text-[#402218] justify-center  items-center mt-9  p-3 rounded-md">Nothing to show please search something</p>
        </div>
      )}
    </div>
  );
}

export default Home;
