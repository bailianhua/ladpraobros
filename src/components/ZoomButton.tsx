import { ZoomIn } from "lucide-react";

type ZoomButtonProps = {
  label: string;
  onClick: () => void;
};

export function ZoomButton({ label, onClick }: ZoomButtonProps) {
  return (
    <button
      type="button"
      className="zoom-button"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <ZoomIn size={16} aria-hidden="true" />
    </button>
  );
}
