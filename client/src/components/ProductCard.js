import React, { useState } from "react";
import "./ProductCard.css";
import { useSearchParams } from "react-router-dom";

const ProductCard = ({ card }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemInfo, setItemInfo] = useState();

  const url = "http://localhost:5000/item";

  // const postQuery = searchParams.get("q" || "");

  const getInfoById = async (e) => {
    e.preventDefault();
    setSearchParams({ id: card.id });
    try {
      const res = await fetch(url + "/?id=" + card.id);
      const data = await res.json();
      console.log("response", data);
      // setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="card m-3">
        <img src={card.thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <h3 class="price">{card.price} Pesos</h3>
          <button
            onClick={(e) => {
              getInfoById(e);
            }}
            class="btn btn-primary"
          >
            Detalles
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
//  id: item.id,
//       title: item.title,
//       price: item.price,
//       currency_id: item.currency_id,
//       available_quantity: item.available_quantity,
//       thumbnail: item.thumbnail,
//       condition: item.condition,
