import React from "react";
import "./ProductCard.css";
import { useSearchParams } from "react-router-dom";

const ProductCard = ({ onSetHandler, onSetModal, card }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const url = "http://localhost:5000/item";

  const getInfoById = async () => {
    setSearchParams({ id: card.id });
    try {
      const res = await fetch(url + "/?id=" + card.id);
      const data = await res.json();
      onSetHandler(data);
      onSetModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="card m-3">
        <div className="d-flex justify-content-center mt-2">
          <img src={card.thumbnail} class="img-thumbnail img-fluid" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <h3 class="price">{card.price} Pesos</h3>
          <button
            onClick={(e) => {
              e.preventDefault();
              getInfoById();
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
