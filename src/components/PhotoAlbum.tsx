
import "../css/PhotoAlbum.css";
import { useState } from "react";


  const PhotoAlbum = () => {
    const photos = [
        // Discover Islamic Art
  {
    src: "src/assets/images/Discover Islamic Art/1 DIA.png",
    alt: "Discover Islamic Art 1",
    description: "This is the first image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/2 DIA.png",
    alt: "Discover Islamic Art 2",
    description: "This is the second image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/3 DIA.png",
    alt: "Discover Islamic Art 3",
    description: "This is the third image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/4 DIA.png",
    alt: "Discover Islamic Art 4",
    description: "This is the fourth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/5 DIA.png",
    alt: "Discover Islamic Art 5",
    description: "This is the fifth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/6 DIA.png",
    alt: "Discover Islamic Art 6",
    description: "This is the sixth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/7 DIA.png",
    alt: "Discover Islamic Art 7",
    description: "This is the seventh image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/8 DIA.png",
    alt: "Discover Islamic Art 8",
    description: "This is the eighth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/9 DIA.png",
    alt: "Discover Islamic Art 9",
    description: "This is the ninth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/10 DIA.png",
    alt: "Discover Islamic Art 10",
    description: "This is the tenth image from Discover Islamic Art.",
  },
  {
    src: "src/assets/images/Discover Islamic Art/11 DIA.png",
    alt: "Discover Islamic Art 11",
    description: "This is the eleventh image from Discover Islamic Art.",
  },

  // Islamic Art in the Mediterranean
  {
    src: "src/assets/images/Islamic Art in the Mediterranean/1 al-Muhammadiyya .png",
    alt: "Islamic Art in the Mediterranean 1",
    description: "This is the first image from Islamic Art in the Mediterranean.",
  },
  {
    src: "src/assets/images/Islamic Art in the Mediterranean/2 al-Muhammadiyya .png",
    alt: "Islamic Art in the Mediterranean 2",
    description: "This is the second image from Islamic Art in the Mediterranean.",
  },
  {
    src: "src/assets/images/Islamic Art in the Mediterranean/3 al-Muhammadiyya .png",
    alt: "Islamic Art in the Mediterranean 3",
    description: "This is the third image from Islamic Art in the Mediterranean.",
  },

  // Witpress Design and Nature
  {
    src: "src/assets/images/Witpress Design and Nature/1 Side Construction.png",
    alt: "Witpress Design and Nature - Side Construction 1",
    description: "This is the first image of side construction from Witpress Design and Nature.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/2 Side Construction.png",
    alt: "Witpress Design and Nature - Side Construction 2",
    description: "This is the second image of side construction from Witpress Design and Nature.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/3 Side Construction.png",
    alt: "Witpress Design and Nature - Side Construction 3",
    description: "This is the third image of side construction from Witpress Design and Nature.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/1 The Four Norias .png",
    alt: "The Four Norias 1",
    description: "This is the first image of The Four Norias.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/2 The Four Norias.png",
    alt: "The Four Norias 2",
    description: "This is the second image of The Four Norias.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Group Side Construction.png",
    alt: "Group Side Construction",
    description: "This is a group image of side construction from Witpress Design and Nature.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Install Type Single.png",
    alt: "Install Type Single",
    description: "This is an image of a single installation type.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Al-Bisiriyya Al-Kubra.png",
    alt: "Al-Bisiriyya Al-Kubra",
    description: "This is an image of Al-Bisiriyya Al-Kubra.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Norias Side.png",
    alt: "Norias Side",
    description: "This is an image of the Norias Side.",
  },

  // Screenshots and Other Images
  {
    src: "src/assets/images/Witpress Design and Nature/Screenshot 2024-11-24 135159.png",
    alt: "Screenshot 135159",
    description: "This is a screenshot taken on 2024-11-24 at 13:51:59.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Screenshot 2024-11-24 135222.png",
    alt: "Screenshot 135222",
    description: "This is a screenshot taken on 2024-11-24 at 13:52:22.",
  },
  {
    src: "src/assets/images/Witpress Design and Nature/Screenshot 2024-11-24 135245.png",
    alt: "Screenshot 135245",
    description: "This is a screenshot taken on 2024-11-24 at 13:52:45.",
  },

  // Other Images
  {
    src: "src/assets/images/1.png",
    alt: "Other Image 1",
    description: "This is the first other image.",
  },
  {
    src: "src/assets/images/2.png",
    alt: "Other Image 2",
    description: "This is the second other image.",
  },
  {
    src: "src/assets/images/3.png",
    alt: "Other Image 3",
    description: "This is the third other image.",
  },
  {
    src: "src/assets/images/4.webp",
    alt: "Other Image 4",
    description: "This is the fourth other image.",
  },
    ];
  
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
      setCurrentImage((currentImage + 1) % photos.length);
    };
  
    const prevImage = () => {
      setCurrentImage(
        (currentImage - 1 + photos.length) % photos.length
      );
    };
  
    return (
      <section id="photo-album" className="photo-album">
        <h2>Photo Album</h2>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => openLightbox(index)}
            >
              <img src={photo.src} alt={photo.alt} className="photo" />
              <p className="photo-description">{photo.description}</p>
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
                src={photos[currentImage].src}
                alt={photos[currentImage].alt}
                className="lightbox-image"
              />
              <p className="lightbox-description">
                {photos[currentImage].description}
              </p>
            </div>
            <button className="next-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        )}
      </section>
    );
  };
  
  export default PhotoAlbum;
  