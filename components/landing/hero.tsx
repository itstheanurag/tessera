"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiLayers,
  FiSliders,
  FiZap,
} from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

const CLI_COMMAND = "npx shadcn@latest add https://tessera.ui/r/registry.json";

const STACK_CARDS = [
  {
    id: "motion",
    title: "Spring physics",
    meta: "stiffness 420 · damping 32",
    preview: "Interruptible transitions that respond mid-gesture.",
  },
  {
    id: "source",
    title: "Source-owned",
    meta: "components/tessera/*.tsx",
    preview: "Plain TypeScript your AI coding agent can read directly.",
  },
  {
    id: "a11y",
    title: "Accessible base",
    meta: "Radix · keyboard & ARIA",
    preview: "Focus management and reduced-motion built into every primitive.",
  },
];

type PillState = "idle" | "syncing" | "ready";
type ButtonStyle = "stitched" | "frosted" | "minimal";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [copiedCli, setCopiedCli] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pillState, setPillState] = useState<PillState>("idle");
  const [stackIndex, setStackIndex] = useState(0);
  const [buttonStyle, setButtonStyle] = useState<ButtonStyle>("stitched");
  const [triggerCount, setTriggerCount] = useState(0);

  const spring = reduceMotion
    ? { duration: 0.08 }
    : { type: "spring" as const, stiffness: 420, damping: 32 };

  const handleCopyCli = async () => {
    try {
      await navigator.clipboard.writeText(CLI_COMMAND);
      setCopiedCli(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopiedCli(false), 1800);
    } catch {
      // Clipboard unavailable
    }
  };

  const cyclePill = () => {
    if (pillState === "idle") {
      setPillState("syncing");
      setTimeout(() => setPillState("ready"), 900);
    } else if (pillState === "ready") {
      setPillState("idle");
    }
  };

  const orderedStack = [
    STACK_CARDS[stackIndex % STACK_CARDS.length],
    STACK_CARDS[(stackIndex + 1) % STACK_CARDS.length],
    STACK_CARDS[(stackIndex + 2) % STACK_CARDS.length],
  ];

  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-8">
        {/* Centered luminous hero header */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <h1 className="text-balance text-[2.65rem] sm:text-[3.75rem] lg:text-[4.35rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.18)]">
            Fluid UI components you copy into your code.
          </h1>

          <p className="mx-auto max-w-[54ch] text-base sm:text-[18px] leading-[1.6] text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.18)]">
            Tactile React, Tailwind CSS v4, and Motion primitives designed to
            feel physical and stay transparent for AI coding workflows.
          </p>

          {/* Two stitched pill actions — obsidian black + crisp white */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/docs"
              className="group tessera-press relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_26px_-6px_rgba(17,17,19,0.42)] hover:bg-[#1c1c20]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-full border border-dashed border-white/30 transition-colors duration-200 group-hover:border-white/50"
              />
              <span className="relative z-10">Explore documentation</span>
              <FiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={handleCopyCli}
              aria-label={copiedCli ? "Copied CLI command" : "Copy CLI command"}
              className="group tessera-press relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white/95 px-6 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_26px_-6px_rgba(17,17,19,0.2)] backdrop-blur-md hover:bg-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-full border border-dashed border-black/20 transition-colors duration-200 group-hover:border-black/38"
              />

              {/* Interruptible icon crossfade (both stay mounted, zero blank gap) */}
              <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center">
                <FiCopy
                  aria-hidden="true"
                  className={cn(
                    "absolute h-3.5 w-3.5 text-muted-foreground transition-[transform,opacity,filter] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity",
                    copiedCli
                      ? "opacity-0 scale-50 blur-[2px] motion-reduce:scale-100 motion-reduce:blur-none"
                      : "opacity-100 scale-100 blur-0",
                  )}
                />
                <FiCheck
                  aria-hidden="true"
                  className={cn(
                    "absolute h-4 w-4 text-foreground transition-[transform,opacity,filter] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity",
                    copiedCli
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-50 blur-[2px] motion-reduce:scale-100 motion-reduce:blur-none",
                  )}
                />
              </span>

              {/* Overlapping grid cell keeps button width 100% locked (zero layout shift) */}
              <span className="relative z-10 inline-grid items-center overflow-hidden">
                <span
                  className={cn(
                    "col-start-1 row-start-1 font-mono text-xs sm:text-[13px] transition-[transform,opacity,filter] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity",
                    copiedCli
                      ? "opacity-0 -translate-y-1.5 blur-[2px] motion-reduce:translate-y-0 motion-reduce:blur-none"
                      : "opacity-100 translate-y-0 blur-0",
                  )}
                >
                  npx shadcn add tessera
                </span>
                <span
                  className={cn(
                    "col-start-1 row-start-1 text-center font-mono text-xs sm:text-[13px] text-foreground transition-[transform,opacity,filter] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity",
                    copiedCli
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-1.5 blur-[2px] motion-reduce:translate-y-0 motion-reduce:blur-none",
                  )}
                >
                  Copied to clipboard
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Translucent frosted interactive hero stage */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mt-14 rounded-[28px] border border-white/60 bg-white/38 p-4 sm:p-6 lg:p-8 shadow-[var(--shadow-float)] backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
            {/* Left column: morphing pill + tactile card stack */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="rounded-[22px] border border-white/75 bg-white/74 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Morphing pill
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    click to test
                  </span>
                </div>

                <div className="flex items-center justify-center py-4">
                  <motion.button
                    type="button"
                    layout
                    onClick={cyclePill}
                    transition={spring}
                    className={cn(
                      "tessera-press inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-full px-5 text-sm font-medium shadow-[var(--shadow-sm)]",
                      pillState === "ready"
                        ? "bg-foreground text-background"
                        : "bg-surface text-foreground hover:bg-surface-strong",
                    )}
                  >
                    <AnimatePresence mode="popLayout" initial={false}>
                      {pillState === "idle" && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <FiZap className="h-4 w-4" />
                          <span>Sync component</span>
                        </motion.span>
                      )}
                      {pillState === "syncing" && (
                        <motion.span
                          key="syncing"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <span className="h-3.5 w-3.5 rounded-full border-2 border-foreground/25 border-t-foreground animate-spin" />
                          <span>Writing source...</span>
                        </motion.span>
                      )}
                      {pillState === "ready" && (
                        <motion.span
                          key="ready"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <FiCheck className="h-4 w-4" />
                          <span>Added to repo</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              <div className="flex-1 rounded-[22px] border border-white/75 bg-white/74 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] flex flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Spring card stack
                  </span>
                  <button
                    type="button"
                    onClick={() => setStackIndex((i) => i + 1)}
                    className="tessera-press inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground shadow-[var(--shadow-sm)] hover:bg-white"
                  >
                    <FiLayers className="h-3 w-3" />
                    <span>Next card</span>
                  </button>
                </div>

                <div className="relative h-[162px] w-full pt-2">
                  {orderedStack.map((card, pos) => {
                    const isFront = pos === 0;
                    return (
                      <motion.button
                        key={card.id}
                        type="button"
                        onClick={() => setStackIndex((i) => i + 1)}
                        animate={{
                          y: pos * 10,
                          scale: 1 - pos * 0.045,
                          opacity: 1 - pos * 0.22,
                          zIndex: 3 - pos,
                        }}
                        transition={spring}
                        className={cn(
                          "absolute inset-x-0 top-0 w-full rounded-[18px] border border-white/80 bg-white/85 backdrop-blur-md p-4 text-left shadow-[var(--shadow-sm)]",
                          isFront
                            ? "cursor-pointer hover:border-foreground/25"
                            : "pointer-events-none",
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-foreground">
                            {card.title}
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {card.meta}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {card.preview}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right column: interactive Surface & Button Craft playground */}
            <div className="lg:col-span-7 rounded-[22px] border border-white/75 bg-white/74 backdrop-blur-xl p-6 sm:p-8 shadow-[var(--shadow-card)] flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.07]">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <FiSliders className="h-4 w-4 text-muted-foreground" />
                  <span>Tactile surface playground</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  presses: {triggerCount}
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-6 py-4">
                <button
                  type="button"
                  onClick={() => setTriggerCount((c) => c + 1)}
                  className={cn(
                    "group tessera-press relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full px-8 text-sm font-medium",
                    buttonStyle === "stitched" &&
                      "bg-foreground text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_28px_-8px_rgba(17,17,19,0.45)] hover:bg-[#1c1c20]",
                    buttonStyle === "frosted" &&
                      "border border-black/[0.08] bg-white text-foreground shadow-[0_6px_20px_-6px_rgba(17,17,19,0.14)] hover:bg-surface",
                    buttonStyle === "minimal" &&
                      "bg-surface text-foreground hover:bg-surface-strong",
                  )}
                >
                  {buttonStyle === "stitched" && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[3.5px] rounded-full border border-dashed border-white/32 transition-colors duration-200 group-hover:border-white/52"
                    />
                  )}
                  <span className="relative z-10">Deploy component</span>
                  <FiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <p className="text-xs text-muted-foreground text-center max-w-sm">
                  Switch surface treatments below to preview Tessera&apos;s
                  stitched, frosted, and minimal button primitives.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-1 rounded-full bg-surface/90 p-1 border border-black/[0.05]">
                  {(["stitched", "frosted", "minimal"] as const).map((style) => {
                    const active = buttonStyle === style;
                    return (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setButtonStyle(style)}
                        className={cn(
                          "relative rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-colors",
                          active
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="hero-surface-pill"
                            transition={spring}
                            className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(17,17,19,0.08)]"
                          />
                        )}
                        <span className="relative z-10">{style}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
