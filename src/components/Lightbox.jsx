import "./Lightbox.css";

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>×</span>
        <img src={image} alt="preview" />
      </div>
    </div>
  );
};

export default Lightbox;