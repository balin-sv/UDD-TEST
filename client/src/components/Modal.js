const Modal = ({ itemInfo, onSetModal, isModal }) => {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };
  return (
    <div class="modal show fade" style={modelStyle}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{itemInfo.title}</h5>
            <button
              onClick={(e) => {
                e.preventDefault();
                onSetModal(false);
              }}
              className="btn-close"
            ></button>
          </div>

          <div class="modal-body">
            <img src={itemInfo.pictures[0].url} className="img-fluid"></img>
            <p>
              <span>Precio </span>
              {itemInfo.price}
            </p>
            <p>
              <span>Disponible </span>
              {itemInfo.available_quantity}
            </p>
            <p>
              <span>Estado </span>
              {itemInfo.condition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
