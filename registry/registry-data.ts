import React from "react";
import { StitchedButton } from "./tessera/inputs-and-forms/stitched-button/stitched-button";
import { SegmentedDock } from "./tessera/navigation-and-layout/segmented-dock/segmented-dock";
import { DynamicTray } from "./tessera/overlays-and-feedback/dynamic-tray/dynamic-tray";
import { SpringCardStack } from "./tessera/cards-and-display/spring-card-stack/spring-card-stack";
import { HoldButton } from "./tessera/motion-and-effects/hold-button/hold-button";

export type ComponentCategory =
  | "inputs-and-forms"
  | "navigation-and-layout"
  | "overlays-and-feedback"
  | "cards-and-display"
  | "motion-and-effects";

export interface CategoryMeta {
  id: ComponentCategory;
  label: string;
  description: string;
}

export const COMPONENT_CATEGORIES: readonly CategoryMeta[] = [
  {
    id: "inputs-and-forms",
    label: "Inputs & Forms",
    description: "Buttons, inputs, switches, sliders, and form controls.",
  },
  {
    id: "navigation-and-layout",
    label: "Navigation & Layout",
    description: "Navbars, floating docks, segmented tabs, and trays.",
  },
  {
    id: "overlays-and-feedback",
    label: "Overlays & Feedback",
    description: "Sheets, dialogs, popovers, tooltips, and toasts.",
  },
  {
    id: "cards-and-display",
    label: "Cards & Display",
    description: "Card stacks, bento grids, accordions, and badges.",
  },
  {
    id: "motion-and-effects",
    label: "Motion & Effects",
    description: "Morphing pills, kinetic typography, and gesture primitives.",
  },
] as const;

export type RegistryItemType = "component";

export interface RegistryItem {
  name: string;
  type: RegistryItemType;
  /** Each component belongs to exactly one category. */
  category: ComponentCategory;
  component: React.ComponentType<Record<string, unknown>>;
  path: string;
  href: string;
  title: string;
  description: string;
  dependencies?: string[];
  badge?: string;
}

export const registry: Record<string, RegistryItem> = {
  "stitched-button": {
    name: "stitched-button",
    type: "component",
    category: "inputs-and-forms",
    component: StitchedButton as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/tessera/inputs-and-forms/stitched-button/stitched-button.tsx",
    href: "/docs/components/inputs-and-forms/stitched-button",
    title: "Stitched Button",
    description:
      "Tactile pill button with an inset 1px dashed thread border and crisp press feedback.",
    dependencies: ["clsx", "tailwind-merge"],
    badge: "New",
  },
  "segmented-dock": {
    name: "segmented-dock",
    type: "component",
    category: "navigation-and-layout",
    component: SegmentedDock as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/tessera/navigation-and-layout/segmented-dock/segmented-dock.tsx",
    href: "/docs/components/navigation-and-layout/segmented-dock",
    title: "Segmented Dock",
    description:
      "Shared-layout spring tab switcher with keyboard roles and reduced-motion support.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
  },
  "dynamic-tray": {
    name: "dynamic-tray",
    type: "component",
    category: "overlays-and-feedback",
    component: DynamicTray as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/tessera/overlays-and-feedback/dynamic-tray/dynamic-tray.tsx",
    href: "/docs/components/overlays-and-feedback/dynamic-tray",
    title: "Dynamic Tray",
    description:
      "Multi-view morphing sheet with smooth spring height interpolation.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
  },
  "spring-card-stack": {
    name: "spring-card-stack",
    type: "component",
    category: "cards-and-display",
    component: SpringCardStack as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/tessera/cards-and-display/spring-card-stack/spring-card-stack.tsx",
    href: "/docs/components/cards-and-display/spring-card-stack",
    title: "Spring Card Stack",
    description:
      "Interactive depth-layered card deck driven by spring physics.",
    dependencies: ["motion", "clsx", "tailwind-merge"],
  },
  "hold-button": {
    name: "hold-button",
    type: "component",
    category: "motion-and-effects",
    component: HoldButton as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/tessera/motion-and-effects/hold-button/hold-button.tsx",
    href: "/docs/components/motion-and-effects/hold-button",
    title: "Hold Button",
    description:
      "Asymmetric hold-to-confirm button with linear press fill and snappy ease-out release.",
    dependencies: ["react-icons", "clsx", "tailwind-merge"],
  },
};

export function getRegistryItem(name: string): RegistryItem | null {
  return registry[name] || null;
}

export function getRegistryByCategory(
  category: ComponentCategory,
): RegistryItem[] {
  return Object.values(registry).filter((item) => item.category === category);
}

export function getRegistryGroupedByCategory(): {
  category: CategoryMeta;
  items: RegistryItem[];
}[] {
  return COMPONENT_CATEGORIES.map((category) => ({
    category,
    items: getRegistryByCategory(category.id),
  }));
}
