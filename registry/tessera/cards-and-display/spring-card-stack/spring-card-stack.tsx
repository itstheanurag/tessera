"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/registry/tessera/lib/utils";

export interface StackCardItem {
  id: string;
  title: string;
  meta?: string;
  description: string;
}

export interface SpringCardStackProps {
  cards: StackCardItem[];
  className?: string;
}

export function SpringCardStack({ cards, className }: SpringCardStackProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  if (cards.length === 0) return null;

  const visibleCount = Math.min(3, cards.length);
  const ordered = Array.from({ length: visibleCount }, (_, offset) => {
    return cards[(index + offset) % cards.length];
  });

  const spring = reduceMotion
    ? { duration: 0.08 }
    : { type: "spring" as const, stiffness: 420, damping: 32 };

  return (
    <div className={cn("w-full max-w-[360px] space-y-3", className)}>
      <div className="relative h-[156px] w-full">
        {ordered.map((card, pos) => {
          const isFront = pos === 0;
          return (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => setIndex((i) => (i + 1) % cards.length)}
              animate={{
                y: pos * 11,
                scale: 1 - pos * 0.045,
                opacity: 1 - pos * 0.22,
                zIndex: visibleCount - pos,
              }}
              transition={spring}
              className={cn(
                "absolute inset-x-0 top-0 w-full rounded-[18px] border border-black/[0.08] bg-white p-5 text-left shadow-[0_6px_20px_-6px_rgba(17,17,19,0.08),0_1px_2px_rgba(17,17,19,0.04)]",
                isFront
                  ? "cursor-pointer hover:border-black/[0.16]"
                  : "pointer-events-none",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#111113]">
                  {card.title}
                </span>
                {card.meta && (
                  <span className="font-mono text-[11px] text-[#6b6b73]">
                    {card.meta}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#6b6b73]">
                {card.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="flex items-center justify-between px-1 text-xs text-[#6b6b73]">
        <span className="font-mono tabular-nums">
          {(index % cards.length) + 1} / {cards.length}
        </span>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % cards.length)}
          className="font-medium text-[#111113] hover:underline"
        >
          Next card →
        </button>
      </div>
    </div>
  );
}
