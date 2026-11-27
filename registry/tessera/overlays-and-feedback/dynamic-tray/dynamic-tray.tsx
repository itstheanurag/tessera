"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/registry/tessera/lib/utils";

export interface TrayView {
  id: string;
  title: string;
  content: (navigate: (viewId: string) => void) => React.ReactNode;
}

export interface DynamicTrayProps {
  views: TrayView[];
  initialViewId?: string;
  className?: string;
}

export function DynamicTray({
  views,
  initialViewId,
  className,
}: DynamicTrayProps) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(
    initialViewId ?? views[0]?.id ?? "",
  );

  const currentView = views.find((v) => v.id === activeId) ?? views[0];

  if (!currentView) return null;

  const spring = reduceMotion
    ? { duration: 0.08 }
    : { type: "spring" as const, stiffness: 420, damping: 32 };

  return (
    <motion.div
      layout
      transition={spring}
      className={cn(
        "w-full max-w-[400px] overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_12px_36px_-10px_rgba(17,17,19,0.12),0_1px_3px_rgba(17,17,19,0.05)]",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentView.id}
          initial={
            reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }
          }
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
        >
          {currentView.content(setActiveId)}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
