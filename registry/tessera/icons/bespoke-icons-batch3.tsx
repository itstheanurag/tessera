"use client";

import React from "react";
import { motion } from "motion/react";
import type { BespokeIconDef } from "./bespoke-icons";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 24 };
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const BESPOKE_ICONS_BATCH3: BespokeIconDef[] = [
  // 43. Anthropic — twin diagonal strokes converge cleanly
  {
    id: "anthropic",
    name: "Anthropic",
    category: "Logos",
    tags: ["claude", "ai", "logo"],
    brandColor: "#D97757",
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
          d="M6 19 10.5 5 15 19M7.6 14.2h5.8"
          animate={active && !reduceMotion ? { x: [-2, 0] } : { x: 0 }}
          transition={SPRING}
        />
        <motion.path
          d="M14.5 5 19 19"
          animate={active && !reduceMotion ? { x: [2.5, 0] } : { x: 0 }}
          transition={{ ...SPRING, delay: 0.06 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function AnthropicIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M6 19 10.5 5 15 19M7.6 14.2h5.8" animate={active ? { x: [-2, 0] } : { x: 0 }} transition={spring} />
      <motion.path d="M14.5 5 19 19" animate={active ? { x: [2.5, 0] } : { x: 0 }} transition={{ ...spring, delay: 0.06 }} />
    </svg>
  );
}`,
  },

  // 44. GitHub — stroked silhouette with wagging tail
  {
    id: "github",
    name: "GitHub",
    category: "Logos",
    tags: ["git", "repo", "logo"],
    brandColor: "#181717",
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <motion.path
          d="M9 18c-4.51 2-5-2-7-2"
          animate={active && !reduceMotion ? { rotate: [0, -14, 12, -6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          style={{ transformOrigin: "9px 18px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function GitHubIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <motion.path d="M9 18c-4.51 2-5-2-7-2" animate={active ? { rotate: [0, -14, 12, -6, 0] } : { rotate: 0 }} transition={{ duration: 0.55 }} style={{ transformOrigin: "9px 18px" }} />
    </svg>
  );
}`,
  },

  // 45. Discord — eyes blink playfully inside controller frame
  {
    id: "discord",
    name: "Discord",
    category: "Logos",
    tags: ["chat", "community", "logo"],
    brandColor: "#5865F2",
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
        <path d="M8.5 7.5c2.2-.6 4.8-.6 7 0l1.2-1.5c1.6.6 2.8 1.4 3.6 2.4 1.2 3.1 1.4 6.5.8 9.6-1.5 1.1-3.2 1.8-5 2.1l-1-1.6c-2 .5-4.2.5-6.2 0l-1 1.6c-1.8-.3-3.5-1-5-2.1-.6-3.1-.4-6.5.8-9.6.8-1 2-1.8 3.6-2.4l1.2 1.5Z" />
        <motion.circle
          cx="9.2"
          cy="13"
          r="1.1"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.34, ease: EASE_OUT }}
          style={{ transformOrigin: "9.2px 13px" }}
        />
        <motion.circle
          cx="14.8"
          cy="13"
          r="1.1"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.34, ease: EASE_OUT }}
          style={{ transformOrigin: "14.8px 13px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function DiscordIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M8.5 7.5c2.2-.6 4.8-.6 7 0l1.2-1.5c1.6.6 2.8 1.4 3.6 2.4 1.2 3.1 1.4 6.5.8 9.6-1.5 1.1-3.2 1.8-5 2.1l-1-1.6c-2 .5-4.2.5-6.2 0l-1 1.6c-1.8-.3-3.5-1-5-2.1-.6-3.1-.4-6.5.8-9.6.8-1 2-1.8 3.6-2.4l1.2 1.5Z" />
      <motion.circle cx="9.2" cy="13" r="1.1" fill="currentColor" stroke="none" animate={active ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }} transition={{ duration: 0.34 }} style={{ transformOrigin: "9.2px 13px" }} />
      <motion.circle cx="14.8" cy="13" r="1.1" fill="currentColor" stroke="none" animate={active ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }} transition={{ duration: 0.34 }} style={{ transformOrigin: "14.8px 13px" }} />
    </svg>
  );
}`,
  },

  // 46. YouTube — play triangle shifts & pulses inside rounded frame
  {
    id: "youtube",
    name: "YouTube",
    category: "Logos",
    tags: ["video", "stream", "logo"],
    brandColor: "#FF0000",
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
        <rect width="20" height="14" x="2" y="5" rx="4" />
        <motion.polygon
          points="10 9 15.5 12 10 15 10 9"
          animate={active && !reduceMotion ? { scale: 1.15, x: 0.8 } : { scale: 1, x: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function YouTubeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="20" height="14" x="2" y="5" rx="4" />
      <motion.polygon points="10 9 15.5 12 10 15 10 9" animate={active ? { scale: 1.15, x: 0.8 } : { scale: 1, x: 0 }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 47. Spotify — 3 curved audio arcs ripple upward sequentially
  {
    id: "spotify",
    name: "Spotify",
    category: "Logos",
    tags: ["music", "audio", "logo"],
    brandColor: "#1DB954",
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="9.5" />
        <motion.path
          d="M8.5 15.2c2.2-.7 4.8-.5 6.8.5"
          initial={{ opacity: 1, y: 0 }} animate={active && !reduceMotion ? { opacity: [0.25, 1], y: [0.8, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
        />
        <motion.path
          d="M7.6 12.2c2.8-.9 6.2-.6 8.8.7"
          initial={{ opacity: 1, y: 0 }} animate={active && !reduceMotion ? { opacity: [0.25, 1], y: [0.8, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.08, ease: EASE_OUT }}
        />
        <motion.path
          d="M6.8 9.2c3.5-1 7.6-.7 10.6.9"
          initial={{ opacity: 1, y: 0 }} animate={active && !reduceMotion ? { opacity: [0.25, 1], y: [0.8, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.16, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SpotifyIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="9.5" />
      <motion.path d="M8.5 15.2c2.2-.7 4.8-.5 6.8.5" initial={{ opacity: 1 }} animate={active ? { opacity: [0.25, 1] } : { opacity: 1 }} transition={{ duration: 0.28 }} />
      <motion.path d="M7.6 12.2c2.8-.9 6.2-.6 8.8.7" initial={{ opacity: 1 }} animate={active ? { opacity: [0.25, 1] } : { opacity: 1 }} transition={{ duration: 0.28, delay: 0.08 }} />
      <motion.path d="M6.8 9.2c3.5-1 7.6-.7 10.6.9" initial={{ opacity: 1 }} animate={active ? { opacity: [0.25, 1] } : { opacity: 1 }} transition={{ duration: 0.28, delay: 0.16 }} />
    </svg>
  );
}`,
  },

  // 48. Slack — 4 hash arms pulse radially outward & lock
  {
    id: "slack",
    name: "Slack",
    category: "Logos",
    tags: ["team", "chat", "logo"],
    brandColor: "#E01E5A",
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
        animate={active && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
        transition={SPRING}
      >
        <rect width="3" height="8" x="13" y="2" rx="1.5" />
        <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
        <rect width="3" height="8" x="8" y="14" rx="1.5" />
        <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
        <rect width="8" height="3" x="14" y="13" rx="1.5" />
        <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
        <rect width="8" height="3" x="2" y="8" rx="1.5" />
        <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SlackIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: 90 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <rect width="3" height="8" x="13" y="2" rx="1.5" /><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" /><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" /><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" /><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </motion.svg>
  );
}`,
  },

  // 49. Home — roof lifts subtly while door draws on
  {
    id: "home",
    name: "Home",
    category: "Interface",
    tags: ["house", "dashboard", "start"],
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
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <motion.path
          d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function HomeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <motion.path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.4 }} />
    </svg>
  );
}`,
  },

  // 50. User — head bounces gently above shoulders
  {
    id: "user",
    name: "User",
    category: "Interface",
    tags: ["profile", "account", "person"],
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
        <motion.circle
          cx="12"
          cy="7"
          r="4"
          animate={active && !reduceMotion ? { y: [0, -1.8, 0] } : { y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function UserIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.circle cx="12" cy="7" r="4" animate={active ? { y: [0, -1.8, 0] } : { y: 0 }} transition={{ duration: 0.4 }} />
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    </svg>
  );
}`,
  },

  // 51. Key — turns cleanly like unlocking a cylinder
  {
    id: "key",
    name: "Key",
    category: "Interface",
    tags: ["auth", "token", "password"],
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
        animate={active && !reduceMotion ? { rotate: -30 } : { rotate: 0 }}
        transition={SPRING}
      >
        <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
        <path d="m21 2-9.6 9.6" />
        <circle cx="7.5" cy="15.5" r="5.5" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function KeyIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: -30 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4M21 2l-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </motion.svg>
  );
}`,
  },

  // 52. Pin — drives down-left into the surface
  {
    id: "pin",
    name: "Pin",
    category: "Interface",
    tags: ["attach", "stick", "tack"],
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
        animate={active && !reduceMotion ? { x: -1.5, y: 1.5 } : { x: 0, y: 0 }}
        transition={SPRING}
      >
        <path d="M12 17v5" />
        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function PinIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { x: -1.5, y: 1.5 } : { x: 0, y: 0 }}>
      <path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </motion.svg>
  );
}`,
  },

  // 53. Filter — funnel traces smoothly downward
  {
    id: "filter",
    name: "Filter",
    category: "Interface",
    tags: ["sort", "funnel", "refine"],
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
        <motion.polygon
          points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1], y: [0, 1, 0] } : { pathLength: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FilterIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" animate={active ? { pathLength: [0.2, 1] } : { pathLength: 1 }} transition={{ duration: 0.45 }} />
    </svg>
  );
}`,
  },

  // 54. Layers — 3 stacked planes separate vertically & snap back
  {
    id: "layers",
    name: "Layers",
    category: "Interface",
    tags: ["stack", "design", "z-index"],
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
          d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
          animate={active && !reduceMotion ? { y: -2 } : { y: 0 }}
          transition={SPRING}
        />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        <motion.path
          d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
          animate={active && !reduceMotion ? { y: 2 } : { y: 0 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function LayersIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" animate={active ? { y: -2 } : { y: 0 }} transition={spring} />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      <motion.path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" animate={active ? { y: 2 } : { y: 0 }} transition={spring} />
    </svg>
  );
}`,
  },

  // 55. Sliders — 3 horizontal knobs slide to opposing positions
  {
    id: "sliders",
    name: "Sliders",
    category: "Interface",
    tags: ["controls", "tune", "mixer"],
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
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
        <motion.circle
          cx="8"
          cy="6"
          r="2"
          fill="white"
          animate={active && !reduceMotion ? { x: 6 } : { x: 0 }}
          transition={SPRING}
        />
        <motion.circle
          cx="16"
          cy="12"
          r="2"
          fill="white"
          animate={active && !reduceMotion ? { x: -7 } : { x: 0 }}
          transition={{ ...SPRING, delay: 0.04 }}
        />
        <motion.circle
          cx="10"
          cy="18"
          r="2"
          fill="white"
          animate={active && !reduceMotion ? { x: 5 } : { x: 0 }}
          transition={{ ...SPRING, delay: 0.08 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SlidersIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" />
      <motion.circle cx="8" cy="6" r="2" fill="white" animate={active ? { x: 6 } : { x: 0 }} transition={spring} />
      <motion.circle cx="16" cy="12" r="2" fill="white" animate={active ? { x: -7 } : { x: 0 }} transition={{ ...spring, delay: 0.04 }} />
      <motion.circle cx="10" cy="18" r="2" fill="white" animate={active ? { x: 5 } : { x: 0 }} transition={{ ...spring, delay: 0.08 }} />
    </svg>
  );
}`,
  },

  // 56. Plus — cross rotates 90deg crisply
  {
    id: "plus",
    name: "Plus",
    category: "Interface",
    tags: ["add", "create", "new"],
    render: ({ active, size, strokeWidth, reduceMotion }) => (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={active && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
        transition={SPRING}
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function PlusIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: 90 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <path d="M5 12h14M12 5v14" />
    </motion.svg>
  );
}`,
  },

  // 57. Headphones — bass pulse on earcups
  {
    id: "headphones",
    name: "Headphones",
    category: "Media",
    tags: ["audio", "listen", "music"],
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
        animate={active && !reduceMotion ? { scale: [1, 1.09, 0.96, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 0.48, ease: EASE_OUT }}
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function HeadphonesIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { scale: [1, 1.09, 0.96, 1.04, 1] } : { scale: 1 }} transition={{ duration: 0.48 }}>
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </motion.svg>
  );
}`,
  },

  // 58. Image — sun rises while mountain ridge draws cleanly
  {
    id: "image",
    name: "Image",
    category: "Media",
    tags: ["photo", "picture", "gallery"],
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
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <motion.circle
          cx="9"
          cy="9"
          r="2"
          animate={active && !reduceMotion ? { y: -1.4, scale: 1.1 } : { y: 0, scale: 1 }}
          transition={SPRING}
          style={{ transformOrigin: "9px 9px" }}
        />
        <motion.path
          d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ImageIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <motion.circle cx="9" cy="9" r="2" animate={active ? { y: -1.4 } : { y: 0 }} />
      <motion.path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.45 }} />
    </svg>
  );
}`,
  },

  // 59. Film — inner sprockets roll smoothly
  {
    id: "film",
    name: "Film",
    category: "Media",
    tags: ["video", "cinema", "reel"],
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18M17 3v18" />
        <motion.g
          animate={active && !reduceMotion ? { y: [0, -2, 0] } : { y: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        >
          <path d="M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4" />
        </motion.g>
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FilmIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18M17 3v18" />
      <motion.g animate={active ? { y: [0, -2, 0] } : { y: 0 }} transition={{ duration: 0.42 }}>
        <path d="M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 60. Thumbs Up — approves with a spring tilt upward
  {
    id: "thumbs-up",
    name: "Thumbs Up",
    category: "Media",
    tags: ["like", "approve", "upvote"],
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
        animate={active && !reduceMotion ? { rotate: -12, y: -1.5 } : { rotate: 0, y: 0 }}
        transition={SPRING}
        style={{ transformOrigin: "6px 18px" }}
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ThumbsUpIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: -12, y: -1.5 } : { rotate: 0, y: 0 }} style={{ transformOrigin: "6px 18px" }}>
      <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </motion.svg>
  );
}`,
  },

  // 61. Star — traces outline and pops with golden bloom
  {
    id: "star",
    name: "Star",
    category: "Media",
    tags: ["rate", "github", "favorite"],
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
        <motion.polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          animate={
            active && !reduceMotion
              ? { scale: [1, 1.16, 1], rotate: [0, 14, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function StarIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" animate={active ? { scale: [1, 1.16, 1], rotate: [0, 14, 0] } : { scale: 1, rotate: 0 }} transition={{ duration: 0.48 }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 62. Database — cylinder discs pulse sequentially top-to-bottom
  {
    id: "database",
    name: "Database",
    category: "Dev",
    tags: ["sql", "storage", "data"],
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
        <motion.ellipse
          cx="12"
          cy="5"
          rx="9"
          ry="3"
          animate={active && !reduceMotion ? { y: [0, -1.2, 0] } : { y: 0 }}
          transition={{ duration: 0.36, ease: EASE_OUT }}
        />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <motion.path
          d="M3 12a9 3 0 0 0 18 0"
          initial={{ opacity: 1 }} animate={active && !reduceMotion ? { opacity: [0.3, 1] } : { opacity: 1 }}
          transition={{ duration: 0.36, delay: 0.08 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function DatabaseIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.ellipse cx="12" cy="5" rx="9" ry="3" animate={active ? { y: [0, -1.2, 0] } : { y: 0 }} transition={{ duration: 0.36 }} />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <motion.path d="M3 12a9 3 0 0 0 18 0" initial={{ opacity: 1 }} animate={active ? { opacity: [0.3, 1] } : { opacity: 1 }} transition={{ duration: 0.36, delay: 0.08 }} />
    </svg>
  );
}`,
  },

  // 63. CPU — inner die pulses while chip stays crisp
  {
    id: "cpu",
    name: "CPU",
    category: "Dev",
    tags: ["chip", "hardware", "compute"],
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
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <motion.rect
          width="6"
          height="6"
          x="9"
          y="9"
          rx="1"
          animate={active && !reduceMotion ? { scale: [1, 1.24, 1] } : { scale: 1 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CpuIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <motion.rect width="6" height="6" x="9" y="9" rx="1" animate={active ? { scale: [1, 1.24, 1] } : { scale: 1 }} transition={{ duration: 0.42 }} style={{ transformOrigin: "12px 12px" }} />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </svg>
  );
}`,
  },

  // 64. Cloud — drifts softly upward
  {
    id: "cloud",
    name: "Cloud",
    category: "Dev",
    tags: ["deploy", "weather", "hosting"],
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
        animate={active && !reduceMotion ? { y: [0, -2.5, 0] } : { y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CloudIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { y: [0, -2.5, 0] } : { y: 0 }} transition={{ duration: 0.5 }}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </motion.svg>
  );
}`,
  },

  // 65. Globe — meridian rotates horizontally like a spinning world
  {
    id: "globe",
    name: "Globe",
    category: "Dev",
    tags: ["world", "web", "i18n"],
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
        <path d="M2 12h20" />
        <motion.path
          d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
          animate={active && !reduceMotion ? { scaleX: [1, 0.25, 1] } : { scaleX: 1 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function GlobeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" />
      <motion.path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" animate={active ? { scaleX: [1, 0.25, 1] } : { scaleX: 1 }} transition={{ duration: 0.55 }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 66. Zap — bolt draws rapidly from top to bottom
  {
    id: "zap",
    name: "Zap",
    category: "Dev",
    tags: ["fast", "lightning", "power"],
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
        <motion.path
          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ZapIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.42 }} />
    </svg>
  );
}`,
  },
];
