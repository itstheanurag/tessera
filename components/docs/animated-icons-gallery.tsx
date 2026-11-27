"use client";

import React, { useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { FiCheck, FiCopy, FiPlay, FiSearch } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";
import {
  ALL_BESPOKE_ICONS,
  BESPOKE_CATEGORIES,
  type BespokeCategory,
  type BespokeIconDef,
} from "@/registry/tessera/icons";

interface IconCardProps {
  entry: BespokeIconDef;
  size: number;
  strokeWidth: number;
  reduceMotion: boolean;
  replayAll: boolean;
}

const IconCard = React.memo(function IconCard({
  entry,
  size,
  strokeWidth,
  reduceMotion,
  replayAll,
}: IconCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const isActiveMotion = replayAll || isHovered;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(entry.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="isolate [contain:layout_paint] rounded-[18px] border border-white/80 bg-white/55 p-[1px] shadow-[0_8px_24px_-8px_rgba(17,17,19,0.16),0_1px_2px_rgba(17,17,19,0.04)]">
      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCopy}
        className="group tessera-press w-full rounded-[17px] border border-black/[0.06] bg-white/90 p-4 text-left transition-colors duration-150 hover:bg-white flex flex-col justify-between gap-5"
      >
        {/* Elevated squircle icon stage */}
        <div className="flex items-center justify-center pt-2">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-[16px] border border-black/[0.06] bg-[#f4f4f6] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-[background-color,box-shadow,color] duration-200 group-hover:bg-white group-hover:shadow-[0_4px_14px_-4px_rgba(17,17,19,0.12)]"
            style={{
              color:
                isActiveMotion && entry.brandColor
                  ? entry.brandColor
                  : "#111113",
            }}
          >
            {entry.render({
              active: isActiveMotion,
              size,
              strokeWidth,
              reduceMotion,
            })}
          </div>
        </div>

        {/* Clean footer bar inside card */}
        <div className="flex items-center justify-between gap-2 border-t border-black/[0.05] pt-3">
          <span className="truncate text-[13px] font-medium text-foreground">
            {entry.name}
          </span>

          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10.5px] transition-colors",
              isCopied
                ? "bg-foreground text-background"
                : "bg-surface text-muted-foreground group-hover:bg-surface-strong group-hover:text-foreground",
            )}
          >
            {isCopied ? (
              <>
                <FiCheck className="h-3 w-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <FiCopy className="h-2.5 w-2.5" />
                <span>TSX</span>
              </>
            )}
          </span>
        </div>
      </button>
    </div>
  );
});

export function AnimatedIconsGallery() {
  const reduceMotion = useReducedMotion() ?? false;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | BespokeCategory>("All");
  const [size, setSize] = useState<number>(28);
  const [strokeWidth, setStrokeWidth] = useState<number>(1.8);
  const [replayAll, setReplayAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_BESPOKE_ICONS.filter((entry) => {
      if (category !== "All" && entry.category !== category) return false;
      if (!q) return true;
      return (
        entry.name.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q) ||
        entry.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  const triggerReplayAll = () => {
    setReplayAll(true);
    setTimeout(() => setReplayAll(false), 800);
  };

  return (
    <div className="mt-10 space-y-6">
      {/* Centered floating 1px-bezeled toolbar */}
      <div className="mx-auto max-w-[1060px] rounded-[18px] border border-white/80 bg-white/50 p-[1px] shadow-[0_8px_28px_-8px_rgba(17,17,19,0.14)] backdrop-blur-xl">
        <div className="rounded-[17px] border border-black/[0.06] bg-white/88 p-2.5 backdrop-blur-xl space-y-2.5">
          <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-sm">
              <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${ALL_BESPOKE_ICONS.length} handcrafted icons...`}
                aria-label="Search animated icons"
                className="h-9 w-full rounded-full border border-black/[0.07] bg-white pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-0.5 rounded-full border border-black/[0.06] bg-surface p-1">
                {[22, 28, 34].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "rounded-full px-3 py-1 font-mono text-xs transition-colors",
                      size === s
                        ? "bg-white font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.08)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {s}px
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center gap-0.5 rounded-full border border-black/[0.06] bg-surface p-1">
                {[1.5, 1.8, 2.2].map((sw) => (
                  <button
                    key={sw}
                    type="button"
                    onClick={() => setStrokeWidth(sw)}
                    className={cn(
                      "rounded-full px-2.5 py-1 font-mono text-xs transition-colors",
                      strokeWidth === sw
                        ? "bg-white font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.08)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {sw}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={triggerReplayAll}
                className="group tessera-press relative inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-xs font-medium text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-[#1c1c20]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[2.5px] rounded-full border border-dashed border-white/28 transition-colors duration-200 group-hover:border-white/50"
                />
                <FiPlay className="relative z-10 h-3 w-3" />
                <span className="relative z-10">Replay all</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] pt-2.5">
            <div className="flex flex-wrap items-center gap-1">
              {BESPOKE_CATEGORIES.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                      active
                        ? "bg-foreground text-background"
                        : "bg-surface/80 text-muted-foreground hover:bg-surface-strong hover:text-foreground",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-[11px] text-muted-foreground tabular-nums px-1">
              {filtered.length} handcrafted icons
            </span>
          </div>
        </div>
      </div>

      {/* Full-width edge-to-edge icon grid — each card owns its own hover state */}
      {filtered.length === 0 ? (
        <div className="mx-auto max-w-md rounded-[20px] border border-white/80 bg-white/85 py-14 text-center text-sm text-muted-foreground backdrop-blur-xl">
          No icons matching &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3.5">
          {filtered.map((entry) => (
            <IconCard
              key={entry.id}
              entry={entry}
              size={size}
              strokeWidth={strokeWidth}
              reduceMotion={reduceMotion}
              replayAll={replayAll}
            />
          ))}
        </div>
      )}
    </div>
  );
}
