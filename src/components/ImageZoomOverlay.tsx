type ImageZoomOverlayProps = {
  image: string;
  alt: string;
  onClose: () => void;
};

export function ImageZoomOverlay({ image, alt, onClose }: ImageZoomOverlayProps) {
  return (
    <div className="zoom-overlay" onClick={onClose}>
      <img src={image} alt={alt} />
    </div>
  );
}
