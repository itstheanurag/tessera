"use client";

import React, { useState } from "react";
import { FiCheck, FiCopy, FiFileText } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

type PackageManager = "pnpm" | "npm" | "bun" | "yarn";

const COMMANDS: Record<PackageManager, string> = {
  pnpm: "pnpm dlx shadcn@latest add https://tessera.ui/r/<component>.json",
  npm: "npx shadcn@latest add https://tessera.ui/r/<component>.json",
  bun: "bunx shadcn@latest add https://tessera.ui/r/<component>.json",
  yarn: "yarn dlx shadcn@latest add https://tessera.ui/r/<component>.json",
};

const FILES = [
  {
    name: "components/tessera/<component>.tsx",
    note: "Self-contained React primitive with explicit TypeScript props.",
  },
  {
    name: "lib/utils.ts",
    note: "Lightweight class merging helper built on clsx and tailwind-merge.",
  },
  {
    name: "app/globals.css",
    note: "Semantic CSS custom properties and compositor-only motion curves.",
  },
  {
    name: "registry.json",
    note: "Standard shadcn manifest for CLI and AI coding agent discovery.",
  },
];

export function InstallBand() {
  const [pm, setPm] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMANDS[pm]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <section id="install" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-8">
        <div className="rounded-[28px] border border-white/60 bg-white/40 p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-float)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-balance text-3xl sm:text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
                One command. Zero lock-in.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tessera distributes through the standard shadcn registry. Every
                file lands directly in your repository so you—and your AI
                coding tools—can customize anything without fighting a package
                wrapper.
              </p>

              {/* Package manager pill bar + command */}
              <div className="rounded-[20px] border border-white/75 bg-white/78 backdrop-blur-xl p-4 shadow-[var(--shadow-card)] space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-surface p-1">
                    {(["pnpm", "npm", "bun", "yarn"] as const).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPm(item)}
                        className={cn(
                          "rounded-full px-3 py-1 font-mono text-xs transition-colors",
                          pm === item
                            ? "bg-foreground text-background font-medium"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy install command"
                    className="tessera-press inline-flex h-8 items-center gap-1.5 rounded-full bg-surface px-3 text-xs font-medium text-foreground hover:bg-surface-strong"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl bg-surface px-3.5 py-3 font-mono text-xs text-foreground">
                  <code>{COMMANDS[pm]}</code>
                </div>
              </div>
            </div>

            {/* Clean file list */}
            <div className="lg:col-span-6 rounded-[22px] border border-white/75 bg-white/78 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-mono text-xs text-foreground">
                  your-project/
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  4 files
                </span>
              </div>

              <div className="divide-y divide-border/70">
                {FILES.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-start gap-3 py-3 first:pt-2 last:pb-1"
                  >
                    <FiFileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="font-mono text-xs font-medium text-foreground">
                        {file.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {file.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
