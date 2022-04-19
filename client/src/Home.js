import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import Loader from "./components/Loader";

import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const [categoryQuery, setCategoryQuery] = useState("");
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
          setData(data.results);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [categoryQuery]);

  function descendingPrice() {
    let copy = data.slice(); //hago una copia de array
    copy.sort((a, b) => b.price - a.price);
    setData((prev) => copy);
  }

  const ascendingPrice = () => {
    let copy = data.slice(); //hago una copia de array
    copy.sort((a, b) => a.price - b.price);
    setData((prev) => copy);
  };

  return (
    <>
      <SearchBar
        setQuery={(query) => {
          setSearchParams({ term: query });
          setCategoryQuery(query);
        }}
      />
      {data ? (
        <Catalog
          data={data}
          category={categoryQuery}
          descendingPrice={descendingPrice}
          ascendingPrice={ascendingPrice}
        />
      ) : null}
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default Home;
