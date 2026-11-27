"use client";

import { SpringCardStack } from "@/registry/tessera/cards-and-display/spring-card-stack/spring-card-stack";

const CARDS = [
  {
    id: "1",
    title: "Spring physics",
    meta: "420 / 32",
    description:
      "Interruptible motion that responds naturally to rapid clicks and gestures.",
  },
  {
    id: "2",
    title: "Source-owned",
    meta: "TypeScript",
    description:
      "Copied directly into your repository so humans and AI agents can customize it.",
  },
  {
    id: "3",
    title: "Reduced motion",
    meta: "a11y",
    description:
      "Automatically falls back to gentle opacity transitions when requested.",
  },
];

export default function SpringCardStackDemo() {
  return <SpringCardStack cards={CARDS} />;
}
