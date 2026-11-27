"use client";

import React, { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

interface CodeViewerProps {
  code?: string;
  highlightedHtml?: string;
  filename?: string;
  className?: string;
}

export function CodeViewer({
  code,
  highlightedHtml,
  filename,
  className,
}: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className={cn("relative bg-[#fafafb]", className)}>
      {/* Subtle utility bar with optional filename + copy pill */}
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#f6f6f8] px-4 py-2">
        <span className="font-mono text-[11.5px] text-muted-foreground truncate">
          {filename ?? "component.tsx"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className="tessera-press inline-flex h-7 items-center gap-1.5 rounded-full border border-black/[0.07] bg-white px-2.5 text-[11.5px] font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.04)] hover:bg-surface"
        >
          {copied ? (
            <>
              <FiCheck className="h-3 w-3 text-foreground" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <FiCopy className="h-3 w-3 text-muted-foreground" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Scrollable light syntax-highlighted code */}
      <div
        className="tessera-scrollbar tessera-code-block max-h-[460px] overflow-auto px-5 py-4 font-mono text-[13px] leading-[1.7] text-[#111113]"
        dangerouslySetInnerHTML={{
          __html:
            highlightedHtml ||
            `<pre class="text-muted-foreground">${escapeHtml(code ?? "")}</pre>`,
        }}
      />
    </div>
  );
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
