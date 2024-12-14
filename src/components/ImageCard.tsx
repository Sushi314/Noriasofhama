import imagesData from "../data/ImagesData.tsx"
import "../css/ImageCard.css"
import { useState } from "react";

interface ImageCardProps {
    figure: string;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ figure }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
    // Find the image data based on the figure number
    const imageData = imagesData.find((image) => image.figure === figure);
  
    if (!imageData) {
      console.error(`Image data for figure ${figure} not found`);
      return null;
    }
  
    const openLightbox = () => {
      setIsLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setIsLightboxOpen(false);
    };
  
    return (
      <div className="image-card">
        <img
          src={imageData.src}
          alt={imageData.alt}
          className="image-card-photo"
          onClick={openLightbox}
        />
        <div className="image-card-caption">
          <p>
          <strong>Figure {imageData.figure} .</strong> {imageData.credit}
          </p>
          <p>{imageData.caption}</p>
        </div>
  
        {isLightboxOpen && (
          <div className="lightbox">
            <button className="close-button" onClick={closeLightbox}>
              &times;
            </button>
            <div className="lightbox-content">
              <img
                src={imageData.src}
                alt={imageData.alt}
                className="lightbox-image"
              />
              <p className="lightbox-description">
                <strong>Figure {imageData.figure}.</strong> {imageData.credit}
                <br />
                {imageData.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ImageCard;


