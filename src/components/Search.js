import React from "react";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault(); //To Avoid page reloading
    const data = searchParams.get(`q`);
    const age = searchParams.get("age");
    alert(data + "" + age);
  };
  return (
    <div>
      <h1>My Search Page</h1>
      <form onSubmit={handleSubmit}>
        <button
          className="border-2  px-2 mt-2"
          onClick={() => setSearchParams("Jethi")}
        >
          Update
        </button>
        <label>Search</label>
        <input
          className="border-2 ml-4 rounded-lg p-1"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
        ></input>
        <br></br>
        <button className="border-2 bg-sky-500 text-white px-2 mt-2">
          Search
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </form>
    </div>
  );
};

export default Search;
