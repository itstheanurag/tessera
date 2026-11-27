"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  FiArrowLeft,
  FiCheck,
  FiSliders,
  FiTerminal,
  FiTrash2,
} from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

const DOCK_TABS = [
  {
    id: "forms",
    label: "Forms",
    heading: "Multi-step validation without boilerplate",
    detail:
      "Directional slide transitions, per-step validation hooks, and zero form-library lock-in.",
    metric: "4 files · 100% typed",
  },
  {
    id: "trays",
    label: "Trays",
    heading: "Dynamic height sheets that never jump",
    detail:
      "Smooth layout-driven height interpolation inspired by native iOS and Family wallets.",
    metric: "spring(420, 32)",
  },
  {
    id: "controls",
    label: "Controls",
    heading: "Tactile buttons, switches, and hold actions",
    detail:
      "Pointer-gated hovers, scale(0.965) press feedback, and asymmetric hold-to-confirm states.",
    metric: "140ms ease-out",
  },
  {
    id: "ai",
    label: "AI Ready",
    heading: "Flat source your agent reads in one pass",
    detail:
      "No hidden node_modules wrappers. Every primitive uses explicit TypeScript props and Tailwind v4.",
    metric: "shadcn registry",
  },
] as const;

type TrayView = "root" | "install" | "tokens";

