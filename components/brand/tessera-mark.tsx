import React from "react";

interface TesseraMarkProps {
  className?: string;
}

/**
 * Geometric interlocking four-tile mark representing Tessera's composable UI pieces.
 */
export function TesseraMark({ className = "h-6 w-6" }: TesseraMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
      <rect
        x="13"
        y="2"
        width="9"
        height="5"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.45"
      />
      <rect
        x="13"
        y="9"
        width="9"
        height="13"
        rx="2"
        fill="var(--brand-accent, currentColor)"
      />
      <rect
        x="2"
        y="13"
        width="9"
        height="9"
        rx="2"
        fill="currentColor"
        fillOpacity="0.22"
      />
    </svg>
  );
}
