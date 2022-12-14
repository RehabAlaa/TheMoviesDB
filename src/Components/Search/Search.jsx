import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
export default function Search() {
  let { searchToApi } = useContext(SearchContext);

  return (
    <>
      <form className="d-flex">
        <input
          onChange={searchToApi}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </>
  );
}
