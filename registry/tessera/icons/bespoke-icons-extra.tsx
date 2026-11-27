"use client";

import React from "react";
import { motion } from "motion/react";
import type { BespokeIconDef } from "./bespoke-icons";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 24 };
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const BESPOKE_ICONS_EXTRA: BespokeIconDef[] = [
  // 19. Framer — 3 geometric pieces slide into place from alternating sides
  {
    id: "framer",
    name: "Framer",
    category: "Logos",
    tags: ["motion", "design", "logo"],
    brandColor: "#0055FF",
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
          d="M5 3h14v6h-7L5 3z"
          animate={active && !reduceMotion ? { x: [-3, 0] } : { x: 0 }}
          transition={SPRING}
        />
        <motion.path
          d="M5 9h7l7 6H5V9z"
          animate={active && !reduceMotion ? { x: [3, 0] } : { x: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        />
        <motion.path
          d="M5 15h7v6l-7-6z"
          animate={active && !reduceMotion ? { y: [3, 0] } : { y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FramerIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M5 3h14v6h-7L5 3z" animate={active ? { x: [-3, 0] } : { x: 0 }} transition={spring} />
      <motion.path d="M5 9h7l7 6H5V9z" animate={active ? { x: [3, 0] } : { x: 0 }} transition={{ ...spring, delay: 0.05 }} />
      <motion.path d="M5 15h7v6l-7-6z" animate={active ? { y: [3, 0] } : { y: 0 }} transition={{ ...spring, delay: 0.1 }} />
    </svg>
  );
}`,
  },

  // 20. Linear — circle stays crisp while the 3 diagonal speed lines sweep across
  {
    id: "linear",
    name: "Linear",
    category: "Logos",
    tags: ["issues", "product", "logo"],
    brandColor: "#5E6AD2",
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
          d="M5.5 14.5l4 4"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        />
        <motion.path
          d="M4.5 10.5l9 9"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.35, delay: 0.07, ease: EASE_OUT }}
        />
        <motion.path
          d="M6.8 6.8l10.4 10.4"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.14, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function LinearIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="9" />
      <motion.path d="M5.5 14.5l4 4" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.3 }} />
      <motion.path d="M4.5 10.5l9 9" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.35, delay: 0.07 }} />
      <motion.path d="M6.8 6.8l10.4 10.4" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.4, delay: 0.14 }} />
    </svg>
  );
}`,
  },

  // 21. Next.js — circle ring draws while the N diagonal shoots across
  {
    id: "nextjs",
    name: "Next.js",
    category: "Logos",
    tags: ["framework", "react", "logo"],
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
        <circle cx="12" cy="12" r="9" />
        <motion.path
          d="M9 15.5V8.5l8.5 10.2"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.48, ease: EASE_OUT }}
        />
        <motion.path
          d="M15 8.5v4.5"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.32, delay: 0.12, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function NextjsIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="9" />
      <motion.path d="M9 15.5V8.5l8.5 10.2" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.48 }} />
      <motion.path d="M15 8.5v4.5" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.32, delay: 0.12 }} />
    </svg>
  );
}`,
  },

  // 22. Tailwind — twin wave ribbons undulate out of phase
  {
    id: "tailwind",
    name: "Tailwind",
    category: "Logos",
    tags: ["css", "styling", "logo"],
    brandColor: "#06B6D4",
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
          d="M6.5 10.5c.8-2.8 2.6-4.2 5.2-4.2 3.4 0 3.8 2.6 5.5 3.1 1.1.3 2.1 0 3-.9-.8 2.8-2.6 4.2-5.2 4.2-3.4 0-3.8-2.6-5.5-3.1-1.1-.3-2.1 0-3 .9Z"
          animate={active && !reduceMotion ? { x: [0, 1.8, -1, 0], y: [0, -1, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        />
        <motion.path
          d="M3.8 15.8c.8-2.8 2.6-4.2 5.2-4.2 3.4 0 3.8 2.6 5.5 3.1 1.1.3 2.1 0 3-.9-.8 2.8-2.6 4.2-5.2 4.2-3.4 0-3.8-2.6-5.5-3.1-1.1-.3-2.1 0-3 .9Z"
          animate={active && !reduceMotion ? { x: [0, -1.8, 1, 0], y: [0, 1, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function TailwindIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M6.5 10.5c.8-2.8 2.6-4.2 5.2-4.2 3.4 0 3.8 2.6 5.5 3.1 1.1.3 2.1 0 3-.9-.8 2.8-2.6 4.2-5.2 4.2-3.4 0-3.8-2.6-5.5-3.1-1.1-.3-2.1 0-3 .9Z" animate={active ? { x: [0, 1.8, -1, 0] } : { x: 0 }} transition={{ duration: 0.55 }} />
      <motion.path d="M3.8 15.8c.8-2.8 2.6-4.2 5.2-4.2 3.4 0 3.8 2.6 5.5 3.1 1.1.3 2.1 0 3-.9-.8 2.8-2.6 4.2-5.2 4.2-3.4 0-3.8-2.6-5.5-3.1-1.1-.3-2.1 0-3 .9Z" animate={active ? { x: [0, -1.8, 1, 0] } : { x: 0 }} transition={{ duration: 0.55, delay: 0.08 }} />
    </svg>
  );
}`,
  },

  // 23. Supabase — bolt traces cleanly and snaps with emerald bloom
  {
    id: "supabase",
    name: "Supabase",
    category: "Logos",
    tags: ["database", "postgres", "logo"],
    brandColor: "#3ECF8E",
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
          d="M13 3L4 14h7l-1 7 9-11h-7l1-7Z"
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1], scale: [0.94, 1.06, 1] }
              : { pathLength: 1, scale: 1 }
          }
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SupabaseIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M13 3L4 14h7l-1 7 9-11h-7l1-7Z" animate={active ? { pathLength: [0, 1], scale: [0.94, 1.06, 1] } : { pathLength: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 24. Stripe — diagonal ribbon bars slide into crisp alignment
  {
    id: "stripe",
    name: "Stripe",
    category: "Logos",
    tags: ["payments", "billing", "logo"],
    brandColor: "#635BFF",
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
        <rect width="18" height="18" x="3" y="3" rx="4" />
        <motion.path
          d="M15.2 8.5c-.7-.5-1.7-.8-2.8-.8-1.8 0-3 .9-3 2.2 0 2.6 5.6 1.7 5.6 4.4 0 1.4-1.3 2.2-3.2 2.2-1.2 0-2.3-.3-3.1-.9"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function StripeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <rect width="18" height="18" x="3" y="3" rx="4" />
      <motion.path d="M15.2 8.5c-.7-.5-1.7-.8-2.8-.8-1.8 0-3 .9-3 2.2 0 2.6 5.6 1.7 5.6 4.4 0 1.4-1.3 2.2-3.2 2.2-1.2 0-2.3-.3-3.1-.9" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.5 }} />
    </svg>
  );
}`,
  },

  // 25. Search — lens pans in a quick inspection sweep
  {
    id: "search",
    name: "Search",
    category: "Interface",
    tags: ["find", "magnifier", "lookup"],
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
            ? { x: [0, 1.8, -1.2, 0], y: [0, -1.6, 0.8, 0] }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SearchIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { x: [0, 1.8, -1.2, 0], y: [0, -1.6, 0.8, 0] } : { x: 0, y: 0 }} transition={{ duration: 0.5 }}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.svg>
  );
}`,
  },

  // 26. Settings — gear rotates mechanically 90deg while hub scales
  {
    id: "settings",
    name: "Settings",
    category: "Interface",
    tags: ["gear", "config", "preferences"],
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SettingsIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: 90 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    </motion.svg>
  );
}`,
  },

  // 27. Copy — front sheet separates diagonally from back sheet
  {
    id: "copy",
    name: "Copy",
    category: "Interface",
    tags: ["clipboard", "duplicate", "paste"],
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
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          animate={active && !reduceMotion ? { x: 1.8, y: 1.8 } : { x: 0, y: 0 }}
          transition={SPRING}
        />
        <motion.path
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          animate={active && !reduceMotion ? { x: -1.8, y: -1.8 } : { x: 0, y: 0 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CopyIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.rect width="14" height="14" x="8" y="8" rx="2" ry="2" animate={active ? { x: 1.8, y: 1.8 } : { x: 0, y: 0 }} transition={spring} />
      <motion.path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" animate={active ? { x: -1.8, y: -1.8 } : { x: 0, y: 0 }} transition={spring} />
    </svg>
  );
}`,
  },

  // 28. Check — draws cleanly from start to finish
  {
    id: "check",
    name: "Check",
    category: "Interface",
    tags: ["done", "success", "verify"],
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
          d="M20 6 9 17l-5-5"
          animate={
            active && !reduceMotion
              ? { pathLength: [0, 1], opacity: [0.4, 1] }
              : { pathLength: 1, opacity: 1 }
          }
          transition={{ duration: 0.36, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CheckIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M20 6 9 17l-5-5" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.36 }} />
    </svg>
  );
}`,
  },

  // 29. Folder — opens slightly forward with inner file peeking
  {
    id: "folder",
    name: "Folder",
    category: "Interface",
    tags: ["files", "directory", "archive"],
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
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        <motion.path
          d="M6 12h12"
          initial={{ opacity: 0.35, y: 0 }}
          animate={active && !reduceMotion ? { y: -2, opacity: 1 } : { y: 0, opacity: 0.35 }}
          transition={SPRING}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function FolderIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <motion.path d="M6 12h12" initial={{ opacity: 0.35, y: 0 }} animate={active ? { y: -2, opacity: 1 } : { y: 0, opacity: 0.35 }} />
    </svg>
  );
}`,
  },

  // 30. Bookmark — stretches downward on spring and snaps back
  {
    id: "bookmark",
    name: "Bookmark",
    category: "Interface",
    tags: ["save", "ribbon", "favorite"],
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
          d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
          animate={active && !reduceMotion ? { scaleY: [1, 1.14, 0.96, 1] } : { scaleY: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 3px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function BookmarkIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" animate={active ? { scaleY: [1, 1.14, 0.96, 1] } : { scaleY: 1 }} style={{ transformOrigin: "12px 3px" }} />
    </svg>
  );
}`,
  },

  // 31. Calendar — pins bounce while day dots pop in sequentially
  {
    id: "calendar",
    name: "Calendar",
    category: "Interface",
    tags: ["date", "schedule", "event"],
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
          d="M8 2v4"
          animate={active && !reduceMotion ? { y: [0, -1.5, 0] } : { y: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        />
        <motion.path
          d="M16 2v4"
          animate={active && !reduceMotion ? { y: [0, -1.5, 0] } : { y: 0 }}
          transition={{ duration: 0.35, delay: 0.06, ease: EASE_OUT }}
        />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        {[
          [8, 14],
          [12, 14],
          [16, 14],
        ].map(([cx, cy], idx) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={cy}
            r="0.9"
            fill="currentColor"
            stroke="none"
            animate={active && !reduceMotion ? { scale: [0.3, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CalendarIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      {[8, 12, 16].map((cx, i) => (
        <motion.circle key={cx} cx={cx} cy={14} r="0.9" fill="currentColor" stroke="none" animate={active ? { scale: [0.3, 1.35, 1] } : { scale: 1 }} transition={{ delay: i * 0.07 }} style={{ transformOrigin: \`\${cx}px 14px\` }} />
      ))}
    </svg>
  );
}`,
  },

  // 32. Clock — minute hand sweeps 360deg while hour hand advances 30deg
  {
    id: "clock",
    name: "Clock",
    category: "Interface",
    tags: ["time", "timer", "schedule"],
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
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="6"
          animate={active && !reduceMotion ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
        <motion.line
          x1="12"
          y1="12"
          x2="16"
          y2="14"
          animate={active && !reduceMotion ? { rotate: 30 } : { rotate: 0 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ClockIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="10" />
      <motion.line x1="12" y1="12" x2="12" y2="6" animate={active ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }} style={{ transformOrigin: "12px 12px" }} />
      <motion.line x1="12" y1="12" x2="16" y2="14" animate={active ? { rotate: 30 } : { rotate: 0 }} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 33. Play — triangle glides forward with crisp tactile scale
  {
    id: "play",
    name: "Play",
    category: "Media",
    tags: ["video", "start", "music"],
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
          points="6 3 20 12 6 21 6 3"
          animate={active && !reduceMotion ? { x: 1.5, scale: 1.06 } : { x: 0, scale: 1 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function PlayIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.polygon points="6 3 20 12 6 21 6 3" animate={active ? { x: 1.5, scale: 1.06 } : { x: 0, scale: 1 }} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 34. Mic — capsule dips gently on spring like tapping a studio mic
  {
    id: "mic",
    name: "Mic",
    category: "Media",
    tags: ["voice", "audio", "record"],
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
          d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
          animate={active && !reduceMotion ? { y: [0, 1.8, -0.8, 0] } : { y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function MicIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" animate={active ? { y: [0, 1.8, -0.8, 0] } : { y: 0 }} transition={{ duration: 0.45 }} />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
    </svg>
  );
}`,
  },

  // 35. Camera — lens aperture contracts and snaps back open
  {
    id: "camera",
    name: "Camera",
    category: "Media",
    tags: ["photo", "snapshot", "shutter"],
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
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <motion.circle
          cx="12"
          cy="13"
          r="3"
          animate={active && !reduceMotion ? { scale: [1, 0.55, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          style={{ transformOrigin: "12px 13px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CameraIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <motion.circle cx="12" cy="13" r="3" animate={active ? { scale: [1, 0.55, 1.1, 1] } : { scale: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: "12px 13px" }} />
    </svg>
  );
}`,
  },

  // 36. Music — eighth notes sway rhythmically
  {
    id: "music",
    name: "Music",
    category: "Media",
    tags: ["song", "audio", "notes"],
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
        animate={active && !reduceMotion ? { rotate: [0, -8, 8, -4, 0], y: [0, -1.5, 0] } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function MusicIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: [0, -8, 8, -4, 0], y: [0, -1.5, 0] } : { rotate: 0, y: 0 }}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </motion.svg>
  );
}`,
  },

  // 37. Message — 3 typing dots bounce sequentially inside speech bubble
  {
    id: "message",
    name: "Message",
    category: "Media",
    tags: ["chat", "typing", "comment"],
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
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        {[8.5, 12, 15.5].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={12}
            r="0.9"
            fill="currentColor"
            stroke="none"
            animate={active && !reduceMotion ? { y: [0, -2, 0] } : { y: 0 }}
            transition={{ duration: 0.38, delay: i * 0.08, ease: EASE_OUT }}
          />
        ))}
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function MessageIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      {[8.5, 12, 15.5].map((cx, i) => (
        <motion.circle key={cx} cx={cx} cy={12} r="0.9" fill="currentColor" stroke="none" animate={active ? { y: [0, -2, 0] } : { y: 0 }} transition={{ duration: 0.38, delay: i * 0.08 }} />
      ))}
    </svg>
  );
}`,
  },

  // 38. Code — angle brackets expand outward while slash tilts
  {
    id: "code",
    name: "Code",
    category: "Dev",
    tags: ["brackets", "jsx", "html"],
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
        <motion.polyline
          points="16 18 22 12 16 6"
          animate={active && !reduceMotion ? { x: 1.8 } : { x: 0 }}
          transition={SPRING}
        />
        <motion.polyline
          points="8 6 2 12 8 18"
          animate={active && !reduceMotion ? { x: -1.8 } : { x: 0 }}
          transition={SPRING}
        />
        <motion.line
          x1="14.5"
          y1="4"
          x2="9.5"
          y2="20"
          animate={active && !reduceMotion ? { rotate: 8 } : { rotate: 0 }}
          transition={SPRING}
          style={{ transformOrigin: "12px 12px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function CodeIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <motion.polyline points="16 18 22 12 16 6" animate={active ? { x: 1.8 } : { x: 0 }} transition={spring} />
      <motion.polyline points="8 6 2 12 8 18" animate={active ? { x: -1.8 } : { x: 0 }} transition={spring} />
      <motion.line x1="14.5" y1="4" x2="9.5" y2="20" animate={active ? { rotate: 8 } : { rotate: 0 }} transition={spring} style={{ transformOrigin: "12px 12px" }} />
    </svg>
  );
}`,
  },

  // 39. Git Branch — branch path draws to top-right node which pops
  {
    id: "git-branch",
    name: "Git Branch",
    category: "Dev",
    tags: ["git", "merge", "vcs"],
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
        <line x1="6" x2="6" y1="3" y2="15" />
        <circle cx="6" cy="18" r="3" />
        <motion.path
          d="M18 9a9 9 0 0 1-9 9"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
        />
        <motion.circle
          cx="18"
          cy="6"
          r="3"
          animate={active && !reduceMotion ? { scale: [0.5, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.36, delay: 0.16, ease: EASE_OUT }}
          style={{ transformOrigin: "18px 6px" }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function GitBranchIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="6" cy="18" r="3" />
      <motion.path d="M18 9a9 9 0 0 1-9 9" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.42 }} />
      <motion.circle cx="18" cy="6" r="3" animate={active ? { scale: [0.5, 1.2, 1] } : { scale: 1 }} transition={{ duration: 0.36, delay: 0.16 }} style={{ transformOrigin: "18px 6px" }} />
    </svg>
  );
}`,
  },

  // 40. Refresh — smooth 180deg spring spin
  {
    id: "refresh",
    name: "Refresh",
    category: "Dev",
    tags: ["sync", "reload", "rotate"],
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
        animate={active && !reduceMotion ? { rotate: 180 } : { rotate: 0 }}
        transition={SPRING}
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </motion.svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function RefreshIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <motion.svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} animate={active ? { rotate: 180 } : { rotate: 0 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5" />
    </motion.svg>
  );
}`,
  },

  // 41. Shield Check — shield stays steady while inner check draws on
  {
    id: "shield-check",
    name: "Shield Check",
    category: "Dev",
    tags: ["security", "verified", "protect"],
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <motion.path
          d="m9 12 2 2 4-4"
          animate={active && !reduceMotion ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
      </svg>
    ),
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function ShieldCheckIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <motion.path d="m9 12 2 2 4-4" animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.4 }} />
    </svg>
  );
}`,
  },

  // 42. Sun — 8 sunbeams radiate outward sequentially
  {
    id: "sun",
    name: "Sun",
    category: "Dev",
    tags: ["light", "day", "bright"],
    render: ({ active, size, strokeWidth, reduceMotion }) => {
      const rays = [
        "M12 2v2",
        "M12 20v2",
        "m4.93 4.93 1.41 1.41",
        "m17.66 17.66 1.41 1.41",
        "M2 12h2",
        "M20 12h2",
        "m6.34 17.66-1.41 1.41",
        "m19.07 4.93-1.41 1.41",
      ];
      return (
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
            r="4"
            animate={active && !reduceMotion ? { scale: [1, 1.12, 1] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: "12px 12px" }}
          />
          {rays.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              initial={{ opacity: 1 }}
              animate={
                active && !reduceMotion ? { opacity: [0.2, 1] } : { opacity: 1 }
              }
              transition={{ duration: 0.22, delay: i * 0.03 }}
            />
          ))}
        </svg>
      );
    },
    code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

export function SunIcon({ size = 24, strokeWidth = 1.8 }) {
  const [active, setActive] = useState(false);
  const rays = ["M12 2v2","M12 20v2","m4.93 4.93 1.41 1.41","m17.66 17.66 1.41 1.41","M2 12h2","M20 12h2","m6.34 17.66-1.41 1.41","m19.07 4.93-1.41 1.41"];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <circle cx="12" cy="12" r="4" />
      {rays.map((d, i) => (
        <motion.path key={d} d={d} initial={{ opacity: 1 }} animate={active ? { opacity: [0.2, 1] } : { opacity: 1 }} transition={{ duration: 0.22, delay: i * 0.03 }} />
      ))}
    </svg>
  );
}`,
  },
];
