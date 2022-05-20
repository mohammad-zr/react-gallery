import "./ImageModal.css";

const Modal = ({ image, setModalIsOpen, setImageByIndex }) => {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="img-modal">
            {image.previousImage ? (
              <button
                className="prev"
                onClick={() => setImageByIndex(image.index - 1)}
              >
                &#8249;
              </button>
            ) : null}

            <img
              style={{ maxWidth: "600px" }}
              src={image.imageSrc}
              alt="test"
            />

            <button className="close" onClick={() => setModalIsOpen(false)}>
              &#10006;
            </button>

            {image.nextImage ? (
              <button
                className="next"
                onClick={() => setImageByIndex(image.index + 1)}
              >
                &#8250;
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
