import "../css/PhotoAlbum.css";
import { useState } from "react";
import imagesData from "../data/ImagesData"; // Adjust the path if necessary

const PhotoAlbum = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % imagesData.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + imagesData.length) % imagesData.length);
  };

  return (
    <div className="container">
      <section id="photo-album" className="photo-album">
        <h2>Photo Album</h2>
        <div className="photo-grid">
          {imagesData.map((image, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} className="photo" />
              <p className="photo-description">{image.caption}</p>
            </div>
          ))}
        </div>

        {isLightboxOpen && (
          <div className="lightbox">
            <button className="close-button" onClick={closeLightbox}>
              &times;
            </button>
            <button className="prev-button" onClick={prevImage}>
              &#10094;
            </button>
            <div className="lightbox-content">
              <img
                src={imagesData[currentImage].src}
                alt={imagesData[currentImage].alt}
                className="lightbox-image"
              />
              <p className="lightbox-description">{imagesData[currentImage].caption}</p>
            </div>
            <button className="next-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PhotoAlbum;
