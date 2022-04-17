import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import Catalog from "./Catalog";

function Search() {
  const [searchValue, setSerchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState();

  const url = "http://localhost:5000";

  // const postQuery = searchParams.get("q" || "");

  const addQuery = async (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchParams({ term: searchValue });
    try {
      const res = await fetch(url + "/?term=" + searchValue);
      const data = await res.json();
      console.log("response", data.results);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={addQuery}>
        <input
          value={searchValue}
          onChange={(e) => {
            setSerchValue(e.target.value);
            console.log(searchValue);
          }}
          className="form-control me-sm-2"
          type="search"
          placeholder="Search"
        />
        <button className="btn btn-secondary my-2 my-sm-0">Search</button>
      </form>
      {data ? <Catalog data={data} /> : null}
    </>
  );
}
export default Search;
