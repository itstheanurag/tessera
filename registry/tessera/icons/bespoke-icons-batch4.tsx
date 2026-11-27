"use client";

import React from "react";
import { motion } from "motion/react";
import type { BespokeIconDef } from "./bespoke-icons";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 24 };
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const BESPOKE_ICONS_BATCH4: BespokeIconDef[] = [
  // === AI COMPANY LOGOS (8) ===
  {
    id: "gemini",
    name: "Gemini",
    category: "Logos",
    tags: ["ai", "google", "star", "spark", "llm", "logo"],
    brandColor: "#4285F4",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 2.5C12 7.8 16.2 12 21.5 12C16.2 12 12 16.2 12 21.5C12 16.2 7.8 12 2.5 12C7.8 12 12 7.8 12 2.5Z"
          animate={
            active && !reduceMotion
              ? { rotate: [0, 90], scale: [1, 1.1, 1] }
              : { rotate: 0, scale: 1 }
          }
          transition={{ duration: 0.52, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1.2"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scale: [1, 1.8, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function GeminiIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12 2.5C12 7.8 16.2 12 21.5 12C16.2 12 12 16.2 12 21.5C12 16.2 7.8 12 2.5 12C7.8 12 12 7.8 12 2.5Z"
        animate={hovered ? { rotate: [0, 90], scale: [1, 1.1, 1] } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="1.2"
        fill="currentColor"
        stroke="none"
        animate={hovered ? { scale: [1, 1.8, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "perplexity",
    name: "Perplexity",
    category: "Logos",
    tags: ["ai", "search", "answer", "knot", "logo"],
    brandColor: "#20B2AA",
    render: ({ active, size, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <motion.path
          d="M22.398 7.09h-2.31V2.012h-1.11V7.07l-5.694-5.058-5.695 5.058V2.012h-1.11V7.09h-2.31V15.72h2.31v5.292h1.11v-5.234l5.695 5.008 5.694-5.008v5.234h1.11V15.72h2.31zm-13.42 7.155v3.834L5.385 14.88v-3.816zm1.11-8.583l4.582 4.16v2.646h.006v2.887l-4.588-4.03v-5.663zm6.692 8.583L14.41 18.079v-3.834l3.57 3.125zm-6.692-11.45l3.76 3.464-3.76 3.464-3.76-3.464z"
          animate={active && !reduceMotion ? { scale: [1, 1.08, 1], rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function PerplexityIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M22.398 7.09h-2.31V2.012h-1.11V7.07l-5.694-5.058-5.695 5.058V2.012h-1.11V7.09h-2.31V15.72h2.31v5.292h1.11v-5.234l5.695 5.008 5.694-5.008v5.234h1.11V15.72h2.31zm-13.42 7.155v3.834L5.385 14.88v-3.816zm1.11-8.583l4.582 4.16v2.646h.006v2.887l-4.588-4.03v-5.663zm6.692 8.583L14.41 18.079v-3.834l3.57 3.125zm-6.692-11.45l3.76 3.464-3.76 3.464-3.76-3.464z"
        animate={hovered ? { scale: [1, 1.08, 1], rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "xai",
    name: "xAI",
    category: "Logos",
    tags: ["grok", "ai", "elon", "musk", "logo"],
    brandColor: "#111113",
    render: ({ active, size, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <motion.path
          d="M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
          animate={active && !reduceMotion ? { scale: [1, 1.06, 1] } : { scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function XAIIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
        animate={hovered ? { scale: [1, 1.06, 1] } : { scale: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "mistral",
    name: "Mistral",
    category: "Logos",
    tags: ["ai", "llm", "blocks", "paris", "french", "logo"],
    brandColor: "#F97316",
    render: ({ active, size, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <motion.path
          d="M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z"
          animate={active && !reduceMotion ? { y: [0, -1.2, 0] } : { y: 0 }}
          transition={{ duration: 0.38, ease: EASE_OUT }}
        />
        <motion.path
          d="M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z"
          animate={active && !reduceMotion ? { y: [0, -0.8, 0] } : { y: 0 }}
          transition={{ duration: 0.38, delay: 0.05, ease: EASE_OUT }}
        />
        <motion.path
          d="M3.428 10.258h17.144v3.428H3.428v-3.428z"
          animate={active && !reduceMotion ? { scaleY: [1, 1.15, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.path
          d="M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z"
          animate={active && !reduceMotion ? { y: [0, 0.8, 0] } : { y: 0 }}
          transition={{ duration: 0.38, delay: 0.12, ease: EASE_OUT }}
        />
        <motion.path
          d="M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z"
          animate={active && !reduceMotion ? { y: [0, 1.2, 0] } : { y: 0 }}
          transition={{ duration: 0.38, delay: 0.16, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MistralIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path d="M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z" animate={hovered ? { y: [0, -1.2, 0] } : { y: 0 }} transition={{ duration: 0.38 }} />
      <motion.path d="M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z" animate={hovered ? { y: [0, -0.8, 0] } : { y: 0 }} transition={{ duration: 0.38, delay: 0.05 }} />
      <motion.path d="M3.428 10.258h17.144v3.428H3.428v-3.428z" animate={hovered ? { scaleY: [1, 1.15, 1] } : { scaleY: 1 }} transition={{ duration: 0.4, delay: 0.08 }} style={{ originX: "12px", originY: "12px" }} />
      <motion.path d="M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z" animate={hovered ? { y: [0, 0.8, 0] } : { y: 0 }} transition={{ duration: 0.38, delay: 0.12 }} />
      <motion.path d="M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z" animate={hovered ? { y: [0, 1.2, 0] } : { y: 0 }} transition={{ duration: 0.38, delay: 0.16 }} />
    </svg>
  );
}`,
  },

  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Logos",
    tags: ["ai", "ml", "models", "community", "logo"],
    brandColor: "#D97706",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="9" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
        <path d="M8.8 14.2c1 1.6 2.1 2.2 3.2 2.2s2.2-.6 3.2-2.2" />
        <motion.path
          d="M4.2 14c-1.5 1-1.8 3-.8 4.2 1 1 2.8.8 3.8-.4"
          animate={active && !reduceMotion ? { rotate: [0, -18, 12, 0] } : { rotate: 0 }}
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ originX: "6px", originY: "15px" }}
        />
        <motion.path
          d="M19.8 14c1.5 1 1.8 3 .8 4.2-1 1-2.8.8-3.8-.4"
          animate={active && !reduceMotion ? { rotate: [0, 18, -12, 0] } : { rotate: 0 }}
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ originX: "18px", originY: "15px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function HuggingFaceIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="9" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.8 14.2c1 1.6 2.1 2.2 3.2 2.2s2.2-.6 3.2-2.2" />
      <motion.path
        d="M4.2 14c-1.5 1-1.8 3-.8 4.2 1 1 2.8.8 3.8-.4"
        animate={hovered ? { rotate: [0, -18, 12, 0] } : { rotate: 0 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "6px", originY: "15px" }}
      />
      <motion.path
        d="M19.8 14c1.5 1 1.8 3 .8 4.2-1 1-2.8.8-3.8-.4"
        animate={hovered ? { rotate: [0, 18, -12, 0] } : { rotate: 0 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "18px", originY: "15px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "deepseek",
    name: "DeepSeek",
    category: "Logos",
    tags: ["ai", "whale", "deepseek", "r1", "llm", "mascot", "logo"],
    brandColor: "#1E50FF",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M3 13.5c0-4.2 3.8-8 8.8-8 3.5 0 6.2 1.5 7.8 4 1 .2 2.2-.2 2.9-.8-.2 1.5-.8 2.8-1.8 3.5.5 1.5 1.8 2.8 2.8 3.2-1.5.5-3.2.2-4.2-.8-1.5 1.2-3.8 2-6.5 2C6.8 16.6 3 15.5 3 13.5z"
          animate={
            active && !reduceMotion
              ? { y: [0, -2, 0], rotate: [0, -4, 2, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 0.52, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "13px" }}
        />
        <motion.path
          d="M8.5 15.5c-1 1.5-2.2 2.8-3.5 3.2 0-1.5.8-3 1.8-4"
          animate={active && !reduceMotion ? { rotate: [0, -10, 8, 0] } : { rotate: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "6.8px", originY: "15px" }}
        />
        <circle cx="7.2" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function DeepSeekIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M3 13.5c0-4.2 3.8-8 8.8-8 3.5 0 6.2 1.5 7.8 4 1 .2 2.2-.2 2.9-.8-.2 1.5-.8 2.8-1.8 3.5.5 1.5 1.8 2.8 2.8 3.2-1.5.5-3.2.2-4.2-.8-1.5 1.2-3.8 2-6.5 2C6.8 16.6 3 15.5 3 13.5z"
        animate={hovered ? { y: [0, -2, 0], rotate: [0, -4, 2, 0] } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "13px" }}
      />
      <motion.path
        d="M8.5 15.5c-1 1.5-2.2 2.8-3.5 3.2 0-1.5.8-3 1.8-4"
        animate={hovered ? { rotate: [0, -10, 8, 0] } : { rotate: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "6.8px", originY: "15px" }}
      />
      <circle cx="7.2" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}`,
  },

  {
    id: "midjourney",
    name: "Midjourney",
    category: "Logos",
    tags: ["ai", "art", "creative", "sail", "boat", "logo"],
    brandColor: "#111113",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 3.5C14.8 7.5 16.5 11.5 16.5 15.5H6.5C8 11.5 10 7.5 12 3.5z"
          animate={active && !reduceMotion ? { skewX: [0, -6, 4, 0] } : { skewX: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "15px" }}
        />
        <motion.path
          d="M17 7.5c2.2 2.5 3 5.5 3 8h-3.5"
          animate={active && !reduceMotion ? { x: [0, 1.5, 0] } : { x: 0 }}
          transition={{ duration: 0.44, delay: 0.06, ease: EASE_OUT }}
        />
        <path d="M3 18.5c2.2 1.2 4.5 1.2 6.5 0 2 1.2 4.5 1.2 6.5 0 2 1.2 4 1.2 5 0" />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MidjourneyIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12 3.5C14.8 7.5 16.5 11.5 16.5 15.5H6.5C8 11.5 10 7.5 12 3.5z"
        animate={hovered ? { skewX: [0, -6, 4, 0] } : { skewX: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "15px" }}
      />
      <motion.path
        d="M17 7.5c2.2 2.5 3 5.5 3 8h-3.5"
        animate={hovered ? { x: [0, 1.5, 0] } : { x: 0 }}
        transition={{ duration: 0.44, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}
      />
      <path d="M3 18.5c2.2 1.2 4.5 1.2 6.5 0 2 1.2 4.5 1.2 6.5 0 2 1.2 4 1.2 5 0" />
    </svg>
  );
}`,
  },

  {
    id: "cursor",
    name: "Cursor",
    category: "Logos",
    tags: ["ai", "ide", "code", "cube", "editor", "isometric", "logo"],
    brandColor: "#111113",
    render: ({ active, size, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 467 532"
        fill="currentColor"
      >
        <motion.path
          d="M457.43 125.94L244.42 2.96a22.13 22.13 0 0 0-22.12 0L9.3 125.94C3.55 129.26 0 135.4 0 142.05v247.99c0 6.65 3.55 12.79 9.3 16.11l213.01 122.98a22.13 22.13 0 0 0 22.12 0l213.01-122.98c5.75-3.32 9.3-9.46 9.3-16.11V142.05c0-6.65-3.55-12.79-9.3-16.11zm-13.38 26.05L238.42 508.15c-1.39 2.4-5.06 1.42-5.06-1.36V273.58c0-4.66-2.49-8.97-6.53-11.31L24.87 145.67c-2.4-1.39-1.42-5.06 1.36-5.06h411.26c5.84 0 9.49 6.33 6.57 11.39h-.01Z"
          animate={
            active && !reduceMotion
              ? { scale: [1, 1.08, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "233px", originY: "266px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function CursorIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 467 532"
      fill="currentColor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M457.43 125.94L244.42 2.96a22.13 22.13 0 0 0-22.12 0L9.3 125.94C3.55 129.26 0 135.4 0 142.05v247.99c0 6.65 3.55 12.79 9.3 16.11l213.01 122.98a22.13 22.13 0 0 0 22.12 0l213.01-122.98c5.75-3.32 9.3-9.46 9.3-16.11V142.05c0-6.65-3.55-12.79-9.3-16.11zm-13.38 26.05L238.42 508.15c-1.39 2.4-5.06 1.42-5.06-1.36V273.58c0-4.66-2.49-8.97-6.53-11.31L24.87 145.67c-2.4-1.39-1.42-5.06 1.36-5.06h411.26c5.84 0 9.49 6.33 6.57 11.39h-.01Z"
        animate={hovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "233px", originY: "266px" }}
      />
    </svg>
  );
}`,
  },

  // === MODERN & CLASSIC COMPANY LOGOS (8) ===
  {
    id: "google",
    name: "Google",
    category: "Logos",
    tags: ["company", "search", "g", "cloud", "logo"],
    brandColor: "#4285F4",
    render: ({ active, size, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <motion.path
          d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989Z"
          animate={active && !reduceMotion ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function GoogleIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989Z"
        animate={hovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "apple",
    name: "Apple",
    category: "Logos",
    tags: ["company", "ios", "macos", "hardware", "cupertino", "bite", "logo"],
    brandColor: "#111113",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 20.9c1.4 0 2.3 1.1 3.8 1.1 2.2 0 4.2-4.2 4.9-6.8-1.8-.8-2.5-2.7-2.4-4.2.1-1.8 1.2-3.2 2.3-3.8-1.1-2-3-2.2-3.8-2.2-2 0-3.4 1.2-4.8 1.2s-2.8-1.2-4.8-1.2C4.5 5 2 7.5 2 11.5c0 4.5 2.8 10.5 6.2 10.5 1.4 0 2.4-1.1 3.8-1.1z"
          animate={active && !reduceMotion ? { scale: [1, 0.95, 1.04, 1] } : { scale: 1 }}
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "13px" }}
        />
        <motion.path
          d="M12 5c.5-1.5 1.8-2.5 3.5-2.5.2 1.5-.8 2.8-2 3.2"
          animate={active && !reduceMotion ? { rotate: [0, 18, -10, 0] } : { rotate: 0 }}
          transition={{ duration: 0.46, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "5px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function AppleIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12 20.9c1.4 0 2.3 1.1 3.8 1.1 2.2 0 4.2-4.2 4.9-6.8-1.8-.8-2.5-2.7-2.4-4.2.1-1.8 1.2-3.2 2.3-3.8-1.1-2-3-2.2-3.8-2.2-2 0-3.4 1.2-4.8 1.2s-2.8-1.2-4.8-1.2C4.5 5 2 7.5 2 11.5c0 4.5 2.8 10.5 6.2 10.5 1.4 0 2.4-1.1 3.8-1.1z"
        animate={hovered ? { scale: [1, 0.95, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "13px" }}
      />
      <motion.path
        d="M12 5c.5-1.5 1.8-2.5 3.5-2.5.2 1.5-.8 2.8-2 3.2"
        animate={hovered ? { rotate: [0, 18, -10, 0] } : { rotate: 0 }}
        transition={{ duration: 0.46, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "5px" }}
      />
    </svg>
  );
}`,
  },

  {
    id: "microsoft",
    name: "Microsoft",
    category: "Logos",
    tags: ["company", "windows", "azure", "office", "logo"],
    brandColor: "#00A4EF",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          x="3.5"
          y="3.5"
          width="7.5"
          height="7.5"
          rx="1"
          animate={active && !reduceMotion ? { x: [0, -1.2, 0], y: [0, -1.2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
        <motion.rect
          x="13"
          y="3.5"
          width="7.5"
          height="7.5"
          rx="1"
          animate={active && !reduceMotion ? { x: [0, 1.2, 0], y: [0, -1.2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
        <motion.rect
          x="3.5"
          y="13"
          width="7.5"
          height="7.5"
          rx="1"
          animate={active && !reduceMotion ? { x: [0, -1.2, 0], y: [0, 1.2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
        <motion.rect
          x="13"
          y="13"
          width="7.5"
          height="7.5"
          rx="1"
          animate={active && !reduceMotion ? { x: [0, 1.2, 0], y: [0, 1.2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MicrosoftIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1" animate={hovered ? { x: [0, -1.2, 0], y: [0, -1.2, 0] } : { x: 0, y: 0 }} transition={{ duration: 0.42 }} />
      <motion.rect x="13" y="3.5" width="7.5" height="7.5" rx="1" animate={hovered ? { x: [0, 1.2, 0], y: [0, -1.2, 0] } : { x: 0, y: 0 }} transition={{ duration: 0.42 }} />
      <motion.rect x="3.5" y="13" width="7.5" height="7.5" rx="1" animate={hovered ? { x: [0, -1.2, 0], y: [0, 1.2, 0] } : { x: 0, y: 0 }} transition={{ duration: 0.42 }} />
      <motion.rect x="13" y="13" width="7.5" height="7.5" rx="1" animate={hovered ? { x: [0, 1.2, 0], y: [0, 1.2, 0] } : { x: 0, y: 0 }} transition={{ duration: 0.42 }} />
    </svg>
  );
}`,
  },

  {
    id: "meta",
    name: "Meta",
    category: "Logos",
    tags: ["company", "facebook", "infinity", "m", "quest", "logo"],
    brandColor: "#0668E1",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 13.5c-2.4 3.5-4.5 4.5-6.2 4.5-2.8 0-4.3-2.2-4.3-5.5 0-3.8 2.4-6.5 5.5-6.5 2.8 0 4.2 2.2 5 3.8.8-1.6 2.2-3.8 5-3.8 3.1 0 5.5 2.7 5.5 6.5 0 3.3-1.5 5.5-4.3 5.5-1.7 0-3.8-1-6.2-4.5z"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MetaIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12 13.5c-2.4 3.5-4.5 4.5-6.2 4.5-2.8 0-4.3-2.2-4.3-5.5 0-3.8 2.4-6.5 5.5-6.5 2.8 0 4.2 2.2 5 3.8.8-1.6 2.2-3.8 5-3.8 3.1 0 5.5 2.7 5.5 6.5 0 3.3-1.5 5.5-4.3 5.5-1.7 0-3.8-1-6.2-4.5z"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  {
    id: "ibm",
    name: "IBM Classic",
    category: "Logos",
    tags: ["old", "classic", "retro", "paul rand", "8-bar", "mainframe", "logo"],
    brandColor: "#1F70C1",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={Math.max(1.2, strokeWidth * 0.75)}
        strokeLinecap="round"
      >
        {[
          { y: 5.5, d: "M2.5 5.5H6.5M8 5.5H13.5M15 5.5H16.5M20.5 5.5H22" },
          { y: 7.0, d: "M3.8 7H5.2M8 7H9.4M12 7H13.5M15 7H16.5M17.8 7H19.2M20.5 7H22" },
          { y: 8.5, d: "M3.8 8.5H5.2M8 8.5H9.4M12.2 8.5H13.7M15 8.5H16.5M17.8 8.5H19.2M20.5 8.5H22" },
          { y: 10.0, d: "M3.8 10H5.2M8 10H13M15 10H16.5M17.5 10H19.5M20.5 10H22" },
          { y: 11.5, d: "M3.8 11.5H5.2M8 11.5H13M15 11.5H16.5M17.5 11.5H19.5M20.5 11.5H22" },
          { y: 13.0, d: "M3.8 13H5.2M8 13H9.4M12.2 13H13.8M15 13H16.5M20.5 13H22" },
          { y: 14.5, d: "M3.8 14.5H5.2M8 14.5H9.4M12 14.5H13.6M15 14.5H16.5M20.5 14.5H22" },
          { y: 16.0, d: "M2.5 16H6.5M8 16H13.5M14.5 16H17M20 16H22.5" },
        ].map((row, idx) => (
          <motion.path
            key={row.y}
            d={row.d}
            animate={
              active && !reduceMotion
                ? { x: [0, idx % 2 === 0 ? 1.4 : -1.4, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.42, delay: idx * 0.03, ease: EASE_OUT }}
          />
        ))}
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function IBMClassicIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);
  const rows = [
    { y: 5.5, d: "M2.5 5.5H6.5M8 5.5H13.5M15 5.5H16.5M20.5 5.5H22" },
    { y: 7.0, d: "M3.8 7H5.2M8 7H9.4M12 7H13.5M15 7H16.5M17.8 7H19.2M20.5 7H22" },
    { y: 8.5, d: "M3.8 8.5H5.2M8 8.5H9.4M12.2 8.5H13.7M15 8.5H16.5M17.8 8.5H19.2M20.5 8.5H22" },
    { y: 10.0, d: "M3.8 10H5.2M8 10H13M15 10H16.5M17.5 10H19.5M20.5 10H22" },
    { y: 11.5, d: "M3.8 11.5H5.2M8 11.5H13M15 11.5H16.5M17.5 11.5H19.5M20.5 11.5H22" },
    { y: 13.0, d: "M3.8 13H5.2M8 13H9.4M12.2 13H13.8M15 13H16.5M20.5 13H22" },
    { y: 14.5, d: "M3.8 14.5H5.2M8 14.5H9.4M12 14.5H13.6M15 14.5H16.5M20.5 14.5H22" },
    { y: 16.0, d: "M2.5 16H6.5M8 16H13.5M14.5 16H17M20 16H22.5" },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {rows.map((row, idx) => (
        <motion.path
          key={row.y}
          d={row.d}
          animate={hovered ? { x: [0, idx % 2 === 0 ? 1.4 : -1.4, 0] } : { x: 0 }}
          transition={{ duration: 0.42, delay: idx * 0.03, ease: [0.23, 1, 0.32, 1] }}
        />
      ))}
    </svg>
  );
}`,
  },

  {
    id: "atari",
    name: "Atari Classic",
    category: "Logos",
    tags: ["old", "classic", "retro", "fuji", "arcade", "gaming", "logo"],
    brandColor: "#E4002B",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.5v17" />
        <motion.path
          d="M8.5 3.5c0 6.5-1.8 12.5-6.5 17m0 0h4.5"
          animate={active && !reduceMotion ? { x: [0, -1.5, 0] } : { x: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
        <motion.path
          d="M15.5 3.5c0 6.5 1.8 12.5 6.5 17m0 0h-4.5"
          animate={active && !reduceMotion ? { x: [0, 1.5, 0] } : { x: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function AtariClassicIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path d="M12 3.5v17" />
      <motion.path
        d="M8.5 3.5c0 6.5-1.8 12.5-6.5 17m0 0h4.5"
        animate={hovered ? { x: [0, -1.5, 0] } : { x: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M15.5 3.5c0 6.5 1.8 12.5 6.5 17m0 0h-4.5"
        animate={hovered ? { x: [0, 1.5, 0] } : { x: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  {
    id: "nintendo-dpad",
    name: "Retro D-Pad",
    category: "Logos",
    tags: ["old", "classic", "nintendo", "nes", "controller", "gaming", "logo"],
    brandColor: "#E60012",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M8.5 3.5h7v5h5v7h-5v5h-7v-5h-5v-7h5v-5z"
          animate={
            active && !reduceMotion
              ? { scale: [1, 0.94, 1.04, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 0.46, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <circle cx="12" cy="12" r="1.8" />
        <motion.path
          d="M12 5.5v1m0 11v1m-6.5-6.5h-1m14.5 0h-1"
          animate={active && !reduceMotion ? { opacity: [0.4, 1] } : { opacity: 1 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function RetroDPadIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M8.5 3.5h7v5h5v7h-5v5h-7v-5h-5v-7h5v-5z"
        animate={hovered ? { scale: [1, 0.94, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 0.46, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <circle cx="12" cy="12" r="1.8" />
      <motion.path
        d="M12 5.5v1m0 11v1m-6.5-6.5h-1m14.5 0h-1"
        initial={{ opacity: 1 }}
        animate={hovered ? { opacity: [0.4, 1] } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}`,
  },

  {
    id: "classic-phone",
    name: "Classic Bell Tel",
    category: "Logos",
    tags: ["old", "classic", "retro", "bell", "telecom", "phone", "logo"],
    brandColor: "#124191",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12 3.5c-3.8 0-6.8 3-6.8 6.8v3.2c0 .8-.5 1.5-1.2 1.8-.8.4-1.2 1.2-1.2 2 0 1.2 1 2.2 2.2 2.2h14c1.2 0 2.2-1 2.2-2.2 0-.8-.4-1.6-1.2-2-.7-.3-1.2-1-1.2-1.8v-3.2c0-3.8-3-6.8-6.8-6.8z"
          animate={
            active && !reduceMotion
              ? { rotate: [0, -10, 10, -5, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "3.5px" }}
        />
        <motion.path
          d="M10 19.5a2 2 0 0 0 4 0"
          animate={
            active && !reduceMotion
              ? { x: [0, -1.5, 1.5, 0] }
              : { x: 0 }
          }
          transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
        />
        <circle cx="12" cy="11.5" r="2.2" />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function ClassicBellTelIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.path
        d="M12 3.5c-3.8 0-6.8 3-6.8 6.8v3.2c0 .8-.5 1.5-1.2 1.8-.8.4-1.2 1.2-1.2 2 0 1.2 1 2.2 2.2 2.2h14c1.2 0 2.2-1 2.2-2.2 0-.8-.4-1.6-1.2-2-.7-.3-1.2-1-1.2-1.8v-3.2c0-3.8-3-6.8-6.8-6.8z"
        animate={hovered ? { rotate: [0, -10, 10, -5, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "3.5px" }}
      />
      <motion.path
        d="M10 19.5a2 2 0 0 0 4 0"
        animate={hovered ? { x: [0, -1.5, 1.5, 0] } : { x: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
      />
      <circle cx="12" cy="11.5" r="2.2" />
    </svg>
  );
}`,
  },

  // === CHAT ICONS (8) ===
  {
    id: "chat-bubble",
    name: "Chat Bubble",
    category: "Chat",
    tags: ["chat", "message", "comment"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={active && !reduceMotion ? { scale: [1, 1.1, 0.96, 1] } : { scale: 1 }}
        transition={{ duration: 0.42, ease: EASE_OUT }}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ChatBubbleIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { scale: [1, 1.1, 0.96, 1] } : { scale: 1 }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </motion.svg>
  );
}`,
  },

  {
    id: "chat-reply",
    name: "Chat Reply",
    category: "Chat",
    tags: ["chat", "reply", "respond"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          animate={active && !reduceMotion ? { x: -2.2 } : { x: 0 }}
          transition={SPRING}
        >
          <polyline points="9 17 4 12 9 7" />
          <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ChatReplyIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.g animate={active ? { x: -2.2 } : { x: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
        <polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      </motion.g>
    </svg>
  );
}`,
  },

  {
    id: "chat-group",
    name: "Chat Group",
    category: "Chat",
    tags: ["chat", "threads", "forum"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="overflow-visible"
      >
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
        <motion.path
          d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
          animate={active && !reduceMotion ? { x: 1.5, y: 1.5 } : { x: 0, y: 0 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ChatGroupIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
      <motion.path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" animate={active ? { x: 1.5, y: 1.5 } : { x: 0, y: 0 }} />
    </svg>
  );
}`,
  },

  {
    id: "chat-read",
    name: "Chat Read",
    category: "Chat",
    tags: ["chat", "seen", "check"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M18 6 7 17l-5-5"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        />
        <motion.path
          d="m22 10-7.5 7.5L13 16"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.35, delay: 0.12, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ChatReadIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M18 6 7 17l-5-5" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.35 }} />
      <motion.path d="m22 10-7.5 7.5L13 16" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.35, delay: 0.12 }} />
    </svg>
  );
}`,
  },

  {
    id: "chat-plus",
    name: "New Chat",
    category: "Chat",
    tags: ["chat", "compose", "add"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <motion.path
          d="M12 7v6M9 10h6"
          animate={active && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 10px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function NewChatIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <motion.path d="M12 7v6M9 10h6" animate={active ? { rotate: 90 } : { rotate: 0 }} style={{ transformOrigin: "12px 10px" }} />
    </svg>
  );
}`,
  },

  {
    id: "chat-alert",
    name: "Chat Alert",
    category: "Chat",
    tags: ["chat", "warning", "unread"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <motion.g
          animate={active && !reduceMotion ? { y: [0, -1.6, 0] } : { y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <path d="M12 7v3.5" />
          <path d="M12 13.5h.01" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ChatAlertIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <motion.g animate={active ? { y: [0, -1.6, 0] } : { y: 0 }} transition={{ duration: 0.4 }}>
        <path d="M12 7v3.5M12 13.5h.01" />
      </motion.g>
    </svg>
  );
}`,
  },

  {
    id: "paperclip",
    name: "Paperclip",
    category: "Chat",
    tags: ["chat", "attach", "file"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={active && !reduceMotion ? { rotate: -14, y: -1 } : { rotate: 0, y: 0 }}
        transition={SPRING}
      >
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function PaperclipIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: -14, y: -1 } : { rotate: 0, y: 0 }}>
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </motion.svg>
  );
}`,
  },

  {
    id: "smile",
    name: "Smile",
    category: "Chat",
    tags: ["chat", "emoji", "reaction"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          d="M8 14s1.5 2 4 2 4-2 4-2"
          animate={active && !reduceMotion ? { scale: 1.15 } : { scale: 1 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 15px" }}
        />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SmileIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="10" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" />
      <motion.path d="M8 14s1.5 2 4 2 4-2 4-2" animate={active ? { scale: 1.15 } : { scale: 1 }} style={{ transformOrigin: "12px 15px" }} />
    </svg>
  );
}`,
  },

  // === FILES ICONS (8) ===
  {
    id: "file-text",
    name: "File Text",
    category: "Files",
    tags: ["file", "doc", "document"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        {[
          { d: "M10 9H8", delay: 0 },
          { d: "M16 13H8", delay: 0.08 },
          { d: "M16 17H8", delay: 0.16 },
        ].map((line) => (
          <motion.path
            key={line.d}
            d={line.d}
            animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
            transition={{ duration: 0.3, delay: line.delay, ease: EASE_OUT }}
          />
        ))}
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FileTextIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4" />
      {["M10 9H8","M16 13H8","M16 17H8"].map((d, i) => (
        <motion.path key={d} d={d} animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.3, delay: i * 0.08 }} />
      ))}
    </svg>
  );
}`,
  },

  {
    id: "file-code",
    name: "File Code",
    category: "Files",
    tags: ["file", "source", "tsx"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <motion.path
          d="m10 13-2 2 2 2"
          animate={active && !reduceMotion ? { x: -1.2 } : { x: 0 }}
          transition={SPRING}
        />
        <motion.path
          d="m14 17 2-2-2-2"
          animate={active && !reduceMotion ? { x: 1.2 } : { x: 0 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FileCodeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4" />
      <motion.path d="m10 13-2 2 2 2" animate={active ? { x: -1.2 } : { x: 0 }} />
      <motion.path d="m14 17 2-2-2-2" animate={active ? { x: 1.2 } : { x: 0 }} />
    </svg>
  );
}`,
  },

  {
    id: "file-plus",
    name: "File Plus",
    category: "Files",
    tags: ["file", "new", "create"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <motion.path
          d="M12 12v6M9 15h6"
          animate={active && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 15px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FilePlusIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4" />
      <motion.path d="M12 12v6M9 15h6" animate={active ? { rotate: 90 } : { rotate: 0 }} style={{ transformOrigin: "12px 15px" }} />
    </svg>
  );
}`,
  },

  {
    id: "file-check",
    name: "File Check",
    category: "Files",
    tags: ["file", "verified", "done"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <motion.path
          d="m9 15 2 2 4-4"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.38, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FileCheckIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4" />
      <motion.path d="m9 15 2 2 4-4" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.38 }} />
    </svg>
  );
}`,
  },

  {
    id: "file-zip",
    name: "File Zip",
    category: "Files",
    tags: ["file", "archive", "compress"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <motion.path
          d="M10 12h.01M10 15h.01M10 18h.01"
          animate={active && !reduceMotion ? { y: [0, -1.5, 0] } : { y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FileZipIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4" />
      <motion.path d="M10 12h.01M10 15h.01M10 18h.01" animate={active ? { y: [0, -1.5, 0] } : { y: 0 }} />
    </svg>
  );
}`,
  },

  {
    id: "folder-open",
    name: "Folder Open",
    category: "Files",
    tags: ["folder", "browse", "directory"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
        <motion.path
          d="M8 15h8"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FolderOpenIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
      <motion.path d="M8 15h8" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} />
    </svg>
  );
}`,
  },

  {
    id: "folder-plus",
    name: "Folder Plus",
    category: "Files",
    tags: ["folder", "new", "directory"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        <motion.path
          d="M12 10v6M9 13h6"
          animate={active && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 13px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FolderPlusIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <motion.path d="M12 10v6M9 13h6" animate={active ? { rotate: 90 } : { rotate: 0 }} style={{ transformOrigin: "12px 13px" }} />
    </svg>
  );
}`,
  },

  {
    id: "archive",
    name: "Archive",
    category: "Files",
    tags: ["file", "box", "store"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="overflow-visible"
      >
        <motion.rect
          width="20"
          height="5"
          x="2"
          y="3"
          rx="1"
          animate={active && !reduceMotion ? { y: -2 } : { y: 0 }}
          transition={SPRING}
        />
        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
        <path d="M10 12h4" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ArchiveIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.rect width="20" height="5" x="2" y="3" rx="1" animate={active ? { y: -2 } : { y: 0 }} />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4" />
    </svg>
  );
}`,
  },
];
