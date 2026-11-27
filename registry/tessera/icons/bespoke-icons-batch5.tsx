"use client";

import React from "react";
import { motion } from "motion/react";
import type { BespokeIconDef } from "./bespoke-icons";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 24 };
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const BESPOKE_ICONS_BATCH5: BespokeIconDef[] = [
  // 1. Peerlist — authentic green disc + clean geometric P emblem with spring draw
  {
    id: "peerlist",
    name: "Peerlist",
    category: "Social",
    tags: ["peerlist", "social", "network", "portfolio", "work", "career", "green", "circle", "logo"],
    brandColor: "#00AA45",
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
          cy="12"
          r="9.5"
          animate={active && !reduceMotion ? { scale: [1, 0.95, 1.04, 1] } : { scale: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.path
          d="M9.2 16.5V8.5a1.2 1.2 0 0 1 1.2-1.2h4a3.6 3.6 0 0 1 0 7.2H9.2"
          animate={
            active && !reduceMotion
              ? { pathLength: [0.2, 1] }
              : { pathLength: 1 }
          }
          transition={{ duration: 0.48, ease: EASE_OUT }}
        />
        <motion.path
          d="M11.6 11.2h2.6a1.2 1.2 0 0 1 0 2.4h-2.6"
          initial={{ pathLength: 1, opacity: 1 }}
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1], opacity: [0.3, 1] }
              : { pathLength: 1, opacity: 1 }
          }
          transition={{ duration: 0.35, delay: 0.12, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function PeerlistIcon({ size = 24 }: { size?: number }) {
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
      <motion.circle
        cx="12"
        cy="12"
        r="9.5"
        animate={hovered ? { scale: [1, 0.95, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path
        d="M9.2 16.5V8.5a1.2 1.2 0 0 1 1.2-1.2h4a3.6 3.6 0 0 1 0 7.2H9.2"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M11.6 11.2h2.6a1.2 1.2 0 0 1 0 2.4h-2.6"
        initial={{ pathLength: 1, opacity: 1 }}
        animate={hovered ? { pathLength: [0, 1], opacity: [0.3, 1] } : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 2. X (Twitter) — bold double diagonal band & crossing slash draw cleanly
  {
    id: "x-twitter",
    name: "X",
    category: "Social",
    tags: ["x", "twitter", "social", "post", "tweet", "microblog"],
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
          d="M4 4l11.73 16H20L8.27 4H4z"
          animate={
            active && !reduceMotion
              ? { pathLength: [0.25, 1] }
              : { pathLength: 1 }
          }
          transition={{ duration: 0.48, ease: EASE_OUT }}
        />
        <motion.path
          d="M4 20l6.77-6.77"
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1] }
              : { pathLength: 1 }
          }
          transition={{ duration: 0.35, delay: 0.12, ease: EASE_OUT }}
        />
        <motion.path
          d="M20 4l-6.77 6.77"
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1] }
              : { pathLength: 1 }
          }
          transition={{ duration: 0.35, delay: 0.18, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function XIcon({ size = 24 }: { size?: number }) {
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
        d="M4 4l11.73 16H20L8.27 4H4z"
        animate={hovered ? { pathLength: [0.25, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M4 20l6.77-6.77"
        animate={hovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.35, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M20 4l-6.77 6.77"
        animate={hovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.35, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 3. LinkedIn — i dot pops & n arch draws inside rounded badge
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Social",
    tags: ["linkedin", "social", "network", "jobs", "career", "professional"],
    brandColor: "#0A66C2",
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
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <motion.line
          x1="8"
          y1="11"
          x2="8"
          y2="16"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        />
        <motion.circle
          cx="8"
          cy="8"
          r="0.7"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scale: [1, 1.8, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          style={{ originX: "8px", originY: "8px" }}
        />
        <motion.path
          d="M12 16v-5m0 2a2.5 2.5 0 0 1 5 0v3"
          animate={active && !reduceMotion ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.46, delay: 0.08, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function LinkedInIcon({ size = 24 }: { size?: number }) {
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
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <motion.line
        x1="8"
        y1="11"
        x2="8"
        y2="16"
        animate={hovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.circle
        cx="8"
        cy="8"
        r="0.7"
        fill="currentColor"
        stroke="none"
        animate={hovered ? { scale: [1, 1.8, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "8px", originY: "8px" }}
      />
      <motion.path
        d="M12 16v-5m0 2a2.5 2.5 0 0 1 5 0v3"
        animate={hovered ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.46, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 4. Instagram — lens aperture pulses & flash viewfinder dot pops
  {
    id: "instagram",
    name: "Instagram",
    category: "Social",
    tags: ["instagram", "social", "photo", "reels", "camera", "meta"],
    brandColor: "#E4405F",
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
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <motion.circle
          cx="12"
          cy="12"
          r="4"
          animate={active && !reduceMotion ? { scale: [1, 0.82, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.circle
          cx="17.2"
          cy="6.8"
          r="0.9"
          fill="currentColor"
          stroke="none"
          animate={active && !reduceMotion ? { scale: [1, 1.8, 1] } : { scale: 1 }}
          transition={{ duration: 0.38, delay: 0.1, ease: EASE_OUT }}
          style={{ originX: "17.2px", originY: "6.8px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function InstagramIcon({ size = 24 }: { size?: number }) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <motion.circle
        cx="12"
        cy="12"
        r="4"
        animate={hovered ? { scale: [1, 0.82, 1.08, 1] } : { scale: 1 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.circle
        cx="17.2"
        cy="6.8"
        r="0.9"
        fill="currentColor"
        stroke="none"
        animate={hovered ? { scale: [1, 1.8, 1] } : { scale: 1 }}
        transition={{ duration: 0.38, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "17.2px", originY: "6.8px" }}
      />
    </svg>
  );
}`,
  },

  // 5. Threads — continuous spiral thread unspools and traces smoothly
  {
    id: "threads",
    name: "Threads",
    category: "Social",
    tags: ["threads", "social", "meta", "at", "microblog", "post"],
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
          d="M19 7.5C17.8 4.8 15.2 3.5 12 3.5c-4.7 0-8 3.4-8 8.5s3.3 8.5 8 8.5c4.2 0 7.2-2.2 7.8-5.5.4-2.2-.8-4.2-3.4-4.7-2.6-.5-5.6.3-6.2 2.4-.5 1.8.8 3.2 2.6 3.2 2.1 0 3.5-1.5 3.6-4.2.1-2.5-1.2-4.2-3.6-4.2-1.8 0-3.1.8-3.6 2"
          animate={active && !reduceMotion ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function ThreadsIcon({ size = 24 }: { size?: number }) {
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
        d="M19 7.5C17.8 4.8 15.2 3.5 12 3.5c-4.7 0-8 3.4-8 8.5s3.3 8.5 8 8.5c4.2 0 7.2-2.2 7.8-5.5.4-2.2-.8-4.2-3.4-4.7-2.6-.5-5.6.3-6.2 2.4-.5 1.8.8 3.2 2.6 3.2 2.1 0 3.5-1.5 3.6-4.2.1-2.5-1.2-4.2-3.6-4.2-1.8 0-3.1.8-3.6 2"
        animate={hovered ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 6. Bluesky — twin butterfly wings flutter gently around center axis
  {
    id: "bluesky",
    name: "Bluesky",
    category: "Social",
    tags: ["bluesky", "bsky", "social", "butterfly", "atproto", "microblog"],
    brandColor: "#0085FF",
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
          d="M12 11.2C10.3 7.6 6.8 4.5 4.6 5.2c-1.7.5-1.5 4.4-.9 6.6.6 2 2.4 2.7 4.2 2.5-2.6.6-3.7 2.4-2.2 4.3 1.4 1.8 4.2.6 6.3-2.9"
          animate={active && !reduceMotion ? { scaleX: [1, 0.78, 1] } : { scaleX: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.path
          d="M12 11.2c1.7-3.6 5.2-6.7 7.4-6 1.7.5 1.5 4.4.9 6.6-.6 2-2.4 2.7-4.2 2.5 2.6.6 3.7 2.4 2.2 4.3-1.4 1.8-4.2.6-6.3-2.9"
          animate={active && !reduceMotion ? { scaleX: [1, 0.78, 1] } : { scaleX: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function BlueskyIcon({ size = 24 }: { size?: number }) {
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
        d="M12 11.2C10.3 7.6 6.8 4.5 4.6 5.2c-1.7.5-1.5 4.4-.9 6.6.6 2 2.4 2.7 4.2 2.5-2.6.6-3.7 2.4-2.2 4.3 1.4 1.8 4.2.6 6.3-2.9"
        animate={hovered ? { scaleX: [1, 0.78, 1] } : { scaleX: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path
        d="M12 11.2c1.7-3.6 5.2-6.7 7.4-6 1.7.5 1.5 4.4.9 6.6-.6 2-2.4 2.7-4.2 2.5 2.6.6 3.7 2.4 2.2 4.3-1.4 1.8-4.2.6-6.3-2.9"
        animate={hovered ? { scaleX: [1, 0.78, 1] } : { scaleX: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  // 7. Reddit — Snoo antenna bobs & eyes blink
  {
    id: "reddit",
    name: "Reddit",
    category: "Social",
    tags: ["reddit", "social", "forum", "community", "snoo", "upvote"],
    brandColor: "#FF4500",
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
          animate={active && !reduceMotion ? { rotate: [0, -14, 10, 0] } : { rotate: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "9px" }}
        >
          <path d="M12 9l1.2-4.5 3.8.8" />
          <circle cx="18.3" cy="5.6" r="1.3" />
        </motion.g>
        <ellipse cx="12" cy="14.5" rx="7.5" ry="5.2" />
        <path d="M5.2 12.2a2 2 0 1 1 1.6-2.4" />
        <path d="M18.8 12.2a2 2 0 1 0-1.6-2.4" />
        <motion.g
          animate={active && !reduceMotion ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.36, delay: 0.08, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "13.5px" }}
        >
          <circle cx="9.2" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.8" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
        </motion.g>
        <path d="M9.5 16.8c1.5.9 3.5.9 5 0" />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function RedditIcon({ size = 24 }: { size?: number }) {
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
      <motion.g
        animate={hovered ? { rotate: [0, -14, 10, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "9px" }}
      >
        <path d="M12 9l1.2-4.5 3.8.8" />
        <circle cx="18.3" cy="5.6" r="1.3" />
      </motion.g>
      <ellipse cx="12" cy="14.5" rx="7.5" ry="5.2" />
      <path d="M5.2 12.2a2 2 0 1 1 1.6-2.4" />
      <path d="M18.8 12.2a2 2 0 1 0-1.6-2.4" />
      <motion.g
        animate={hovered ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
        transition={{ duration: 0.36, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "13.5px" }}
      >
        <circle cx="9.2" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="14.8" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      </motion.g>
      <path d="M9.5 16.8c1.5.9 3.5.9 5 0" />
    </svg>
  );
}`,
  },

  // 8. TikTok — musical note hops with a rhythmic tilt
  {
    id: "tiktok",
    name: "TikTok",
    category: "Social",
    tags: ["tiktok", "social", "video", "shorts", "music", "creator"],
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
          d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
          animate={
            active && !reduceMotion
              ? { y: [0, -2.2, 0], rotate: [0, -8, 4, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "14px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function TikTokIcon({ size = 24 }: { size?: number }) {
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
        d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
        animate={hovered ? { y: [0, -2.2, 0], rotate: [0, -8, 4, 0] } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "14px" }}
      />
    </svg>
  );
}`,
  },

  // 9. Twitch — chat glitch frame with twin vertical eyes blinking
  {
    id: "twitch",
    name: "Twitch",
    category: "Social",
    tags: ["twitch", "social", "stream", "live", "gaming", "video"],
    brandColor: "#9146FF",
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
        <path d="M5 3h15v10l-4 4h-4l-3 3v-3H5V3z" />
        <motion.g
          animate={active && !reduceMotion ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.38, ease: EASE_OUT }}
          style={{ originX: "13px", originY: "9.5px" }}
        >
          <line x1="11" y1="7.5" x2="11" y2="11.5" />
          <line x1="15.5" y1="7.5" x2="15.5" y2="11.5" />
        </motion.g>
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function TwitchIcon({ size = 24 }: { size?: number }) {
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
      <path d="M5 3h15v10l-4 4h-4l-3 3v-3H5V3z" />
      <motion.g
        animate={hovered ? { scaleY: [1, 0.15, 1] } : { scaleY: 1 }}
        transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "13px", originY: "9.5px" }}
      >
        <line x1="11" y1="7.5" x2="11" y2="11.5" />
        <line x1="15.5" y1="7.5" x2="15.5" y2="11.5" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 10. Dribbble — basketball seams rotate smoothly inside sphere
  {
    id: "dribbble",
    name: "Dribbble",
    category: "Social",
    tags: ["dribbble", "social", "design", "portfolio", "shots", "ui"],
    brandColor: "#EA4C89",
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
        animate={active && !reduceMotion ? { rotate: 45 } : { rotate: 0 }}
        transition={SPRING}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 3.7c3.6 4.4 5.7 9.6 6.8 16.4" />
        <path d="M18.6 6.1C15.5 9.8 10.8 11.4 3.2 11.5" />
        <path d="M20.8 13.1c-5.4-1-10.2.5-14 5.2" />
      </motion.svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function DribbbleIcon({ size = 24 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.svg
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
      animate={hovered ? { rotate: 45 } : { rotate: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 3.7c3.6 4.4 5.7 9.6 6.8 16.4" />
      <path d="M18.6 6.1C15.5 9.8 10.8 11.4 3.2 11.5" />
      <path d="M20.8 13.1c-5.4-1-10.2.5-14 5.2" />
    </motion.svg>
  );
}`,
  },

  // 11. Behance — Bē mark with signature overbar sliding across
  {
    id: "behance",
    name: "Behance",
    category: "Social",
    tags: ["behance", "social", "design", "portfolio", "adobe", "creative"],
    brandColor: "#1769FF",
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
        <path d="M3 17V7h4.2a2.4 2.4 0 0 1 0 4.8H3" />
        <path d="M3 11.8h4.8a2.6 2.6 0 0 1 0 5.2H3" />
        <motion.path
          d="M14.5 14h6.5a3.25 3.25 0 1 0-1.2 2.5"
          animate={active && !reduceMotion ? { pathLength: [0.25, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
        <motion.line
          x1="15.2"
          y1="8"
          x2="20.2"
          y2="8"
          animate={active && !reduceMotion ? { x: [0, 1.5, 0] } : { x: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function BehanceIcon({ size = 24 }: { size?: number }) {
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
      <path d="M3 17V7h4.2a2.4 2.4 0 0 1 0 4.8H3" />
      <path d="M3 11.8h4.8a2.6 2.6 0 0 1 0 5.2H3" />
      <motion.path
        d="M14.5 14h6.5a3.25 3.25 0 1 0-1.2 2.5"
        animate={hovered ? { pathLength: [0.25, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.line
        x1="15.2"
        y1="8"
        x2="20.2"
        y2="8"
        animate={hovered ? { x: [0, 1.5, 0] } : { x: 0 }}
        transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 12. Product Hunt — P emblem lifts & draws inside circular badge
  {
    id: "product-hunt",
    name: "Product Hunt",
    category: "Social",
    tags: ["product hunt", "launch", "social", "startup", "maker", "upvote"],
    brandColor: "#DA552F",
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
        <circle cx="12" cy="12" r="9" />
        <motion.path
          d="M9.5 16.5v-9h3.5a2.75 2.75 0 0 1 0 5.5H9.5"
          animate={
            active && !reduceMotion
              ? { pathLength: [0.2, 1], y: [0, -1, 0] }
              : { pathLength: 1, y: 0 }
          }
          transition={{ duration: 0.46, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function ProductHuntIcon({ size = 24 }: { size?: number }) {
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
      <circle cx="12" cy="12" r="9" />
      <motion.path
        d="M9.5 16.5v-9h3.5a2.75 2.75 0 0 1 0 5.5H9.5"
        animate={hovered ? { pathLength: [0.2, 1], y: [0, -1, 0] } : { pathLength: 1, y: 0 }}
        transition={{ duration: 0.46, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 13. WhatsApp — handset rocks gently inside speech bubble
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Social",
    tags: ["whatsapp", "social", "chat", "message", "call", "meta"],
    brandColor: "#25D366",
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
        <path d="M3 21l1.65-3.8A9 9 0 1 1 8.05 19.7L3 21z" />
        <motion.path
          d="M9.2 8.7c-.2-.5-.6-.5-.9-.5-.3 0-.8.2-1 .6-.3.4-.9 1.1-.9 2.4s.9 2.6 1.1 2.8c.2.2 1.8 2.8 4.4 3.8 2.2.9 2.7.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.4-.2-.9-.5l-1.5-.7c-.3-.1-.6-.1-.8.2l-.6.8c-.2.2-.4.2-.7.1-1.3-.5-2.3-1.5-2.9-2.7-.1-.2 0-.5.2-.7l.6-.6c.2-.2.2-.5.1-.8l-.7-1.6z"
          animate={
            active && !reduceMotion
              ? { rotate: [0, -10, 10, -5, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.52, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
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
      <path d="M3 21l1.65-3.8A9 9 0 1 1 8.05 19.7L3 21z" />
      <motion.path
        d="M9.2 8.7c-.2-.5-.6-.5-.9-.5-.3 0-.8.2-1 .6-.3.4-.9 1.1-.9 2.4s.9 2.6 1.1 2.8c.2.2 1.8 2.8 4.4 3.8 2.2.9 2.7.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.4-.2-.9-.5l-1.5-.7c-.3-.1-.6-.1-.8.2l-.6.8c-.2.2-.4.2-.7.1-1.3-.5-2.3-1.5-2.9-2.7-.1-.2 0-.5.2-.7l.6-.6c.2-.2.2-.5.1-.8l-.7-1.6z"
        animate={hovered ? { rotate: [0, -10, 10, -5, 0] } : { rotate: 0 }}
        transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  // 14. Telegram — paper plane glides up-right smoothly
  {
    id: "telegram",
    name: "Telegram",
    category: "Social",
    tags: ["telegram", "social", "chat", "messenger", "paper plane", "channel"],
    brandColor: "#26A5E4",
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
            active && !reduceMotion
              ? { x: [0, 2.2, 0], y: [0, -2.2, 0] }
              : { x: 0, y: 0 }
          }
          transition={{ duration: 0.48, ease: EASE_OUT }}
        >
          <path d="M21 5L2.8 11.7c-.8.3-.8 1.4 0 1.7l4.7 1.6 1.8 5.2c.2.7 1.1.9 1.6.4l2.7-2.6 4.7 3.4c.6.4 1.4.1 1.6-.6L21.9 6c.2-.8-.3-1.3-.9-1z" />
          <path d="M7.5 15L20.5 6" />
        </motion.g>
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function TelegramIcon({ size = 24 }: { size?: number }) {
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
      <motion.g
        animate={hovered ? { x: [0, 2.2, 0], y: [0, -2.2, 0] } : { x: 0, y: 0 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
      >
        <path d="M21 5L2.8 11.7c-.8.3-.8 1.4 0 1.7l4.7 1.6 1.8 5.2c.2.7 1.1.9 1.6.4l2.7-2.6 4.7 3.4c.6.4 1.4.1 1.6-.6L21.9 6c.2-.8-.3-1.3-.9-1z" />
        <path d="M7.5 15L20.5 6" />
      </motion.g>
    </svg>
  );
}`,
  },

  // 15. Substack — top bars stack cleanly & bookmark ribbon settles below
  {
    id: "substack",
    name: "Substack",
    category: "Social",
    tags: ["substack", "social", "newsletter", "writing", "blog", "publish"],
    brandColor: "#FF6719",
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
        <motion.line
          x1="4.5"
          y1="4.5"
          x2="19.5"
          y2="4.5"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.32, ease: EASE_OUT }}
        />
        <motion.line
          x1="4.5"
          y1="8.5"
          x2="19.5"
          y2="8.5"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.32, delay: 0.07, ease: EASE_OUT }}
        />
        <motion.path
          d="M4.5 12.5h15V20l-7.5-4.2L4.5 20v-7.5z"
          animate={active && !reduceMotion ? { y: [0, 1.4, 0] } : { y: 0 }}
          transition={{ duration: 0.44, delay: 0.1, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function SubstackIcon({ size = 24 }: { size?: number }) {
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
      <motion.line
        x1="4.5"
        y1="4.5"
        x2="19.5"
        y2="4.5"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.line
        x1="4.5"
        y1="8.5"
        x2="19.5"
        y2="8.5"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.32, delay: 0.07, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M4.5 12.5h15V20l-7.5-4.2L4.5 20v-7.5z"
        animate={hovered ? { y: [0, 1.4, 0] } : { y: 0 }}
        transition={{ duration: 0.44, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 16. Medium — three signature ellipses pulse in left-to-right cadence
  {
    id: "medium",
    name: "Medium",
    category: "Social",
    tags: ["medium", "social", "writing", "articles", "blog", "read"],
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
        <motion.circle
          cx="7"
          cy="12"
          r="4.2"
          animate={active && !reduceMotion ? { scale: [1, 1.12, 1] } : { scale: 1 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
          style={{ originX: "7px", originY: "12px" }}
        />
        <motion.ellipse
          cx="15.2"
          cy="12"
          rx="2.3"
          ry="4"
          animate={active && !reduceMotion ? { scale: [1, 1.14, 1] } : { scale: 1 }}
          transition={{ duration: 0.42, delay: 0.08, ease: EASE_OUT }}
          style={{ originX: "15.2px", originY: "12px" }}
        />
        <motion.ellipse
          cx="20.2"
          cy="12"
          rx="1"
          ry="3.6"
          animate={active && !reduceMotion ? { scale: [1, 1.18, 1] } : { scale: 1 }}
          transition={{ duration: 0.42, delay: 0.16, ease: EASE_OUT }}
          style={{ originX: "20.2px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MediumIcon({ size = 24 }: { size?: number }) {
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
      <motion.circle
        cx="7"
        cy="12"
        r="4.2"
        animate={hovered ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "7px", originY: "12px" }}
      />
      <motion.ellipse
        cx="15.2"
        cy="12"
        rx="2.3"
        ry="4"
        animate={hovered ? { scale: [1, 1.14, 1] } : { scale: 1 }}
        transition={{ duration: 0.42, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "15.2px", originY: "12px" }}
      />
      <motion.ellipse
        cx="20.2"
        cy="12"
        rx="1"
        ry="3.6"
        animate={hovered ? { scale: [1, 1.18, 1] } : { scale: 1 }}
        transition={{ duration: 0.42, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "20.2px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },

  // 17. Pinterest — pin needle draws down smoothly inside circular frame
  {
    id: "pinterest",
    name: "Pinterest",
    category: "Social",
    tags: ["pinterest", "social", "pin", "moodboard", "inspiration", "visual"],
    brandColor: "#E60023",
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
        <circle cx="12" cy="12" r="9" />
        <motion.path
          d="M8.5 14c-.6-1.1-.6-2.5-.1-3.8C9.2 8.2 11 7.2 13 7.4c2.1.2 3.5 1.8 3.3 3.9-.2 2.2-1.7 3.7-3.4 3.7-1 0-1.7-.5-2-1.2"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
        <motion.path
          d="M11.6 11.2L9.2 20.4"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function PinterestIcon({ size = 24 }: { size?: number }) {
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
      <circle cx="12" cy="12" r="9" />
      <motion.path
        d="M8.5 14c-.6-1.1-.6-2.5-.1-3.8C9.2 8.2 11 7.2 13 7.4c2.1.2 3.5 1.8 3.3 3.9-.2 2.2-1.7 3.7-3.4 3.7-1 0-1.7-.5-2-1.2"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.path
        d="M11.6 11.2L9.2 20.4"
        animate={hovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 18. Mastodon — M arches draw smoothly inside rounded fediverse shield
  {
    id: "mastodon",
    name: "Mastodon",
    category: "Social",
    tags: ["mastodon", "social", "fediverse", "activitypub", "open"],
    brandColor: "#6364FF",
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
        <path d="M18.6 16.5C15.5 17.5 11.2 17.5 9 17c-1.8-.4-2.5-1.2-2.5-1.2 2.5.4 6 .3 9-.5 2.5-.7 4.2-2.2 4.5-4.8.2-1.8.2-3.8-.2-4.8-.8-2-3.4-2.4-7.8-2.4s-7 .4-7.8 2.4c-.5 1.2-.5 3.8-.1 6.8.5 4.2 3.2 7.2 7.5 8 2.2.4 4.5.1 6-.5" />
        <motion.path
          d="M8 13V9.5a2 2 0 0 1 4 0V12m0-2.5a2 2 0 0 1 4 0V13"
          animate={active && !reduceMotion ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function MastodonIcon({ size = 24 }: { size?: number }) {
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
      <path d="M18.6 16.5C15.5 17.5 11.2 17.5 9 17c-1.8-.4-2.5-1.2-2.5-1.2 2.5.4 6 .3 9-.5 2.5-.7 4.2-2.2 4.5-4.8.2-1.8.2-3.8-.2-4.8-.8-2-3.4-2.4-7.8-2.4s-7 .4-7.8 2.4c-.5 1.2-.5 3.8-.1 6.8.5 4.2 3.2 7.2 7.5 8 2.2.4 4.5.1 6-.5" />
      <motion.path
        d="M8 13V9.5a2 2 0 0 1 4 0V12m0-2.5a2 2 0 0 1 4 0V13"
        animate={hovered ? { pathLength: [0.15, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 19. Facebook — clean geometric f stem draws upward & crossbar slides in
  {
    id: "facebook",
    name: "Facebook",
    category: "Social",
    tags: ["facebook", "social", "meta", "network", "community"],
    brandColor: "#1877F2",
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
        <circle cx="12" cy="12" r="9" />
        <motion.path
          d="M15 8h-1.8A2.2 2.2 0 0 0 11 10.2V21"
          animate={active && !reduceMotion ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.44, ease: EASE_OUT }}
        />
        <motion.line
          x1="8.5"
          y1="13"
          x2="14.5"
          y2="13"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.34, delay: 0.12, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function FacebookIcon({ size = 24 }: { size?: number }) {
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
      <circle cx="12" cy="12" r="9" />
      <motion.path
        d="M15 8h-1.8A2.2 2.2 0 0 0 11 10.2V21"
        animate={hovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.44, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.line
        x1="8.5"
        y1="13"
        x2="14.5"
        y2="13"
        animate={hovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.34, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}`,
  },

  // 20. Snapchat — ghost silhouette floats upward with a playful lift
  {
    id: "snapchat",
    name: "Snapchat",
    category: "Social",
    tags: ["snapchat", "social", "ghost", "stories", "chat", "camera"],
    brandColor: "#D4A000",
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
          d="M12 3.5c-3 0-4.8 2-4.8 5.2v2.1c-.6.2-1.4.2-1.9.7-.3.4-.1 1 .5 1.2.6.2 1.2.4 1.3.9-.4 1.5-1.6 2.6-3.1 3.1.4.7 1.5 1 2.7 1.1.3.1.4.5.6.9.4.5 1.2.3 2 .2.9-.1 1.6.6 2.7.6s1.8-.7 2.7-.6c.8.1 1.6.3 2-.2.2-.4.3-.8.6-.9 1.2-.1 2.3-.4 2.7-1.1-1.5-.5-2.7-1.6-3.1-3.1.1-.5.7-.7 1.3-.9.6-.2.8-.8.5-1.2-.5-.5-1.3-.5-1.9-.7V8.7c0-3.2-1.8-5.2-4.8-5.2z"
          animate={
            active && !reduceMotion
              ? { y: [0, -2, 0], scale: [1, 1.04, 1] }
              : { y: 0, scale: 1 }
          }
          transition={{ duration: 0.48, ease: EASE_OUT }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    ),
    code: `"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function SnapchatIcon({ size = 24 }: { size?: number }) {
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
        d="M12 3.5c-3 0-4.8 2-4.8 5.2v2.1c-.6.2-1.4.2-1.9.7-.3.4-.1 1 .5 1.2.6.2 1.2.4 1.3.9-.4 1.5-1.6 2.6-3.1 3.1.4.7 1.5 1 2.7 1.1.3.1.4.5.6.9.4.5 1.2.3 2 .2.9-.1 1.6.6 2.7.6s1.8-.7 2.7-.6c.8.1 1.6.3 2-.2.2-.4.3-.8.6-.9 1.2-.1 2.3-.4 2.7-1.1-1.5-.5-2.7-1.6-3.1-3.1.1-.5.7-.7 1.3-.9.6-.2.8-.8.5-1.2-.5-.5-1.3-.5-1.9-.7V8.7c0-3.2-1.8-5.2-4.8-5.2z"
        animate={hovered ? { y: [0, -2, 0], scale: [1, 1.04, 1] } : { y: 0, scale: 1 }}
        transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}`,
  },
];
