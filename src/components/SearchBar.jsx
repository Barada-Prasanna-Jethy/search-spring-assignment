import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../actions";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setInputText(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    fetchProducts(dispatch, 1, inputText);
  };

  return (
    <div>
      <form className="searchForm" onSubmit={onSearch}>
        <div>
          <input
            className="searchInput"
            value={inputText}
            onChange={onInputChange}
            placeholder={"Search here..."}
          />
          <button className="button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
