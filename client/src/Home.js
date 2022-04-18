import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import Loader from "./components/Loader";

import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const [categoryQuery, setCategoryQuery] = useState("");
  const [idQuery, setIdQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = "http://localhost:5000/category";

  useEffect(() => {
    setData("");
    if (categoryQuery !== "") {
      setIsLoading(true);
      (async () => {
        try {
          const res = await fetch(url + "/?term=" + categoryQuery);
          const data = await res.json();
          console.log("response", data.results);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [categoryQuery]);

  return (
    <>
      <SearchBar
        setQuery={(query) => {
          setSearchParams({ term: query });
          setCategoryQuery(query);
        }}
      />
      {data ? <Catalog data={data} category={categoryQuery} /> : null}
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default Home;
