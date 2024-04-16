import React from "react";

const Search = () => {
  return (
    <div>
      <h1>My Search Page</h1>
      <form>
        <label>Search</label>
        <input className="border-2" type="text" placeholder="search"></input>
        <br></br>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
