"use client";

import { useState } from "react";
import { SegmentedDock } from "@/registry/tessera/navigation-and-layout/segmented-dock/segmented-dock";

const ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "components", label: "Components" },
  { id: "tokens", label: "Tokens" },
  { id: "motion", label: "Motion" },
];

export default function SegmentedDockDemo() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex flex-col items-center gap-4">
      <SegmentedDock items={ITEMS} value={active} onValueChange={setActive} />
      <p className="font-mono text-xs text-muted-foreground">
        active tab: <span className="text-foreground">{active}</span>
      </p>
    </div>
  );
}
