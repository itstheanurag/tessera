import React from "react";
import Link from "next/link";
import { TesseraMark } from "@/components/brand/tessera-mark";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/[0.06] bg-white/75 backdrop-blur-md py-12">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground"
          >
            <TesseraMark className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Tessera
            </span>
          </Link>
          <span className="text-xs text-muted-foreground">
            Open-source React components
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <Link
            href="/docs/installation"
            className="hover:text-foreground transition-colors"
          >
            Installation
          </Link>
          <a
            href="https://github.com/itstheanurag/bitsandpieces"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
