"use client";

import type { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBookOpen,
  FiBox,
  FiLayers,
  FiLayout,
  FiSliders,
  FiTerminal,
  FiZap,
} from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";
import {
  type ComponentCategory,
  getRegistryGroupedByCategory,
} from "@/registry/registry-data";

const GETTING_STARTED: { title: string; href: string; icon: IconType }[] = [
  { title: "Introduction", href: "/docs", icon: FiBookOpen },
  { title: "Installation", href: "/docs/installation", icon: FiTerminal },
];

const CATEGORY_ICONS: Record<ComponentCategory, IconType> = {
  "inputs-and-forms": FiSliders,
  "navigation-and-layout": FiLayout,
  "overlays-and-feedback": FiLayers,
  "cards-and-display": FiBox,
  "motion-and-effects": FiZap,
};

interface DocsSidebarProps {
  onNavigate?: () => void;
}

export function DocsSidebar({ onNavigate }: DocsSidebarProps) {
  const pathname = usePathname();
  const grouped = getRegistryGroupedByCategory();

  return (
    <nav aria-label="Documentation sections" className="space-y-6">
      {/* Getting Started */}
      <div className="space-y-1.5">
        <p className="px-2.5 text-[11px] font-semibold tracking-wide text-foreground/50 uppercase">
          Getting Started
        </p>
        <ul className="space-y-1">
          {GETTING_STARTED.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[13.5px] transition-colors",
                    isActive
                      ? "bg-white font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.06),0_0_0_1px_rgba(17,17,19,0.07)]"
                      : "text-foreground/70 hover:bg-black/[0.04] hover:text-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      isActive ? "text-foreground" : "text-foreground/45",
                    )}
                  />
                  <span>{link.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Single-category component sections */}
      {grouped.map(({ category, items }) => {
        const CategoryIcon = CATEGORY_ICONS[category.id];
        return (
          <div key={category.id} className="space-y-1.5">
            <p className="flex items-center gap-1.5 px-2.5 text-[11px] font-semibold tracking-wide text-foreground/50 uppercase">
              <CategoryIcon className="h-3 w-3 text-foreground/40" />
              <span>{category.label}</span>
            </p>

            {items.length > 0 ? (
              <ul className="space-y-1">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={cn(
                          "flex items-center justify-between rounded-[10px] px-2.5 py-2 text-[13.5px] transition-colors",
                          isActive
                            ? "bg-white font-medium text-foreground shadow-[0_1px_2px_rgba(17,17,19,0.06),0_0_0_1px_rgba(17,17,19,0.07)]"
                            : "text-foreground/70 hover:bg-black/[0.04] hover:text-foreground",
                        )}
                      >
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="rounded-full bg-foreground px-2 py-0.5 font-mono text-[10px] font-medium text-background">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="px-2.5 py-1 text-xs text-foreground/40">
                No components yet
              </p>
            )}
          </div>
        );
      })}
    </nav>
  );
}
