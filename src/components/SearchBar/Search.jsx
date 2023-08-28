import { ReactComponent as SearchIcon } from "../../Assest/search-icon.svg";
import "../SearchBar/Search.css";
import React, { useState } from "react";

const SearchBar = ({ placeholder }) => {
  const [value, setValue] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form className="wrapper" onSubmit={onSubmit}>
        <input
          className="search"
          placeholder={placeholder}
          required
          value={value}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          {<SearchIcon />}{" "}
        </button>
      </form>
    </>
  );
};

export default SearchBar;
