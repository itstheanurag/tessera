"use client";

import { FiArrowLeft, FiSliders, FiTerminal } from "react-icons/fi";
import { DynamicTray } from "@/registry/tessera/overlays-and-feedback/dynamic-tray/dynamic-tray";

export default function DynamicTrayDemo() {
  return (
    <DynamicTray
      views={[
        {
          id: "root",
          title: "Actions",
          content: (navigate) => (
            <div className="space-y-2.5">
              <p className="text-sm font-semibold text-foreground pb-1">
                Component actions
              </p>
              <button
                type="button"
                onClick={() => navigate("cli")}
                className="tessera-press w-full flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-surface-strong"
              >
                <span className="inline-flex items-center gap-2.5">
                  <FiTerminal className="h-4 w-4 text-muted-foreground" />
                  <span>Install via CLI</span>
                </span>
                <span className="text-xs text-muted-foreground">→</span>
              </button>
              <button
                type="button"
                onClick={() => navigate("tokens")}
                className="tessera-press w-full flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-surface-strong"
              >
                <span className="inline-flex items-center gap-2.5">
                  <FiSliders className="h-4 w-4 text-muted-foreground" />
                  <span>Inspect motion</span>
                </span>
                <span className="text-xs text-muted-foreground">→</span>
              </button>
            </div>
          ),
        },
        {
          id: "cli",
          title: "CLI",
          content: (navigate) => (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("root")}
                  aria-label="Back"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-foreground hover:bg-surface-strong"
                >
                  <FiArrowLeft className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-foreground">
                  Install via CLI
                </span>
              </div>
              <pre className="rounded-xl bg-surface p-3 font-mono text-xs text-foreground overflow-x-auto">
                npx shadcn@latest add https://tessera.ui/r/dynamic-tray.json
              </pre>
            </div>
          ),
        },
        {
          id: "tokens",
          title: "Motion",
          content: (navigate) => (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("root")}
                  aria-label="Back"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-foreground hover:bg-surface-strong"
                >
                  <FiArrowLeft className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold text-foreground">
                  Spring config
                </span>
              </div>
              <div className="rounded-xl bg-surface p-3.5 font-mono text-xs text-foreground space-y-1">
                <div>type: &quot;spring&quot;</div>
                <div>stiffness: 420</div>
                <div>damping: 32</div>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
