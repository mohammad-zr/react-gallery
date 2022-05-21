import "./ImageModal.css";

const Modal = ({
  image,
  setModalIsOpen,
  imagesCount,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="img-modal">
            {currentImageIndex > 0 && (
              <button
                className="prev"
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
              >
                &#8249;
              </button>
            )}

            <img style={{ maxWidth: "600px" }} src={image} alt="test" />

            <button className="close" onClick={() => setModalIsOpen(false)}>
              &#10006;
            </button>

            {currentImageIndex < imagesCount - 1 && (
              <button
                className="next"
                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
