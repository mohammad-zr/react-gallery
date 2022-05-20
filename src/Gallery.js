import "./Gallery.css";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentImageInfo, setCurrentImageInfo] = useState({
    imageSrc: "",
    index: 0,
    nextImage: null,
    previousImage: null,
  });

  const setImageByIndex = (index) => {
    setCurrentImageInfo({
      imageSrc: images[index],
      index: index,
      nextImage: index + 1 <= images.length ? images[index + 1] : null,
      previousImage: index - 1 >= 0 ? images[index - 1] : null,
    });

    setModalIsOpen(true);
  };

  const [images, setImages] = useState([]);

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
        <>
          <ImageModal
            image={currentImageInfo}
            setModalIsOpen={setModalIsOpen}
            setImageByIndex={setImageByIndex}
          />
        </>
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
            onClick={() => setImageByIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
