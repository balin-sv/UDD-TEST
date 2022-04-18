import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

const Catalog = ({ data, category }) => {
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
      <div className="d-flex justify-content-center">
        <h1>Catalogo: {category}</h1>
      </div>

      <div className="container d-flex flex-row flex-wrap">
        {data.results.map((item) => {
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
