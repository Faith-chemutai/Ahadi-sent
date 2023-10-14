import React, { useState } from "react";
// import "./App.css"; // Include your CSS file

const SearchBarToggle = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      <div className="search-icon" onClick={toggleSearchBar}>
        <i className="fa fa-search"></i>
      </div>

      {searchVisible && (
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      )}
    </div>
  );
};

export default SearchBarToggle;
