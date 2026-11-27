"use client";

import { FiArrowRight } from "react-icons/fi";
import { StitchedButton } from "@/registry/tessera/inputs-and-forms/stitched-button/stitched-button";

export default function StitchedButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <StitchedButton variant="obsidian">
        <span>Deploy</span>
        <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </StitchedButton>
      <StitchedButton variant="porcelain">Copy source</StitchedButton>
      <StitchedButton variant="ghost">Cancel</StitchedButton>
    </div>
  );
}
