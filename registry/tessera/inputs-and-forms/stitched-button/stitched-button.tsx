"use client";

import React from "react";
import { cn } from "@/registry/tessera/lib/utils";

export interface StitchedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual surface treatment of the button. */
  variant?: "obsidian" | "porcelain" | "ghost";
  /** Sizing scale. */
  size?: "sm" | "md" | "lg";
  /** Renders the signature inset 1px dashed thread border. */
  stitched?: boolean;
  /** Optional loading state with spinner. */
  loading?: boolean;
}

const SIZE_CLASSES: Record<NonNullable<StitchedButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-7 text-sm gap-2.5",
};

export const StitchedButton = React.forwardRef<
  HTMLButtonElement,
  StitchedButtonProps
>(function StitchedButton(
  {
    variant = "obsidian",
    size = "md",
    stitched = true,
    loading = false,
    disabled,
    className,
    children,
    type = "button",
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={cn(
        "group tessera-press relative inline-flex items-center justify-center rounded-full font-medium select-none",
        "disabled:pointer-events-none disabled:opacity-50",
        SIZE_CLASSES[size],
        variant === "obsidian" &&
          "bg-[#111113] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_24px_-8px_rgba(17,17,19,0.4)] hover:bg-[#1c1c20]",
        variant === "porcelain" &&
          "bg-white text-[#111113] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(17,17,19,0.06),0_8px_20px_-8px_rgba(17,17,19,0.14)] border border-black/[0.08] hover:bg-[#f7f7f9]",
        variant === "ghost" &&
          "bg-transparent text-[#111113] hover:bg-black/[0.05]",
        className,
      )}
      {...props}
    >
      {stitched && variant !== "ghost" && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-[3px] rounded-full border border-dashed transition-colors duration-200",
            variant === "obsidian"
              ? "border-white/30 group-hover:border-white/50"
              : "border-black/20 group-hover:border-black/38",
          )}
        />
      )}

      {loading && (
        <span
          aria-hidden="true"
          className={cn(
            "relative z-10 h-3.5 w-3.5 rounded-full border-2 animate-spin",
            variant === "obsidian"
              ? "border-white/25 border-t-white"
              : "border-black/20 border-t-black",
          )}
        />
      )}

      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});
