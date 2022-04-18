import React from "react";
import ProductCard from "./ProductCard";

const Catalog = ({ data }) => {
  return (
    <div className="container d-flex flex-row flex-wrap">
      {data.results.map((item) => {
        return <ProductCard card={item} />;
      })}
    </div>
  );
};

export default Catalog;
