import React from "react";
import "../style.css";

const Search = ({ setQuery }) => {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="search here....."
        onChange={(e) => setQuery(e.target.value)}  // Corrected the onChange handler
      />
    </div>
  );
};

export default Search;
