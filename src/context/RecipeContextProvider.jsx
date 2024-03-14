import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
import { useNavigate } from "react-router-dom";

const RecipeContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [addToFavorite, setAddToFavorite] = useState([]);

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate('/')
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearch("");
    }
  }

  function handleAddFavorite(currentItem) {
    // console.log(currentItem);
    let cpy = [...addToFavorite]
    const index = cpy.findIndex(item=> (item.id === currentItem.id))

    if (index === -1) {
        cpy.push(currentItem)
    }else{
        cpy.splice(index , 1 )
        
    }
    setAddToFavorite(cpy)
  }
    console.log(addToFavorite, 'addToFavorite');

  //  console.log(recipeList);
  return (
    <RecipeContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddFavorite,
        addToFavorite
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
