"use client";

import React, { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/registry/tessera/lib/utils";

export interface DockItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SegmentedDockProps {
  items: DockItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  className?: string;
}

export function SegmentedDock({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
}: SegmentedDockProps) {
  const layoutId = useId();
  const reduceMotion = useReducedMotion();
  const [internal, setInternal] = useState(
    defaultValue ?? items[0]?.id ?? "",
  );

  const activeId = value ?? internal;

  const handleSelect = (id: string) => {
    if (value === undefined) {
      setInternal(id);
    }
    onValueChange?.(id);
  };

  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-full border border-black/[0.07] bg-white p-1.5 shadow-[0_2px_10px_-3px_rgba(17,17,19,0.08)]",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => handleSelect(item.id)}
            className={cn(
              "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
              isActive
                ? "text-white"
                : "text-[#6b6b73] hover:text-[#111113]",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`tessera-dock-${layoutId}`}
                transition={
                  reduceMotion
                    ? { duration: 0.08 }
                    : { type: "spring", stiffness: 420, damping: 32 }
                }
                className="absolute inset-0 rounded-full bg-[#111113]"
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-1.5">
              {item.icon}
              <span>{item.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
