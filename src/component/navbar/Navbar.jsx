import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../../context/RecipeContext";

function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(RecipeContext);
  // console.log(search);
  return (
    <div className="flex items-center justify-between px-4 py-5 bg-[#865439] w-full text-[#D7B19D]">
      <h1 className=" text-2xl  font-medium ml-3">RecipeRoute</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter the food name"
          className="  w-[30rem] bg-[#402218] text-white py-1 px-3 rounded focus:outline-none focus:bg-gray-100 focus:placeholder:text-black focus:text-black shadow-lg placeholder:text-[#D7B19D] "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="mr-6">
        <Link to="/"
        className=" font-medium uppercase text-lg hover:underline "
        >Home</Link>
        <Link to="/Favorite" 
        className=" px-12 font-medium m-3 pb-5 uppercase text-lg hover:underline">
          favorite
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
