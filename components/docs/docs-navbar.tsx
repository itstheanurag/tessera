"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogoGithub } from "react-icons/bi";
import { FiArrowLeft, FiMenu, FiStar, FiX } from "react-icons/fi";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TesseraMark } from "@/components/brand/tessera-mark";
import { DocsSidebar } from "@/components/docs/sidebar";
import { cn } from "@/registry/tessera/lib/utils";

const TOP_LINKS = [
  { label: "Introduction", href: "/docs" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Icons", href: "/icons" },
];

export const DocsNavbar = () => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [stars, setStars] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("https://api.github.com/repos/itstheanurag/bitsandpieces")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-[#f4f4f6]/92 backdrop-blur-xl">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6">
        {/* Left: brand aligned over the left sidebar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5 lg:w-[240px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground"
            >
              <TesseraMark className="h-5 w-5" />
              <span className="text-[16px] font-bold tracking-[-0.03em]">
                Tessera
              </span>
            </Link>
            <span className="text-black/20">/</span>
            <Link
              href="/docs"
              className="rounded-md border border-black/[0.07] bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-foreground/80 shadow-[0_1px_2px_rgba(17,17,19,0.04)] hover:text-foreground transition-colors"
            >
              docs
            </Link>
          </div>

          <nav
            aria-label="Docs top navigation"
            className="hidden md:flex items-center gap-1"
          >
            {TOP_LINKS.map((item) => {
              const active =
                item.href === "/docs"
                  ? pathname === "/docs"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[9px] px-3 py-1.5 text-[13px] font-medium transition-colors",
                    active
                      ? "bg-white text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.06),0_0_0_1px_rgba(17,17,19,0.06)]"
                      : "text-foreground/65 hover:bg-black/[0.04] hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Back to home + GitHub Stars + mobile drawer trigger */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-[9px] px-2.5 text-xs font-medium text-foreground/70 hover:bg-black/[0.04] hover:text-foreground transition-colors"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>

          <a
            href="https://github.com/itstheanurag/bitsandpieces"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Tessera on GitHub"
            className="group tessera-press inline-flex h-8 items-center gap-2 rounded-[9px] border border-black/[0.08] bg-white px-2.5 text-[12.5px] font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.04)] hover:border-black/[0.14]"
          >
            <BiLogoGithub className="h-3.5 w-3.5 text-foreground" />
            <span className="h-3 w-px bg-black/[0.1]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1 font-mono text-[11.5px] tabular-nums text-foreground/90">
              <FiStar className="h-3 w-3 text-amber-500 transition-transform duration-200 group-hover:scale-110" />
              <span>{stars !== null ? stars.toLocaleString() : "Star"}</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-[9px] border border-black/[0.08] bg-white text-foreground"
          >
            {mobileOpen ? (
              <FiX className="h-4 w-4" />
            ) : (
              <FiMenu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile floating sidebar drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden absolute inset-x-0 top-14 border-b border-black/[0.08] bg-[#f4f4f6]/95 px-6 py-5 shadow-[var(--shadow-float)] backdrop-blur-xl"
          >
            <DocsSidebar onNavigate={() => setMobileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
