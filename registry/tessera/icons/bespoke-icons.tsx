"use client";

import React from "react";
import { motion } from "motion/react";

export type BespokeCategory =
  | "Social"
  | "Logos"
  | "Interface"
  | "Chat"
  | "Files"
  | "Media"
  | "Dev";

export interface BespokeIconProps {
  active: boolean;
  size: number;
  strokeWidth: number;
  reduceMotion: boolean;
}

export interface BespokeIconDef {
  id: string;
  name: string;
  category: BespokeCategory;
  tags: string[];
  brandColor?: string;
  render: (props: BespokeIconProps) => React.ReactNode;
  code: string;
}

const SPRING = { type: "spring" as const, stiffness: 380, damping: 24 };
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const BESPOKE_CATEGORIES: readonly ("All" | BespokeCategory)[] = [
  "All",
  "Social",
  "Logos",
  "Chat",
  "Files",
  "Interface",
  "Media",
  "Dev",
] as const;

export const BESPOKE_ICONS: BespokeIconDef[] = [
  // 1. OpenAI — 6 interlocking petals bloom outward from a single center point & swirl into the knot
  {
    id: "openai",
    name: "OpenAI",
    category: "Logos",
    tags: ["chatgpt", "ai", "llm", "logo"],
    brandColor: "#111113",
    render: ({ active, size, strokeWidth, reduceMotion }) => {
      const petals = [0, 60, 120, 180, 240, 300];
      return (
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={Math.max(1.2, strokeWidth * 0.75)}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={active && !reduceMotion ? { rotate: 60 } : { rotate: 0 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          {petals.map((deg, idx) => (
            <motion.g
              key={deg}
              style={{ transformOrigin: "12px 12px" }}
              initial={{ scale: 1, opacity: 1 }}
              animate={
                active && !reduceMotion
                  ? {
                      scale: [0.25, 1.06, 1],
                      opacity: [0.3, 1, 1],
                    }
                  : { scale: 1, opacity: 1 }
              }
              transition={{
                duration: 0.52,
                delay: idx * 0.035,
                ease: EASE_OUT,
              }}
            >
              <g transform={`rotate(${deg} 12 12)`}>
                <path d="M12 12V6.6a3.1 3.1 0 0 1 5.3-2.2l1.1 1.1a3.1 3.1 0 0 1-2.2 5.3H12" />
              </g>
            </motion.g>
          ))}
        </motion.svg>
      );
    },
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function OpenAIIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const petals = [0, 60, 120, 180, 240, 300];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      animate={active ? { rotate: 60 } : { rotate: 0 }}
      transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
    >
      {petals.map((deg, idx) => (
        <motion.g
          key={deg}
          style={{ transformOrigin: "12px 12px" }}
          initial={{ scale: 1, opacity: 1 }} animate={active ? { scale: [0.25, 1.06, 1], opacity: [0.3, 1, 1] } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.52, delay: idx * 0.035, ease: [0.23, 1, 0.32, 1] }}
        >
          <g transform={\`rotate(\${deg} 12 12)\`}>
            <path d="M12 12V6.6a3.1 3.1 0 0 1 5.3-2.2l1.1 1.1a3.1 3.1 0 0 1-2.2 5.3H12" />
          </g>
        </motion.g>
      ))}
    </motion.svg>
  );
}`,
  },

  // 2. React — 3 orbital ellipses draw & rotate independently while the nucleus pulses
  {
    id: "react",
    name: "React",
    category: "Logos",
    tags: ["frontend", "library", "logo"],
    brandColor: "#149ECA",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={Math.max(1.2, strokeWidth * 0.8)}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="1.75"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scale: [1, 1.45, 1] } : { scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
        {[0, 60, 120].map((angle, i) => (
          <motion.ellipse
            key={angle}
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.9"
            transform={`rotate(${angle} 12 12)`}
            animate={
              active && !reduceMotion
                ? { rotate: [angle, angle + 180], pathLength: [0.3, 1] }
                : { rotate: angle, pathLength: 1 }
            }
            transition={{ duration: 0.7, delay: i * 0.06, ease: EASE_OUT }}
            style={{ transformOrigin: "12px 12px" }}
          />
        ))}
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ReactIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="1.75"
        fill="currentColor"
        stroke="none"
        animate={active ? { scale: [1, 1.45, 1] } : { scale: 1 }}
        style={{ transformOrigin: "12px 12px" }}
      />
      {[0, 60, 120].map((angle, i) => (
        <motion.ellipse
          key={angle}
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.9"
          animate={active ? { rotate: [angle, angle + 180], pathLength: [0.3, 1] } : { rotate: angle, pathLength: 1 }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: "12px 12px" }}
        />
      ))}
    </svg>
  );
}`,
  },

  // 3. Figma — 5 distinct geometric blocks separate & snap back into the F mark
  {
    id: "figma",
    name: "Figma",
    category: "Logos",
    tags: ["design", "ui", "logo"],
    brandColor: "#F24E1E",
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
        <motion.path
          d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
          animate={active && !reduceMotion ? { x: [-2.5, 0], y: [-2, 0] } : { x: 0, y: 0 }}
          transition={SPRING}
        />
        <motion.path
          d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
          animate={active && !reduceMotion ? { x: [2.5, 0], y: [-2, 0] } : { x: 0, y: 0 }}
          transition={{ ...SPRING, delay: 0.04 }}
        />
        <motion.path
          d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
          animate={active && !reduceMotion ? { x: [3, 0], scale: [0.8, 1] } : { x: 0, scale: 1 }}
          transition={{ ...SPRING, delay: 0.08 }}
          style={{ transformOrigin: "15.5px 12.5px" }}
        />
        <motion.path
          d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
          animate={active && !reduceMotion ? { x: [-3, 0] } : { x: 0 }}
          transition={{ ...SPRING, delay: 0.12 }}
        />
        <motion.path
          d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
          animate={active && !reduceMotion ? { x: [-2, 0], y: [2.5, 0] } : { x: 0, y: 0 }}
          transition={{ ...SPRING, delay: 0.16 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FigmaIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="overflow-visible"
    >
      <motion.path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" animate={active ? { x: [-2.5, 0], y: [-2, 0] } : { x: 0, y: 0 }} transition={spring} />
      <motion.path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" animate={active ? { x: [2.5, 0], y: [-2, 0] } : { x: 0, y: 0 }} transition={{ ...spring, delay: 0.04 }} />
      <motion.path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" animate={active ? { x: [3, 0], scale: [0.8, 1] } : { x: 0, scale: 1 }} transition={{ ...spring, delay: 0.08 }} />
      <motion.path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" animate={active ? { x: [-3, 0] } : { x: 0 }} transition={{ ...spring, delay: 0.12 }} />
      <motion.path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" animate={active ? { x: [-2, 0], y: [2.5, 0] } : { x: 0, y: 0 }} transition={{ ...spring, delay: 0.16 }} />
    </svg>
  );
}`,
  },

  // 4. Vercel — triangle unfolds from apex down to base & snaps crisp
  {
    id: "vercel",
    name: "Vercel",
    category: "Logos",
    tags: ["deploy", "triangle", "logo"],
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
          d="M12 4L21 19.5H3L12 4Z"
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1], y: [2, 0] }
              : { pathLength: 1, y: 0 }
          }
          transition={{ duration: 0.5, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function VercelIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M12 4L21 19.5H3L12 4Z" animate={active ? { pathLength: [0, 1], y: [2, 0] } : { pathLength: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} />
    </svg>
  );
}`,
  },

  // 5. Bell — swings from top pivot while clapper swings with a phase delay
  {
    id: "bell",
    name: "Bell",
    category: "Interface",
    tags: ["notification", "alert", "ring"],
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
        <motion.path
          d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
          animate={
            active && !reduceMotion
              ? { rotate: [0, -14, 12, -8, 4, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.6, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 3px" }}
        />
        <motion.path
          d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
          animate={
            active && !reduceMotion
              ? { x: [0, 2.2, -2, 1.2, -0.6, 0] }
              : { x: 0 }
          }
          transition={{ duration: 0.6, delay: 0.05, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function BellIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" animate={active ? { rotate: [0, -14, 12, -8, 4, 0] } : { rotate: 0 }} transition={{ duration: 0.6 }} style={{ transformOrigin: "12px 3px" }} />
      <motion.path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" animate={active ? { x: [0, 2.2, -2, 1.2, -0.6, 0] } : { x: 0 }} transition={{ duration: 0.6, delay: 0.05 }} />
    </svg>
  );
}`,
  },

  // 6. Lock — shackle lifts cleanly while body stays planted
  {
    id: "lock",
    name: "Lock",
    category: "Interface",
    tags: ["security", "auth", "unlock"],
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
        <motion.path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          animate={active && !reduceMotion ? { y: -2.8 } : { y: 0 }}
          transition={SPRING}
        />
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function LockIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M7 11V7a5 5 0 0 1 10 0v4" animate={active ? { y: -2.8 } : { y: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }} />
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    </svg>
  );
}`,
  },

  // 7. Trash — lid hinges open while inner vertical bars dip down
  {
    id: "trash",
    name: "Trash",
    category: "Interface",
    tags: ["delete", "remove", "bin"],
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
        <motion.g
          animate={
            active && !reduceMotion
              ? { y: -1.6, rotate: -14 }
              : { y: 0, rotate: 0 }
          }
          transition={SPRING}
          style={{ transformOrigin: "4px 6px" }}
        >
          <path d="M3 6h18" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </motion.g>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <motion.line
          x1="10"
          x2="10"
          y1="11"
          y2="17"
          animate={active && !reduceMotion ? { y: 1 } : { y: 0 }}
          transition={SPRING}
        />
        <motion.line
          x1="14"
          x2="14"
          y1="11"
          y2="17"
          animate={active && !reduceMotion ? { y: 1 } : { y: 0 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function TrashIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.g animate={active ? { y: -1.6, rotate: -14 } : { y: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }} style={{ transformOrigin: "4px 6px" }}>
        <path d="M3 6h18" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </motion.g>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}`,
  },

  // 8. Scissors — top & bottom blades snip open and shut around the pivot
  {
    id: "scissors",
    name: "Scissors",
    category: "Interface",
    tags: ["cut", "trim", "edit"],
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
        <motion.g
          animate={active && !reduceMotion ? { rotate: [0, -16, 0, -12, 0] } : { rotate: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        >
          <circle cx="6" cy="6" r="3" />
          <path d="M8.12 8.12 20 20" />
        </motion.g>
        <motion.g
          animate={active && !reduceMotion ? { rotate: [0, 16, 0, 12, 0] } : { rotate: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        >
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4 8.12 15.88" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ScissorsIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.g animate={active ? { rotate: [0, -16, 0, -12, 0] } : { rotate: 0 }} transition={{ duration: 0.55 }} style={{ transformOrigin: "12px 12px" }}>
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 20 20" />
      </motion.g>
      <motion.g animate={active ? { rotate: [0, 16, 0, 12, 0] } : { rotate: 0 }} transition={{ duration: 0.55 }} style={{ transformOrigin: "12px 12px" }}>
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.12 15.88" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 9. Eye — blinks shut (scaleY) and opens smoothly
  {
    id: "eye",
    name: "Eye",
    category: "Interface",
    tags: ["view", "preview", "blink"],
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
          animate={
            active && !reduceMotion ? { scaleY: [1, 0.12, 1] } : { scaleY: 1 }
          }
          transition={{ duration: 0.36, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function EyeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.g animate={active ? { scaleY: [1, 0.12, 1] } : { scaleY: 1 }} transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }} style={{ transformOrigin: "12px 12px" }}>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 10. Send — paper plane launches out top-right and glides back in from bottom-left
  {
    id: "send",
    name: "Send",
    category: "Interface",
    tags: ["message", "submit", "plane"],
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
        className="overflow-hidden"
      >
        <motion.g
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={
            active && !reduceMotion
              ? {
                  x: [0, 16, -16, 0],
                  y: [0, -16, 16, 0],
                  opacity: [1, 0, 0, 1],
                }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 0.65, times: [0, 0.4, 0.45, 1], ease: EASE_OUT }}
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SendIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="overflow-hidden" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.g initial={{ x: 0, y: 0, opacity: 1 }} animate={active ? { x: [0, 16, -16, 0], y: [0, -16, 16, 0], opacity: [1, 0, 0, 1] } : { x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.65, times: [0, 0.4, 0.45, 1] }}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 11. Volume — sound waves ripple outward sequentially
  {
    id: "volume",
    name: "Volume",
    category: "Media",
    tags: ["audio", "sound", "speaker"],
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
        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
        <motion.path
          d="M16 9a5 5 0 0 1 0 6"
          initial={{ opacity: 1, x: 0 }} animate={active && !reduceMotion ? { opacity: [0.2, 1], x: [-1.5, 0] } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        />
        <motion.path
          d="M19.364 18.364a9 9 0 0 0 0-12.728"
          initial={{ opacity: 1, x: 0 }} animate={active && !reduceMotion ? { opacity: [0.2, 1], x: [-2, 0] } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function VolumeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <motion.path d="M16 9a5 5 0 0 1 0 6" initial={{ opacity: 1, x: 0 }} animate={active ? { opacity: [0.2, 1], x: [-1.5, 0] } : { opacity: 1, x: 0 }} transition={{ duration: 0.3 }} />
      <motion.path d="M19.364 18.364a9 9 0 0 0 0-12.728" initial={{ opacity: 1, x: 0 }} animate={active ? { opacity: [0.2, 1], x: [-2, 0] } : { opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.1 }} />
    </svg>
  );
}`,
  },

  // 12. Wifi — signal arcs pulse sequentially from dot outward
  {
    id: "wifi",
    name: "Wifi",
    category: "Media",
    tags: ["signal", "network", "wireless"],
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
        <path d="M12 20h.01" />
        <motion.path
          d="M8.5 16.429a5 5 0 0 1 7 0"
          initial={{ opacity: 1 }} animate={active && !reduceMotion ? { opacity: [0.15, 1] } : { opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.04 }}
        />
        <motion.path
          d="M5 12.859a10 10 0 0 1 14 0"
          initial={{ opacity: 1 }} animate={active && !reduceMotion ? { opacity: [0.15, 1] } : { opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.12 }}
        />
        <motion.path
          d="M2 8.82a15 15 0 0 1 20 0"
          initial={{ opacity: 1 }} animate={active && !reduceMotion ? { opacity: [0.15, 1] } : { opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function WifiIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M12 20h.01" />
      <motion.path d="M8.5 16.429a5 5 0 0 1 7 0" initial={{ opacity: 1 }} animate={active ? { opacity: [0.15, 1] } : { opacity: 1 }} transition={{ duration: 0.25, delay: 0.04 }} />
      <motion.path d="M5 12.859a10 10 0 0 1 14 0" initial={{ opacity: 1 }} animate={active ? { opacity: [0.15, 1] } : { opacity: 1 }} transition={{ duration: 0.25, delay: 0.12 }} />
      <motion.path d="M2 8.82a15 15 0 0 1 20 0" initial={{ opacity: 1 }} animate={active ? { opacity: [0.15, 1] } : { opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }} />
    </svg>
  );
}`,
  },

  // 13. Terminal — chevron nudges right while cursor blinks
  {
    id: "terminal",
    name: "Terminal",
    category: "Dev",
    tags: ["cli", "bash", "code"],
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
        <motion.polyline
          points="4 17 10 11 4 5"
          animate={active && !reduceMotion ? { x: [0, 2, 0] } : { x: 0 }}
          transition={{ duration: 0.38, ease: EASE_OUT }}
        />
        <motion.line
          x1="12"
          x2="20"
          y1="19"
          y2="19"
          initial={{ opacity: 1 }}
          animate={
            active && !reduceMotion ? { opacity: [1, 0, 1, 0, 1] } : { opacity: 1 }
          }
          transition={{ duration: 0.7 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function TerminalIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.polyline points="4 17 10 11 4 5" animate={active ? { x: [0, 2, 0] } : { x: 0 }} />
      <motion.line x1="12" x2="20" y1="19" y2="19" initial={{ opacity: 1 }} animate={active ? { opacity: [1, 0, 1, 0, 1] } : { opacity: 1 }} transition={{ duration: 0.7 }} />
    </svg>
  );
}`,
  },

  // 14. Download — arrow drops into tray & tray absorbs bounce
  {
    id: "download",
    name: "Download",
    category: "Dev",
    tags: ["save", "export", "file"],
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
        <motion.path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          animate={active && !reduceMotion ? { y: [0, 1.5, 0] } : { y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
        />
        <motion.g
          animate={active && !reduceMotion ? { y: [0, 3, 0] } : { y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        >
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function DownloadIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" animate={active ? { y: [0, 1.5, 0] } : { y: 0 }} transition={{ duration: 0.4, delay: 0.12 }} />
      <motion.g animate={active ? { y: [0, 3, 0] } : { y: 0 }} transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 15. Upload — arrow launches upward out of the tray
  {
    id: "upload",
    name: "Upload",
    category: "Dev",
    tags: ["push", "deploy", "cloud"],
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <motion.g
          animate={active && !reduceMotion ? { y: [0, -3.5, 0] } : { y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        >
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function UploadIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <motion.g animate={active ? { y: [0, -3.5, 0] } : { y: 0 }} transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 16. Mail — envelope flap opens cleanly
  {
    id: "mail",
    name: "Mail",
    category: "Interface",
    tags: ["email", "inbox", "message"],
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <motion.path
          d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
          animate={active && !reduceMotion ? { scaleY: -0.75, y: -1 } : { scaleY: 1, y: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 6px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function MailIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <motion.path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" animate={active ? { scaleY: -0.75, y: -1 } : { scaleY: 1, y: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }} style={{ transformOrigin: "12px 6px" }} />
    </svg>
  );
}`,
  },

  // 17. Sparkles — main star rotates while satellite stars twinkle out of phase
  {
    id: "sparkles",
    name: "Sparkles",
    category: "Media",
    tags: ["ai", "magic", "stars"],
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
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
          animate={active && !reduceMotion ? { scale: [1, 1.12, 1], rotate: [0, 15, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
        <motion.path
          d="M20 3v4M22 5h-4"
          initial={{ scale: 1, opacity: 1 }} animate={active && !reduceMotion ? { scale: [0.4, 1.3, 1], opacity: [0.3, 1, 1] } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{ transformOrigin: "20px 5px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SparklesIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" animate={active ? { scale: [1, 1.12, 1], rotate: [0, 15, 0] } : { scale: 1, rotate: 0 }} style={{ transformOrigin: "12px 12px" }} />
      <motion.path d="M20 3v4M22 5h-4" animate={active ? { scale: [0.4, 1.3, 1] } : { scale: 1 }} transition={{ delay: 0.1 }} style={{ transformOrigin: "20px 5px" }} />
    </svg>
  );
}`,
  },

  // 18. Heart — double-beat lub-dub pulse
  {
    id: "heart",
    name: "Heart",
    category: "Media",
    tags: ["like", "favorite", "love"],
    brandColor: "#E11D48",
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
        animate={
          active && !reduceMotion
            ? { scale: [1, 1.22, 0.96, 1.14, 1] }
            : { scale: 1 }
        }
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function HeartIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { scale: [1, 1.22, 0.96, 1.14, 1] } : { scale: 1 }} transition={{ duration: 0.55 }}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </motion.svg>
  );
}`,
  },
];
