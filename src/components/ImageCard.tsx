interface ImageCardProps {
    src: string;
    alt: string;
    figure: string;
    credit: string;
    caption: string;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ src, alt, figure, credit, caption }) => {
    return (
      <div className="image-card">
        <img src={src} alt={alt} className="image-card-photo" />
        <div className="image-card-caption">
          <p>
            <strong>{figure}</strong> {credit}
          </p>
          <div dangerouslySetInnerHTML={{ __html: caption }} />
        </div>
      </div>
    );
  };
  
  export default ImageCard;
