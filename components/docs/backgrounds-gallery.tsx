"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiCheck,
  FiCopy,
  FiMaximize2,
  FiSearch,
  FiX,
  FiCode,
} from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";
import {
  BACKGROUNDS,
  BACKGROUND_CATEGORIES,
  type BackgroundCategory,
  type BackgroundItem,
} from "@/registry/tessera/backgrounds/backgrounds-data";

type CopyFormat = "tailwind" | "css" | "tsx";

interface BackgroundCardProps {
  item: BackgroundItem;
  onPreview: (item: BackgroundItem) => void;
}

const BackgroundCard = React.memo(function BackgroundCard({
  item,
  onPreview,
}: BackgroundCardProps) {
  const [copiedFormat, setCopiedFormat] = useState<CopyFormat | null>(null);

  const handleCopy = async (format: CopyFormat, e: React.MouseEvent) => {
    e.stopPropagation();
    let textToCopy = "";
    if (format === "tailwind") textToCopy = item.tailwind;
    else if (format === "css") textToCopy = item.css;
    else if (format === "tsx") textToCopy = item.tsx;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 1600);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="group isolate [contain:layout_paint] rounded-[22px] border border-white/80 bg-white/55 p-[1px] shadow-[0_8px_24px_-8px_rgba(17,17,19,0.12),0_1px_2px_rgba(17,17,19,0.04)] transition-all duration-200 hover:shadow-[0_12px_32px_-8px_rgba(17,17,19,0.18)]">
      <div className="flex flex-col h-full rounded-[21px] border border-black/[0.06] bg-white/95 overflow-hidden">
        {/* Preview canvas area */}
        <div
          onClick={() => onPreview(item)}
          className="relative h-44 sm:h-48 w-full cursor-pointer overflow-hidden border-b border-black/[0.06] transition-transform duration-300"
        >
          {/* Background rendered directly */}
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            style={item.style}
          />

          {/* Frosted hover pill with Expand preview */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-black/10 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
              <FiMaximize2 className="h-3 w-3" />
              <span>Full Preview</span>
            </span>
          </div>

          {/* Category pill floating top right */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/85 px-2.5 py-0.5 text-[11px] font-medium text-foreground/80 shadow-xs backdrop-blur-md">
              {item.category}
            </span>
          </div>
        </div>

        {/* Card details & copy actions */}
        <div className="flex flex-col flex-1 justify-between p-4 sm:p-5 gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                {item.name}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>

          {/* Copy actions segmented bar */}
          <div className="space-y-2 pt-1 border-t border-black/[0.05]">
            <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
              <span>Copy code:</span>
              {copiedFormat && (
                <span className="inline-flex items-center gap-1 font-mono text-emerald-600 font-semibold">
                  <FiCheck className="h-3 w-3" /> Copied {copiedFormat.toUpperCase()}!
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-1.5 rounded-[12px] border border-black/[0.06] bg-[#f4f4f6] p-1">
              <button
                type="button"
                onClick={(e) => handleCopy("tailwind", e)}
                className={cn(
                  "inline-flex items-center justify-center gap-1 rounded-[8px] py-1 text-xs font-medium transition-colors",
                  copiedFormat === "tailwind"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/80 hover:bg-white hover:text-foreground"
                )}
                title="Copy Tailwind CSS classes"
              >
                {copiedFormat === "tailwind" ? (
                  <FiCheck className="h-3 w-3" />
                ) : (
                  <FiCopy className="h-2.5 w-2.5 opacity-60" />
                )}
                <span>Tailwind</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleCopy("css", e)}
                className={cn(
                  "inline-flex items-center justify-center gap-1 rounded-[8px] py-1 text-xs font-medium transition-colors",
                  copiedFormat === "css"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/80 hover:bg-white hover:text-foreground"
                )}
                title="Copy raw CSS rules"
              >
                {copiedFormat === "css" ? (
                  <FiCheck className="h-3 w-3" />
                ) : (
                  <FiCopy className="h-2.5 w-2.5 opacity-60" />
                )}
                <span>CSS</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleCopy("tsx", e)}
                className={cn(
                  "inline-flex items-center justify-center gap-1 rounded-[8px] py-1 text-xs font-medium transition-colors",
                  copiedFormat === "tsx"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/80 hover:bg-white hover:text-foreground"
                )}
                title="Copy React TSX component"
              >
                {copiedFormat === "tsx" ? (
                  <FiCheck className="h-3 w-3" />
                ) : (
                  <FiCode className="h-2.5 w-2.5 opacity-60" />
                )}
                <span>TSX</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export function BackgroundsGallery() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | BackgroundCategory
  >("All");
  const [previewItem, setPreviewItem] = useState<BackgroundItem | null>(null);
  const [modalCopiedFormat, setModalCopiedFormat] = useState<CopyFormat | null>(
    null
  );

  // Filter logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BACKGROUNDS.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, selectedCategory]);

  // Close preview on escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleModalCopy = async (format: CopyFormat) => {
    if (!previewItem) return;
    let textToCopy = "";
    if (format === "tailwind") textToCopy = previewItem.tailwind;
    else if (format === "css") textToCopy = previewItem.css;
    else if (format === "tsx") textToCopy = previewItem.tsx;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setModalCopiedFormat(format);
      setTimeout(() => setModalCopiedFormat(null), 1600);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="mx-auto max-w-[1280px] space-y-8 pt-8">
      {/* Control bar: search + category filters */}
      <div className="isolate [contain:layout_paint] rounded-[20px] border border-white/80 bg-white/55 p-[1px] shadow-[0_8px_24px_-8px_rgba(17,17,19,0.12),0_1px_2px_rgba(17,17,19,0.04)] backdrop-blur-xl">
        <div className="rounded-[19px] border border-black/[0.06] bg-white/85 p-3 sm:p-4 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search input with icon */}
            <div className="relative flex-1">
              <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${BACKGROUNDS.length} handcrafted backgrounds and gradients...`}
                className="h-10 w-full rounded-[12px] border border-black/[0.08] bg-surface pl-10 pr-4 text-[13.5px] text-foreground placeholder:text-muted-foreground outline-hidden transition-colors focus:border-black/[0.2] focus:bg-white"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <FiX className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="shrink-0 text-right text-xs font-mono text-muted-foreground self-center">
              <span>{filtered.length} backgrounds</span>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-black/[0.05]">
            {BACKGROUND_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  selectedCategory === cat
                    ? "bg-foreground text-background shadow-xs"
                    : "bg-surface text-foreground/80 hover:bg-surface-strong hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of backgrounds */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[22px] border border-black/[0.06] bg-white/70 py-20 text-center backdrop-blur-md">
          <p className="text-base font-medium text-foreground">
            No backgrounds found matching &ldquo;{query}&rdquo;
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search keywords or switching category filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 rounded-[10px] bg-foreground px-4 py-2 text-xs font-medium text-background"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <BackgroundCard
              key={item.id}
              item={item}
              onPreview={(selected) => setPreviewItem(selected)}
            />
          ))}
        </div>
      )}

      {/* Fullscreen / Interactive Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal live background backdrop */}
            <div
              className="absolute inset-0 transition-all duration-300"
              style={previewItem.style}
            />

            {/* Dark/light scrim for readability */}
            <div
              onClick={() => setPreviewItem(null)}
              className="absolute inset-0 bg-black/20 backdrop-blur-xs cursor-pointer"
            />

            {/* Floating preview workbench card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 w-full max-w-xl isolate [contain:layout_paint] rounded-[24px] border border-white/80 bg-white/70 p-[1px] shadow-[0_20px_50px_-12px_rgba(17,17,19,0.25)] backdrop-blur-2xl"
            >
              <div className="rounded-[23px] border border-black/[0.06] bg-white/95 p-6 sm:p-7 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="rounded-full border border-black/[0.08] bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {previewItem.category}
                      </span>
                    </div>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                      {previewItem.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {previewItem.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPreviewItem(null)}
                    className="tessera-press rounded-full border border-black/[0.08] bg-surface p-2 text-foreground/70 hover:bg-surface-strong hover:text-foreground"
                    aria-label="Close preview"
                  >
                    <FiX className="h-4 w-4" />
                  </button>
                </div>

                {/* Live sample UI card simulating product container */}
                <div className="rounded-[16px] border border-black/[0.08] bg-white/80 p-5 shadow-xs backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Component Preview
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      Sample Surface
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Build memorable software interfaces
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    This sample card demonstrates typography contrast and frosted
                    glass responsiveness against the &ldquo;{previewItem.name}&rdquo; background.
                  </p>
                </div>

                {/* Direct copy buttons */}
                <div className="space-y-3 pt-2 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between text-xs font-medium text-foreground">
                    <span>Export Snippet</span>
                    {modalCopiedFormat && (
                      <span className="inline-flex items-center gap-1 font-mono text-emerald-600 font-semibold">
                        <FiCheck className="h-3.5 w-3.5" /> Copied {modalCopiedFormat.toUpperCase()}!
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleModalCopy("tailwind")}
                      className={cn(
                        "tessera-press flex items-center justify-center gap-1.5 rounded-[12px] border py-2.5 text-xs font-semibold transition-all",
                        modalCopiedFormat === "tailwind"
                          ? "border-foreground bg-foreground text-background shadow-xs"
                          : "border-black/[0.08] bg-surface text-foreground hover:bg-surface-strong"
                      )}
                    >
                      {modalCopiedFormat === "tailwind" ? (
                        <FiCheck className="h-3.5 w-3.5" />
                      ) : (
                        <FiCopy className="h-3 w-3" />
                      )}
                      <span>Copy Tailwind</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModalCopy("css")}
                      className={cn(
                        "tessera-press flex items-center justify-center gap-1.5 rounded-[12px] border py-2.5 text-xs font-semibold transition-all",
                        modalCopiedFormat === "css"
                          ? "border-foreground bg-foreground text-background shadow-xs"
                          : "border-black/[0.08] bg-surface text-foreground hover:bg-surface-strong"
                      )}
                    >
                      {modalCopiedFormat === "css" ? (
                        <FiCheck className="h-3.5 w-3.5" />
                      ) : (
                        <FiCopy className="h-3 w-3" />
                      )}
                      <span>Copy CSS</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModalCopy("tsx")}
                      className={cn(
                        "tessera-press flex items-center justify-center gap-1.5 rounded-[12px] border py-2.5 text-xs font-semibold transition-all",
                        modalCopiedFormat === "tsx"
                          ? "border-foreground bg-foreground text-background shadow-xs"
                          : "border-black/[0.08] bg-surface text-foreground hover:bg-surface-strong"
                      )}
                    >
                      {modalCopiedFormat === "tsx" ? (
                        <FiCheck className="h-3.5 w-3.5" />
                      ) : (
                        <FiCode className="h-3 w-3" />
                      )}
                      <span>Copy React TSX</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
