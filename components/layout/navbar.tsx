"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { BiLogoGithub } from "react-icons/bi";
import { FiChevronDown, FiMenu, FiX, FiArrowUpRight, FiStar } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";
import { TesseraMark } from "@/components/brand/tessera-mark";

type DropdownKey = "components" | "resources" | null;

const COMPONENTS_MENU = [
  {
    heading: "Primitives",
    items: [
      {
        title: "Stitched Buttons",
        description: "Tactile buttons with inset dashed thread borders.",
        href: "/#showcase",
      },
      {
        title: "Morphing Pill",
        description: "Layout-driven status and action pills.",
        href: "/#showcase",
      },
      {
        title: "Spring Card Stack",
        description: "Interactive depth-layered card deck.",
        href: "/#showcase",
      },
    ],
  },
  {
    heading: "Interactions",
    items: [
      {
        title: "Fluid Segmented Dock",
        description: "Shared-layout spring tab switcher.",
        href: "/#showcase",
      },
      {
        title: "Dynamic Tray",
        description: "Multi-view sheet with smooth height morphing.",
        href: "/#tray",
      },
      {
        title: "Hold to Confirm",
        description: "Asymmetric press-and-hold destructive action.",
        href: "/#showcase",
      },
    ],
  },
  {
    heading: "Foundation",
    items: [
      {
        title: "Tailwind v4 Tokens",
        description: "Semantic variables with zero runtime lock-in.",
        href: "/docs/installation",
      },
      {
        title: "shadcn Registry",
        description: "Copy source directly into your repository.",
        href: "/#install",
      },
      {
        title: "Motion Curves",
        description: "Compositor-only springs and ease-out physics.",
        href: "/#tray",
      },
    ],
  },
];

const RESOURCES_MENU = [
  {
    heading: "Documentation",
    items: [
      {
        title: "Introduction",
        description: "Architecture and design principles behind Tessera.",
        href: "/docs",
      },
      {
        title: "Installation",
        description: "Add components via CLI or copy source manually.",
        href: "/docs/installation",
      },
    ],
  },
  {
    heading: "Open Source",
    items: [
      {
        title: "GitHub Repository",
        description: "Inspect the source, registry schema, and examples.",
        href: "https://github.com/itstheanurag/bitsandpieces",
        external: true,
      },
      {
        title: "Registry Format",
        description: "Learn how AI agents read Tessera's flat TSX files.",
        href: "/#install",
      },
    ],
  },
];

const OPTION_BEZEL_CLASS =
  "block rounded-[13px] border border-black/[0.06] bg-white/65 p-[1px] shadow-[0_1px_2px_rgba(17,17,19,0.04)] transition-[border-color,box-shadow,transform] duration-150 hover:border-black/[0.12] hover:shadow-[0_6px_18px_-6px_rgba(17,17,19,0.12)]";

const OPTION_INNER_CLASS =
  "tessera-press block rounded-[12px] bg-white px-3.5 py-2.5 transition-colors duration-150";

