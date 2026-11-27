import React from "react";

export type ExampleItem = {
  name: string;
  component: React.ComponentType<Record<string, unknown>>;
  path: string;
  title: string;
  parentComponent: string;
};

export const exampleRegistry: Record<string, ExampleItem> = {
  "stitched-button-demo": {
    name: "stitched-button-demo",
    component: React.lazy(
      () => import("@/examples/inputs-and-forms/stitched-button-demo"),
    ),
    path: "examples/inputs-and-forms/stitched-button-demo.tsx",
    title: "Stitched Button Variants",
    parentComponent: "stitched-button",
  },
  "segmented-dock-demo": {
    name: "segmented-dock-demo",
    component: React.lazy(
      () => import("@/examples/navigation-and-layout/segmented-dock-demo"),
    ),
    path: "examples/navigation-and-layout/segmented-dock-demo.tsx",
    title: "Segmented Dock",
    parentComponent: "segmented-dock",
  },
  "dynamic-tray-demo": {
    name: "dynamic-tray-demo",
    component: React.lazy(
      () => import("@/examples/overlays-and-feedback/dynamic-tray-demo"),
    ),
    path: "examples/overlays-and-feedback/dynamic-tray-demo.tsx",
    title: "Multi-View Dynamic Tray",
    parentComponent: "dynamic-tray",
  },
  "spring-card-stack-demo": {
    name: "spring-card-stack-demo",
    component: React.lazy(
      () => import("@/examples/cards-and-display/spring-card-stack-demo"),
    ),
    path: "examples/cards-and-display/spring-card-stack-demo.tsx",
    title: "Spring Card Stack",
    parentComponent: "spring-card-stack",
  },
  "hold-button-demo": {
    name: "hold-button-demo",
    component: React.lazy(
      () => import("@/examples/motion-and-effects/hold-button-demo"),
    ),
    path: "examples/motion-and-effects/hold-button-demo.tsx",
    title: "Hold to Confirm",
    parentComponent: "hold-button",
  },
};

export function getExample(name: string): ExampleItem | null {
  return exampleRegistry[name] || null;
}

export function getExamplesForComponent(parentName: string): ExampleItem[] {
  return Object.values(exampleRegistry).filter(
    (example) => example.parentComponent === parentName,
  );
}
