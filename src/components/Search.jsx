import React from "react";
import "../styles/Search.css";

const Search = function (props) {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <input
          placeholder="Search for your coworker here"
          name="search"
          type="text"
          className="form-control-lg search-font"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );
};

export default Search;
