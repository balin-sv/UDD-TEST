import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [searchValue, setSerchValue] = useState("");
  return (
    <>
      <nav class="container mt-5 navbar navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand">Buscador Api Mercadolibre</a>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery(searchValue);
              setSerchValue("");
            }}
            class="d-flex"
          >
            <input
              value={searchValue}
              onChange={(e) => {
                setSerchValue(e.target.value);
              }}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default SearchBar;
