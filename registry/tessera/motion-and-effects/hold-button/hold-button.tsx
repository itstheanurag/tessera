"use client";

import React, { useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

export interface HoldButtonProps {
  /** Idle label before confirmation. */
  label?: string;
  /** Label shown once the hold completes. */
  confirmedLabel?: string;
  /** Hold duration in milliseconds. */
  durationMs?: number;
  /** Callback fired once the hold completes. */
  onConfirm?: () => void;
  className?: string;
}

export function HoldButton({
  label = "Hold to confirm",
  confirmedLabel = "Confirmed",
  durationMs = 1000,
  onConfirm,
  className,
}: HoldButtonProps) {
  const [holding, setHolding] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDown = () => {
    if (confirmed) {
      setConfirmed(false);
      return;
    }
    setHolding(true);
    timerRef.current = setTimeout(() => {
      setHolding(false);
      setConfirmed(true);
      onConfirm?.();
    }, durationMs);
  };

  const handleCancel = () => {
    setHolding(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <button
      type="button"
      onPointerDown={handleDown}
      onPointerUp={handleCancel}
      onPointerLeave={handleCancel}
      onPointerCancel={handleCancel}
      className={cn(
        "tessera-press relative inline-flex h-12 min-w-[200px] items-center justify-center overflow-hidden rounded-full border border-black/[0.08] bg-white px-6 text-sm font-medium select-none shadow-[0_2px_10px_-3px_rgba(17,17,19,0.08)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 origin-left bg-[#111113]"
        style={{
          transform: confirmed || holding ? "scaleX(1)" : "scaleX(0)",
          transition: confirmed
            ? "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
            : holding
              ? `transform ${durationMs}ms linear`
              : "transform 180ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2 transition-colors duration-150",
          holding || confirmed ? "text-white" : "text-[#111113]",
        )}
      >
        {confirmed ? (
          <>
            <FiCheck className="h-4 w-4" />
            <span>{confirmedLabel}</span>
          </>
        ) : (
          <span>{label}</span>
        )}
      </span>
    </button>
  );
}
