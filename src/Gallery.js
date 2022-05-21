import "./Gallery.css";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [images, setImages] = useState([]);

  const [currentImageInfo, setCurrentImageInfo] = useState({
    imageSrc: null,
    index: null,
    hasNext: false,
    hasPrevious: false,
  });

  const setImageByIndex = (index) => {
    setCurrentImageInfo({
      imageSrc: images[index],
      index: index,
      hasNext: index + 1 <= images.length,
      hasPrevious: index - 1 >= 0,
    });
  };

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
          image={currentImageInfo}
          setModalIsOpen={setModalIsOpen}
          setImageByIndex={setImageByIndex}
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
              setImageByIndex(index);
              setModalIsOpen(true);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