export const Navbar: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [openMenu, setOpenMenu] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("https://api.github.com/repos/itstheanurag/bitsandpieces")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // Offline or rate-limited — gracefully fall back to label
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [mobileOpen]);

  const toggleMenu = (key: DropdownKey) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div ref={navRef} className="relative mx-auto max-w-[1020px]">
        {/* Outer frosted bezel wrapping the crisp inner navbar card */}
        <div className="rounded-[15px] border border-white/80 bg-white/55 p-[1px] shadow-[0_4px_20px_-4px_rgba(17,17,19,0.08),0_1px_2px_rgba(17,17,19,0.04)] backdrop-blur-xl">
          <div className="flex h-[52px] items-center justify-between rounded-[14px] border border-black/[0.06] bg-white/82 px-4 sm:px-5 shadow-[0_1px_2px_rgba(17,17,19,0.03)] backdrop-blur-xl">
            {/* Left: Bold wordmark + nav items */}
            <div className="flex items-center gap-6 lg:gap-7">
              <Link
                href="/"
                onClick={() => setOpenMenu(null)}
                className="inline-flex items-center gap-2 text-foreground"
              >
                <TesseraMark className="h-5 w-5" />
                <span className="text-[17px] font-bold tracking-[-0.03em]">
                  Tessera
                </span>
              </Link>

              <nav
                aria-label="Primary"
                className="hidden md:flex items-center gap-1"
              >
                <button
                  type="button"
                  onClick={() => toggleMenu("components")}
                  aria-expanded={openMenu === "components"}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-[10px] px-3 text-[13.5px] font-medium transition-colors",
                    openMenu === "components"
                      ? "bg-surface text-foreground shadow-[inset_0_0_0_1px_rgba(17,17,19,0.06)]"
                      : "text-foreground/80 hover:bg-surface/80 hover:text-foreground",
                  )}
                >
                  <span>Components</span>
                  <FiChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                      openMenu === "components" && "rotate-180",
                    )}
                  />
                </button>

                <Link
                  href="/#tray"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex h-9 items-center rounded-[10px] px-3 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-surface/80 hover:text-foreground"
                >
                  Interactions
                </Link>

                <button
                  type="button"
                  onClick={() => toggleMenu("resources")}
                  aria-expanded={openMenu === "resources"}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-[10px] px-3 text-[13.5px] font-medium transition-colors",
                    openMenu === "resources"
                      ? "bg-surface text-foreground shadow-[inset_0_0_0_1px_rgba(17,17,19,0.06)]"
                      : "text-foreground/80 hover:bg-surface/80 hover:text-foreground",
                  )}
                >
                  <span>Resources</span>
                  <FiChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                      openMenu === "resources" && "rotate-180",
                    )}
                  />
                </button>

                <Link
                  href="/#install"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex h-9 items-center rounded-[10px] px-3 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-surface/80 hover:text-foreground"
                >
                  Registry
                </Link>

                <Link
                  href="/icons"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex h-9 items-center rounded-[10px] px-3 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-surface/80 hover:text-foreground"
                >
                  Icons
                </Link>

                <Link
                  href="/backgrounds"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex h-9 items-center rounded-[10px] px-3 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-surface/80 hover:text-foreground"
                >
                  Backgrounds
                </Link>

                <Link
                  href="/docs"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex h-9 items-center rounded-[10px] px-3 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-surface/80 hover:text-foreground"
                >
                  Docs
                </Link>
              </nav>
            </div>

            {/* Right: Live GitHub Stars + crisp obsidian action button */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href="https://github.com/itstheanurag/bitsandpieces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Star Tessera on GitHub"
                className="group tessera-press inline-flex h-9 items-center gap-1.5 sm:gap-2 rounded-[10px] border border-black/[0.07] bg-surface/80 px-2.5 sm:px-3 text-[13px] font-medium text-foreground transition-colors hover:border-black/[0.12] hover:bg-surface"
              >
                <BiLogoGithub className="h-4 w-4 text-foreground" />
                <span className="h-3.5 w-px bg-black/[0.1]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1 font-mono text-xs tabular-nums text-foreground/90">
                  <FiStar className="h-3.5 w-3.5 text-amber-500 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110" />
                  <span>
                    {stars !== null ? stars.toLocaleString() : "Star"}
                  </span>
                </span>
              </a>

              <Link
                href="/docs"
                onClick={() => setOpenMenu(null)}
                className="group tessera-press relative hidden sm:inline-flex h-9 items-center justify-center rounded-[10px] bg-foreground px-4 text-[13.5px] font-medium text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-[#1c1c20]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[2.5px] rounded-[7.5px] border border-dashed border-white/28 transition-colors duration-200 group-hover:border-white/48"
                />
                <span className="relative z-10">Get started</span>
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-surface text-foreground"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <FiX className="h-4 w-4" />
                ) : (
                  <FiMenu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Outer frosted bezel + inner white card for the Cal.com-style dropdown */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -6, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -6, scale: 0.99 }
              }
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="hidden md:block absolute left-0 right-0 top-[64px] rounded-[18px] border border-white/80 bg-white/60 p-[1px] shadow-[0_16px_44px_-12px_rgba(17,17,19,0.14),0_2px_8px_-2px_rgba(17,17,19,0.06)] backdrop-blur-xl"
            >
              <div className="rounded-[17px] border border-black/[0.06] bg-[#f3f3f6]/88 p-5 backdrop-blur-xl">
                {openMenu === "components" ? (
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-9 grid grid-cols-3 gap-4">
                      {COMPONENTS_MENU.map((col) => (
                        <div key={col.heading} className="space-y-2.5">
                          <p className="px-1 text-xs font-medium text-muted-foreground">
                            {col.heading}
                          </p>
                          <ul className="space-y-2">
                            {col.items.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenMenu(null)}
                                  className={OPTION_BEZEL_CLASS}
                                >
                                  <div className={OPTION_INNER_CLASS}>
                                    <p className="text-[13.5px] font-medium text-foreground">
                                      {item.title}
                                    </p>
                                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Featured inner card column with matching 1px bezel */}
                    <div className="col-span-3 rounded-[15px] border border-black/[0.06] bg-white/65 p-[1px] shadow-[0_1px_2px_rgba(17,17,19,0.04)]">
                      <div className="flex h-full flex-col justify-between rounded-[14px] bg-white p-4">
                        <div className="space-y-2.5">
                          <p className="text-xs font-medium text-muted-foreground">
                            Featured
                          </p>
                          <div className="rounded-[12px] border border-black/[0.05] bg-surface/80 p-3.5 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[11px] text-muted-foreground">
                                01 / 02
                              </span>
                              <span className="h-2 w-2 rounded-full bg-foreground" />
                            </div>
                            <div className="h-2 w-3/4 rounded-full bg-surface-strong" />
                            <div className="h-7 w-full rounded-lg bg-white border border-black/[0.05]" />
                          </div>
                          <p className="pt-1 text-sm font-semibold text-foreground">
                            Dynamic Tray
                          </p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            Multi-view sheet with smooth spring height
                            interpolation.
                          </p>
                        </div>

                        <Link
                          href="/#tray"
                          onClick={() => setOpenMenu(null)}
                          className="tessera-press mt-4 inline-flex h-9 items-center justify-center gap-1.5 rounded-[10px] border border-black/[0.07] bg-surface px-3 text-xs font-medium text-foreground hover:bg-surface-strong"
                        >
                          <span>Try interaction</span>
                          <FiArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-6 max-w-2xl">
                    {RESOURCES_MENU.map((col) => (
                      <div key={col.heading} className="space-y-2.5">
                        <p className="px-1 text-xs font-medium text-muted-foreground">
                          {col.heading}
                        </p>
                        <ul className="space-y-2">
                          {col.items.map((item) => (
                            <li key={item.title}>
                              {"external" in item && item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setOpenMenu(null)}
                                  className={OPTION_BEZEL_CLASS}
                                >
                                  <div className={OPTION_INNER_CLASS}>
                                    <p className="inline-flex items-center gap-1 text-[13.5px] font-medium text-foreground">
                                      <span>{item.title}</span>
                                      <FiArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                                    </p>
                                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenMenu(null)}
                                  className={OPTION_BEZEL_CLASS}
                                >
                                  <div className={OPTION_INNER_CLASS}>
                                    <p className="text-[13.5px] font-medium text-foreground">
                                      {item.title}
                                    </p>
                                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu with matching 1px frosted bezel + 2x2 tactile card grid */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden absolute left-0 right-0 top-[64px] rounded-[18px] border border-white/80 bg-white/60 p-[1px] shadow-[var(--shadow-float)] backdrop-blur-xl"
            >
              <nav
                aria-label="Mobile"
                className="rounded-[17px] border border-black/[0.06] bg-[#f3f3f6]/92 p-3 space-y-3 backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      title: "Components",
                      note: "Live UI primitives",
                      href: "/#showcase",
                    },
                    {
                      title: "Interactions",
                      note: "Spring motion demos",
                      href: "/#tray",
                    },
                    {
                      title: "Registry",
                      note: "CLI & source files",
                      href: "/#install",
                    },
                    {
                      title: "Icons",
                      note: "118 bespoke Motion SVGs",
                      href: "/icons",
                    },
                    {
                      title: "Backgrounds",
                      note: "Modern CSS & mesh",
                      href: "/backgrounds",
                    },
                    {
                      title: "Docs",
                      note: "Guides & install",
                      href: "/docs",
                    },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={OPTION_BEZEL_CLASS}
                    >
                      <div className="tessera-press rounded-[12px] bg-white px-3 py-3">
                        <p className="text-[13.5px] font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[11.5px] text-muted-foreground">
                          {item.note}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/docs"
                  onClick={() => setMobileOpen(false)}
                  className="group tessera-press relative flex h-11 w-full items-center justify-center rounded-[12px] bg-foreground text-sm font-medium text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-[#1c1c20]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[2.5px] rounded-[9.5px] border border-dashed border-white/28"
                  />
                  <span className="relative z-10">Get started</span>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
