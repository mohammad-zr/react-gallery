import "./Gallery.css";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const fetchApi = async () => {
    await fetch(
      "https://api.unsplash.com/photos?client_id=0xPi48_oxwCRag6WdjPFsdI5Y3lfsU2smZR8abIodxc"
    )
      .then((response) => response.json())
      .then((json) => {
        setImages((oldImages) =>
          oldImages.concat(json.map((x) => x.urls.regular))
        );
      });
  };

  return (
    <>
      {modalIsOpen && (
        <ImageModal
          image={images[currentImageIndex]}
          setModalIsOpen={setModalIsOpen}
          imagesCount={images.length}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}

      <button type="button" onClick={fetchApi}>
        Load images from unsplash
      </button>

      <div className="flexbin flexbin-margin">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt="test"
            onClick={() => {
              setCurrentImageIndex(index);
              setModalIsOpen(true);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
