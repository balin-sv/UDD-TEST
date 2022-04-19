import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

const Catalog = ({
  data,
  category,
  descendingPrice,
  ascendingPrice,
  byCondition,
}) => {
  const [isModal, setIsModal] = useState(false);
  const [itemInfo, setItemInfo] = useState();

  const onSetHandler = (info) => {
    setItemInfo(info);
  };

  const onSetModal = (value) => {
    setIsModal(value);
  };

  return (
    <div className="container mt-3 ">
      <div className="d-flex justify-content-around">
        <h1>Filtrar {category} por</h1>
        <ul className="list-unstyled">
          <li
            onClick={(e) => {
              e.preventDefault();
              ascendingPrice();
            }}
          >
            Precio menor a mayor
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              descendingPrice();
            }}
          >
            Precio mayor a menor
          </li>
        </ul>
      </div>

      <div className="container d-flex flex-row flex-wrap">
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              onSetHandler={onSetHandler}
              onSetModal={onSetModal}
              card={item}
            />
          );
        })}
      </div>
      {isModal === true ? (
        <Modal itemInfo={itemInfo} onSetModal={onSetModal} isModal={isModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Catalog;
