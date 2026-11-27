"use client";

import { HoldButton } from "@/registry/tessera/motion-and-effects/hold-button/hold-button";

export default function HoldButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <HoldButton label="Hold to delete" confirmedLabel="Deleted" />
      <p className="text-xs text-muted-foreground">
        Press and hold for 1 second. Release early to cancel.
      </p>
    </div>
  );
}