export function ShowcaseBento() {
  const reduceMotion = useReducedMotion();
  const [activeDock, setActiveDock] = useState<(typeof DOCK_TABS)[number]["id"]>(
    "forms",
  );
  const [springOn, setSpringOn] = useState(true);
  const [hapticCount, setHapticCount] = useState(12);

  // Hold-to-confirm state
  const [holding, setHolding] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Family-style dynamic tray state
  const [trayView, setTrayView] = useState<TrayView>("root");

  const spring = reduceMotion
    ? { duration: 0.08 }
    : { type: "spring" as const, stiffness: 420, damping: 32 };

  const activeTabObj =
    DOCK_TABS.find((t) => t.id === activeDock) ?? DOCK_TABS[0];

  const startHold = () => {
    if (confirmed) {
      setConfirmed(false);
      return;
    }
    setHolding(true);
    holdTimer.current = setTimeout(() => {
      setHolding(false);
      setConfirmed(true);
    }, 1000);
  };

  const cancelHold = () => {
    setHolding(false);
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-balance text-3xl sm:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.18)]">
            Built to feel physical under the cursor.
          </h2>
          <p className="text-base sm:text-[17px] leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.16)]">
            Every interaction below runs on the same compositor-only curves and
            spring physics shipped in the registry. Click, switch, and hold to
            feel the difference.
          </p>
        </div>

        {/* Asymmetric 12-col luminous bento */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Tile 1 (7 cols): Fluid Segmented Dock */}
          <div className="lg:col-span-7 rounded-[28px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[var(--shadow-card)] p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">
                Fluid segmented dock
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                layoutId shared pill
              </span>
            </div>

            {/* Interactive content stage */}
            <div className="rounded-[20px] border border-white/75 bg-white/76 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] min-h-[156px] flex flex-col justify-between">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTabObj.id}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 6, filter: "blur(4px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -6, filter: "blur(4px)" }
                  }
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                      {activeTabObj.heading}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activeTabObj.detail}
                  </p>
                  <div className="pt-2 font-mono text-xs text-foreground/70">
                    {activeTabObj.metric}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dock pill bar */}
            <div className="flex items-center justify-center">
              <div className="inline-flex flex-wrap items-center gap-1 rounded-full bg-white p-1.5 shadow-[var(--shadow-sm)]">
                {DOCK_TABS.map((tab) => {
                  const active = activeDock === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDock(tab.id)}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-xs sm:text-[13px] font-medium transition-colors",
                        active
                          ? "text-background"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="bento-dock-pill"
                          transition={spring}
                          className="absolute inset-0 rounded-full bg-foreground"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tile 2 (5 cols): Tactile Switch + Rolling Counter */}
          <div className="lg:col-span-5 rounded-[28px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[var(--shadow-card)] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Tactile controls
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                140ms press
              </span>
            </div>

            <div className="space-y-4">
              {/* Switch card */}
              <div className="rounded-[20px] border border-white/75 bg-white/76 backdrop-blur-xl p-5 shadow-[var(--shadow-card)] flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Spring physics
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {springOn ? "Natural velocity handoff" : "Linear fallback"}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={springOn}
                  aria-label="Toggle spring physics"
                  onClick={() => setSpringOn((v) => !v)}
                  className={cn(
                    "relative inline-flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors",
                    springOn ? "bg-foreground" : "bg-surface-strong",
                  )}
                >
                  <motion.span
                    layout
                    transition={
                      springOn && !reduceMotion
                        ? { type: "spring", stiffness: 500, damping: 30 }
                        : { duration: 0.14 }
                    }
                    className={cn(
                      "h-6 w-6 rounded-full bg-white shadow-sm",
                      springOn ? "ml-auto" : "mr-auto",
                    )}
                  />
                </button>
              </div>

              {/* Rolling stepper */}
              <div className="rounded-[20px] border border-white/75 bg-white/76 backdrop-blur-xl p-5 shadow-[var(--shadow-card)] flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Grid density
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Tabular numerals
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHapticCount((c) => Math.max(4, c - 2))}
                    aria-label="Decrease density"
                    className="tessera-press h-9 w-9 rounded-full bg-surface text-sm font-medium text-foreground hover:bg-surface-strong"
                  >
                    −
                  </button>
                  <span className="w-9 text-center font-mono text-sm font-semibold text-foreground tabular-nums">
                    {hapticCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setHapticCount((c) => Math.min(24, c + 2))}
                    aria-label="Increase density"
                    className="tessera-press h-9 w-9 rounded-full bg-foreground text-sm font-medium text-background hover:bg-[#27272a]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3 (5 cols): Hold-to-Confirm */}
          <div className="lg:col-span-5 rounded-[28px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[var(--shadow-card)] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Hold to confirm
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                asymmetric timing
              </span>
            </div>

            <div className="rounded-[20px] border border-white/75 bg-white/76 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] flex flex-col items-center justify-center gap-4 min-h-[180px]">
              <button
                type="button"
                onPointerDown={startHold}
                onPointerUp={cancelHold}
                onPointerLeave={cancelHold}
                onPointerCancel={cancelHold}
                className="tessera-press relative h-12 min-w-[200px] overflow-hidden rounded-full bg-surface px-6 text-sm font-medium text-foreground select-none shadow-[var(--shadow-sm)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 origin-left bg-foreground"
                  style={{
                    transform: confirmed
                      ? "scaleX(1)"
                      : holding
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    transition: confirmed
                      ? "transform 160ms var(--ease-out)"
                      : holding
                        ? "transform 1000ms linear"
                        : "transform 180ms var(--ease-out)",
                  }}
                />
                <span
                  className={cn(
                    "relative z-10 inline-flex items-center gap-2 transition-colors duration-150",
                    holding || confirmed ? "text-background" : "text-foreground",
                  )}
                >
                  {confirmed ? (
                    <>
                      <FiCheck className="h-4 w-4" />
                      <span>Cache cleared</span>
                    </>
                  ) : (
                    <>
                      <FiTrash2 className="h-4 w-4" />
                      <span>Hold to clear</span>
                    </>
                  )}
                </span>
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {confirmed
                  ? "Click again to reset."
                  : "1s linear fill on press · 180ms snap on release."}
              </p>
            </div>
          </div>

          {/* Tile 4 (7 cols): Family-Style Dynamic Tray */}
          <div
            id="tray"
            className="lg:col-span-7 rounded-[28px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[var(--shadow-card)] p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Dynamic morphing tray
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Family-style sheet
              </span>
            </div>

            <div className="flex items-center justify-center py-2">
              <motion.div
                layout
                transition={spring}
                className="w-full max-w-[420px] overflow-hidden rounded-[24px] bg-white p-5 shadow-[var(--shadow-float)]"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {trayView === "root" && (
                    <motion.div
                      key="root"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-sm font-semibold text-foreground">
                          Component actions
                        </span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          tessera-tray
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setTrayView("install")}
                        className="tessera-press w-full flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left hover:bg-surface-strong"
                      >
                        <span className="inline-flex items-center gap-3 text-sm font-medium text-foreground">
                          <FiTerminal className="h-4 w-4 text-muted-foreground" />
                          Install with CLI
                        </span>
                        <span className="text-xs text-muted-foreground">→</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTrayView("tokens")}
                        className="tessera-press w-full flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left hover:bg-surface-strong"
                      >
                        <span className="inline-flex items-center gap-3 text-sm font-medium text-foreground">
                          <FiSliders className="h-4 w-4 text-muted-foreground" />
                          Inspect motion tokens
                        </span>
                        <span className="text-xs text-muted-foreground">→</span>
                      </button>
                    </motion.div>
                  )}

                  {trayView === "install" && (
                    <motion.div
                      key="install"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setTrayView("root")}
                          aria-label="Back to actions"
                          className="tessera-press inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-foreground hover:bg-surface-strong"
                        >
                          <FiArrowLeft className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-semibold text-foreground">
                          Install with CLI
                        </span>
                      </div>

                      <div className="rounded-2xl bg-surface p-3.5 font-mono text-xs text-foreground overflow-x-auto">
                        npx shadcn@latest add https://tessera.ui/r/registry.json
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Copies 4 TypeScript files into{" "}
                        <code className="font-mono text-foreground">
                          components/tessera/
                        </code>{" "}
                        with zero runtime dependencies beyond Motion and Radix.
                      </p>

                      <button
                        type="button"
                        onClick={() => setTrayView("root")}
                        className="tessera-press w-full h-10 rounded-full bg-foreground text-xs font-medium text-background hover:bg-[#27272a]"
                      >
                        Done
                      </button>
                    </motion.div>
                  )}

                  {trayView === "tokens" && (
                    <motion.div
                      key="tokens"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setTrayView("root")}
                          aria-label="Back to actions"
                          className="tessera-press inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-foreground hover:bg-surface-strong"
                        >
                          <FiArrowLeft className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-semibold text-foreground">
                          Motion tokens
                        </span>
                      </div>

                      <div className="space-y-2 rounded-2xl bg-surface p-4 font-mono text-xs text-foreground">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">--ease-out</span>
                          <span>cubic-bezier(0.23, 1, 0.32, 1)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">spring</span>
                          <span>stiffness: 420, damping: 32</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">press</span>
                          <span>scale(0.965) · 140ms</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setTrayView("root")}
                        className="tessera-press w-full h-10 rounded-full bg-foreground text-xs font-medium text-background hover:bg-[#27272a]"
                      >
                        Back
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
