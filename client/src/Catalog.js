import React from "react";
import ProductCard from "./ProductCard";

const Catalog = ({ data }) => {
  console.log(data.results);
  const list = data.results.map((item) => {
    return <ProductCard card={item} />;
  });
  console.log(list);

  return <>{list}</>;
};

export default Catalog;
