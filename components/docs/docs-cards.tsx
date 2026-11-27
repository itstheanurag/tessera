"use client";

import Link from "next/link";
import { FiArrowUpRight, FiBox, FiCode, FiTerminal } from "react-icons/fi";
import { BiLogoGithub } from "react-icons/bi";

const cards = [
  {
    title: "Installation",
    description:
      "Set up Tailwind CSS v4, Motion, and the shadcn registry in your Next.js or React app.",
    icon: FiTerminal,
    href: "/docs/installation",
    external: false,
  },
  {
    title: "Live Showcase",
    description:
      "Test morphing pills, spring card stacks, hold-to-confirm, and dynamic trays.",
    icon: FiCode,
    href: "/#showcase",
    external: false,
  },
  {
    title: "Registry CLI",
    description:
      "Learn how Tessera distributes flat TypeScript files directly into your repo.",
    icon: FiBox,
    href: "/#install",
    external: false,
  },
  {
    title: "Source Repository",
    description:
      "Inspect the registry schema, component architecture, and Tailwind v4 tokens.",
    icon: BiLogoGithub,
    href: "https://github.com/itstheanurag/bitsandpieces",
    external: true,
  },
];

export function DocsCards() {
  return (
    <div className="mt-8 mb-10 rounded-[18px] border border-black/[0.07] bg-[#ececf0] p-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {cards.map((card) => {
          const Icon = card.icon;
          const inner = (
            <div className="tessera-press group h-full rounded-[13px] border border-black/[0.06] bg-white p-5 transition-[border-color,box-shadow] duration-150 hover:border-black/[0.12] hover:shadow-[0_6px_18px_-6px_rgba(17,17,19,0.1)] flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <FiArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>

              <div className="space-y-1">
                <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-foreground">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          );

          return card.external ? (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[14px] bg-white/60 p-[1px]"
            >
              {inner}
            </a>
          ) : (
            <Link
              key={card.title}
              href={card.href}
              className="block rounded-[14px] bg-white/60 p-[1px]"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
