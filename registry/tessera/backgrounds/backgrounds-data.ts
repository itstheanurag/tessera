export type BackgroundCategory =
  | "Gradients"
  | "Patterns"
  | "Mesh"
  | "Minimal"
  | "Vibrant"
  | "Dark";

export interface BackgroundItem {
  id: string;
  name: string;
  category: BackgroundCategory;
  description: string;
  tags: string[];
  // Inline CSS style applied directly to preview tile
  style: React.CSSProperties;
  // Raw CSS rules for standard stylesheets
  css: string;
  // Tailwind CSS v4 class string
  tailwind: string;
  // Standalone React component wrapper TSX
  tsx: string;
}

export const BACKGROUND_CATEGORIES: readonly ("All" | BackgroundCategory)[] = [
  "All",
  "Gradients",
  "Patterns",
  "Mesh",
  "Minimal",
  "Vibrant",
  "Dark",
] as const;

export const BACKGROUNDS: BackgroundItem[] = [
  // 1. Radiant Dawn (Warm Peach & Rose Mesh)
  {
    id: "radiant-dawn",
    name: "Radiant Dawn",
    category: "Mesh",
    description: "Soft layered ambient aurora radiating warm rose and apricot warmth.",
    tags: ["mesh", "warm", "aurora", "peach", "rose", "hero"],
    style: {
      backgroundColor: "#fff5f0",
      backgroundImage: `
        radial-gradient(at 15% 15%, rgba(254, 205, 211, 0.7) 0px, transparent 55%),
        radial-gradient(at 85% 10%, rgba(254, 215, 170, 0.8) 0px, transparent 50%),
        radial-gradient(at 50% 65%, rgba(253, 230, 138, 0.5) 0px, transparent 60%),
        radial-gradient(at 90% 90%, rgba(251, 207, 232, 0.6) 0px, transparent 50%)
      `,
    },
    css: `background-color: #fff5f0;
background-image: 
  radial-gradient(at 15% 15%, rgba(254, 205, 211, 0.7) 0px, transparent 55%),
  radial-gradient(at 85% 10%, rgba(254, 215, 170, 0.8) 0px, transparent 50%),
  radial-gradient(at 50% 65%, rgba(253, 230, 138, 0.5) 0px, transparent 60%),
  radial-gradient(at 90% 90%, rgba(251, 207, 232, 0.6) 0px, transparent 50%);`,
    tailwind: "bg-[#fff5f0] [background-image:radial-gradient(at_15%_15%,rgba(254,205,211,0.7)_0px,transparent_55%),radial-gradient(at_85%_10%,rgba(254,215,170,0.8)_0px,transparent_50%),radial-gradient(at_50%_65%,rgba(253,230,138,0.5)_0px,transparent_60%),radial-gradient(at_90%_90%,rgba(251,207,232,0.6)_0px,transparent_50%)]",
    tsx: `export function RadiantDawnBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#fff5f0] [background-image:radial-gradient(at_15%_15%,rgba(254,205,211,0.7)_0px,transparent_55%),radial-gradient(at_85%_10%,rgba(254,215,170,0.8)_0px,transparent_50%),radial-gradient(at_50%_65%,rgba(253,230,138,0.5)_0px,transparent_60%),radial-gradient(at_90%_90%,rgba(251,207,232,0.6)_0px,transparent_50%)]">
      {children}
    </div>
  );
}`,
  },

  // 2. Blueprint Grid (High-precision technical drafting grid)
  {
    id: "blueprint-grid",
    name: "Architect Grid",
    category: "Patterns",
    description: "Crisp engineering grid pattern on porcelain surface with subtle accent subdivisions.",
    tags: ["grid", "pattern", "blueprint", "technical", "linear", "clean"],
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(to right, rgba(17, 17, 19, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(17, 17, 19, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
    },
    css: `background-color: #ffffff;
background-image: 
  linear-gradient(to right, rgba(17, 17, 19, 0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(17, 17, 19, 0.05) 1px, transparent 1px);
background-size: 28px 28px;`,
    tailwind: "bg-white bg-[linear-gradient(to_right,rgba(17,17,19,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,19,0.05)_1px,transparent_1px)] bg-[size:28px_28px]",
    tsx: `export function ArchitectGridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,rgba(17,17,19,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,19,0.05)_1px,transparent_1px)] bg-[size:28px_28px]">
      {children}
    </div>
  );
}`,
  },

  // 3. Dot Matrix (Refined tactile stipple matrix)
  {
    id: "dot-matrix",
    name: "Polka Matrix",
    category: "Patterns",
    description: "Evenly spaced delicate micro-dots evoking premium Swiss print paper.",
    tags: ["dots", "pattern", "minimal", "paper", "matrix", "swiss"],
    style: {
      backgroundColor: "#fafafc",
      backgroundImage: "radial-gradient(rgba(17, 17, 19, 0.12) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },
    css: `background-color: #fafafc;
background-image: radial-gradient(rgba(17, 17, 19, 0.12) 1px, transparent 1px);
background-size: 20px 20px;`,
    tailwind: "bg-[#fafafc] bg-[radial-gradient(rgba(17,17,19,0.12)_1px,transparent_1px)] bg-[size:20px_20px]",
    tsx: `export function PolkaMatrixBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#fafafc] bg-[radial-gradient(rgba(17,17,19,0.12)_1px,transparent_1px)] bg-[size:20px_20px]">
      {children}
    </div>
  );
}`,
  },

  // 4. Ethereal Azure (Nordic Sky Gradient)
  {
    id: "ethereal-azure",
    name: "Ethereal Azure",
    category: "Gradients",
    description: "Crystalline gradient flowing seamlessly from sky cyan into porcelain lilac.",
    tags: ["gradient", "azure", "sky", "blue", "cyan", "airy"],
    style: {
      background: "linear-gradient(135deg, #e0f2fe 0%, #ede9fe 50%, #fdf2f8 100%)",
    },
    css: `background: linear-gradient(135deg, #e0f2fe 0%, #ede9fe 50%, #fdf2f8 100%);`,
    tailwind: "bg-gradient-to-br from-[#e0f2fe] via-[#ede9fe] to-[#fdf2f8]",
    tsx: `export function EtherealAzureBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#e0f2fe] via-[#ede9fe] to-[#fdf2f8]">
      {children}
    </div>
  );
}`,
  },

  // 5. Linear Beam (Luminous top spotlight)
  {
    id: "linear-beam",
    name: "Linear Beam",
    category: "Mesh",
    description: "Focused top-down light cone popular in developer landing pages and hero banners.",
    tags: ["beam", "spotlight", "mesh", "glow", "hero", "focused"],
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        radial-gradient(ellipse 70% 45% at 50% 0%, rgba(120, 119, 198, 0.18) 0%, transparent 70%),
        radial-gradient(ellipse 50% 30% at 50% -5%, rgba(56, 189, 248, 0.22) 0%, transparent 60%)
      `,
    },
    css: `background-color: #ffffff;
background-image: 
  radial-gradient(ellipse 70% 45% at 50% 0%, rgba(120, 119, 198, 0.18) 0%, transparent 70%),
  radial-gradient(ellipse 50% 30% at 50% -5%, rgba(56, 189, 248, 0.22) 0%, transparent 60%);`,
    tailwind: "bg-white [background-image:radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(120,119,198,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_30%_at_50%_-5%,rgba(56,189,248,0.22)_0%,transparent_60%)]",
    tsx: `export function LinearBeamBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white [background-image:radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(120,119,198,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_30%_at_50%_-5%,rgba(56,189,248,0.22)_0%,transparent_60%)]">
      {children}
    </div>
  );
}`,
  },

  // 6. Sunset Horizon (Vibrant California Twilight)
  {
    id: "sunset-horizon",
    name: "Sunset Horizon",
    category: "Vibrant",
    description: "Intense multi-tone coral, violet, and amber palette reminiscent of ocean horizon glow.",
    tags: ["sunset", "vibrant", "coral", "violet", "twilight", "warm"],
    style: {
      background: "linear-gradient(120deg, #fbcfe8 0%, #fed7aa 35%, #ddd6fe 70%, #bae6fd 100%)",
    },
    css: `background: linear-gradient(120deg, #fbcfe8 0%, #fed7aa 35%, #ddd6fe 70%, #bae6fd 100%);`,
    tailwind: "bg-[linear-gradient(120deg,#fbcfe8_0%,#fed7aa_35%,#ddd6fe_70%,#bae6fd_100%)]",
    tsx: `export function SunsetHorizonBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[linear-gradient(120deg,#fbcfe8_0%,#fed7aa_35%,#ddd6fe_70%,#bae6fd_100%)]">
      {children}
    </div>
  );
}`,
  },

  // 7. Isometric Cube Grid (3D Spatial Wireframe)
  {
    id: "isometric-cubes",
    name: "Isometric Weave",
    category: "Patterns",
    description: "Tessellated 60-degree geometric isometric wireframe creating subtle visual depth.",
    tags: ["isometric", "3d", "pattern", "wireframe", "spatial", "geometry"],
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(30deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
        linear-gradient(150deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
        linear-gradient(30deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
        linear-gradient(150deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
        linear-gradient(60deg, rgba(17, 17, 19, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(17, 17, 19, 0.02) 75%, rgba(17, 17, 19, 0.02)),
        linear-gradient(60deg, rgba(17, 17, 19, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(17, 17, 19, 0.02) 75%, rgba(17, 17, 19, 0.02))
      `,
      backgroundSize: "40px 70px",
      backgroundPosition: "0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px",
    },
    css: `background-color: #ffffff;
background-image: 
  linear-gradient(30deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
  linear-gradient(150deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
  linear-gradient(30deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
  linear-gradient(150deg, rgba(17, 17, 19, 0.04) 12%, transparent 12.5%, transparent 87%, rgba(17, 17, 19, 0.04) 87.5%, rgba(17, 17, 19, 0.04)),
  linear-gradient(60deg, rgba(17, 17, 19, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(17, 17, 19, 0.02) 75%, rgba(17, 17, 19, 0.02)),
  linear-gradient(60deg, rgba(17, 17, 19, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(17, 17, 19, 0.02) 75%, rgba(17, 17, 19, 0.02));
background-size: 40px 70px;
background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;`,
    tailwind: "bg-white [background-image:linear-gradient(30deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(150deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(30deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(150deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04))] [background-size:40px_70px] [background-position:0_0,0_0,20px_35px,20px_35px]",
    tsx: `export function IsometricWeaveBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white [background-image:linear-gradient(30deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(150deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(30deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04)),linear-gradient(150deg,rgba(17,17,19,0.04)_12%,transparent_12.5%,transparent_87%,rgba(17,17,19,0.04)_87.5%,rgba(17,17,19,0.04))] [background-size:40px_70px] [background-position:0_0,0_0,20px_35px,20px_35px]">
      {children}
    </div>
  );
}`,
  },

  // 8. Porcelain Silk (Subtle Family.co neutral)
  {
    id: "porcelain-silk",
    name: "Porcelain Silk",
    category: "Minimal",
    description: "Ultra-clean Family.co style neutral background with soft luminance falloff.",
    tags: ["minimal", "porcelain", "clean", "family", "neutral", "light"],
    style: {
      backgroundColor: "#fbfbfc",
      backgroundImage: "radial-gradient(circle at 50% 0%, #ffffff 0%, #f4f4f7 100%)",
    },
    css: `background-color: #fbfbfc;
background-image: radial-gradient(circle at 50% 0%, #ffffff 0%, #f4f4f7 100%);`,
    tailwind: "bg-[#fbfbfc] [background-image:radial-gradient(circle_at_50%_0%,#ffffff_0%,#f4f4f7_100%)]",
    tsx: `export function PorcelainSilkBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfc] [background-image:radial-gradient(circle_at_50%_0%,#ffffff_0%,#f4f4f7_100%)]">
      {children}
    </div>
  );
}`,
  },

  // 9. Diagonal Hatch (45-degree micro texture)
  {
    id: "diagonal-hatch",
    name: "Diagonal Hatch",
    category: "Patterns",
    description: "Ultra-fine 45-degree diagonal striped pinstripe canvas.",
    tags: ["stripes", "hatch", "pattern", "diagonal", "pinstripe", "canvas"],
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(17, 17, 19, 0.035) 0, rgba(17, 17, 19, 0.035) 1px, transparent 0, transparent 50%)",
      backgroundSize: "10px 10px",
    },
    css: `background-color: #ffffff;
background-image: repeating-linear-gradient(45deg, rgba(17, 17, 19, 0.035) 0, rgba(17, 17, 19, 0.035) 1px, transparent 0, transparent 50%);
background-size: 10px 10px;`,
    tailwind: "bg-white bg-[repeating-linear-gradient(45deg,rgba(17,17,19,0.035)_0,rgba(17,17,19,0.035)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]",
    tsx: `export function DiagonalHatchBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white bg-[repeating-linear-gradient(45deg,rgba(17,17,19,0.035)_0,rgba(17,17,19,0.035)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]">
      {children}
    </div>
  );
}`,
  },

  // 10. Cosmic Nebula (Dark Deep Void)
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    category: "Dark",
    description: "Deep obsidian canvas infused with purple and cyan starlight clouds.",
    tags: ["dark", "nebula", "space", "cosmic", "purple", "cyan", "void"],
    style: {
      backgroundColor: "#09090b",
      backgroundImage: `
        radial-gradient(at 20% 25%, rgba(147, 51, 234, 0.28) 0px, transparent 50%),
        radial-gradient(at 80% 30%, rgba(6, 182, 212, 0.22) 0px, transparent 50%),
        radial-gradient(at 50% 80%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)
      `,
    },
    css: `background-color: #09090b;
background-image: 
  radial-gradient(at 20% 25%, rgba(147, 51, 234, 0.28) 0px, transparent 50%),
  radial-gradient(at 80% 30%, rgba(6, 182, 212, 0.22) 0px, transparent 50%),
  radial-gradient(at 50% 80%, rgba(99, 102, 241, 0.2) 0px, transparent 50%);`,
    tailwind: "bg-[#09090b] [background-image:radial-gradient(at_20%_25%,rgba(147,51,234,0.28)_0px,transparent_50%),radial-gradient(at_80%_30%,rgba(6,182,212,0.22)_0px,transparent_50%),radial-gradient(at_50%_80%,rgba(99,102,241,0.2)_0px,transparent_50%)]",
    tsx: `export function CosmicNebulaBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#09090b] [background-image:radial-gradient(at_20%_25%,rgba(147,51,234,0.28)_0px,transparent_50%),radial-gradient(at_80%_30%,rgba(6,182,212,0.22)_0px,transparent_50%),radial-gradient(at_50%_80%,rgba(99,102,241,0.2)_0px,transparent_50%)]">
      {children}
    </div>
  );
}`,
  },

  // 11. Dark Circuit Grid (Obsidian Grid)
  {
    id: "dark-circuit",
    name: "Dark Matrix Grid",
    category: "Dark",
    description: "Pitch black drafting grid with razor-sharp micro-lines for terminal interfaces.",
    tags: ["dark", "grid", "matrix", "terminal", "cyber", "minimal"],
    style: {
      backgroundColor: "#0d0d10",
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
    },
    css: `background-color: #0d0d10;
background-image: 
  linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
background-size: 28px 28px;`,
    tailwind: "bg-[#0d0d10] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px]",
    tsx: `export function DarkMatrixGridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0d10] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px]">
      {children}
    </div>
  );
}`,
  },

  // 12. Emerald Aurora (Vibrant Northern Glow)
  {
    id: "emerald-aurora",
    name: "Emerald Aurora",
    category: "Vibrant",
    description: "Lush bio-luminescent jade and mint waves shifting across a pale mist.",
    tags: ["emerald", "green", "aurora", "mint", "vibrant", "glow"],
    style: {
      backgroundColor: "#f2fbf6",
      backgroundImage: `
        radial-gradient(at 10% 20%, rgba(52, 211, 153, 0.45) 0px, transparent 55%),
        radial-gradient(at 85% 15%, rgba(110, 231, 183, 0.5) 0px, transparent 50%),
        radial-gradient(at 50% 80%, rgba(167, 243, 208, 0.6) 0px, transparent 60%)
      `,
    },
    css: `background-color: #f2fbf6;
background-image: 
  radial-gradient(at 10% 20%, rgba(52, 211, 153, 0.45) 0px, transparent 55%),
  radial-gradient(at 85% 15%, rgba(110, 231, 183, 0.5) 0px, transparent 50%),
  radial-gradient(at 50% 80%, rgba(167, 243, 208, 0.6) 0px, transparent 60%);`,
    tailwind: "bg-[#f2fbf6] [background-image:radial-gradient(at_10%_20%,rgba(52,211,153,0.45)_0px,transparent_55%),radial-gradient(at_85%_15%,rgba(110,231,183,0.5)_0px,transparent_50%),radial-gradient(at_50%_80%,rgba(167,243,208,0.6)_0px,transparent_60%)]",
    tsx: `export function EmeraldAuroraBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#f2fbf6] [background-image:radial-gradient(at_10%_20%,rgba(52,211,153,0.45)_0px,transparent_55%),radial-gradient(at_85%_15%,rgba(110,231,183,0.5)_0px,transparent_50%),radial-gradient(at_50%_80%,rgba(167,243,208,0.6)_0px,transparent_60%)]">
      {children}
    </div>
  );
}`,
  },

  // 13. Topographic Contours (Linear Elevation Curves)
  {
    id: "topographic-contours",
    name: "Topo Elevation",
    category: "Patterns",
    description: "Concentric organic elevation contour lines inspired by cartography maps.",
    tags: ["topography", "map", "contour", "lines", "elevation", "cartography"],
    style: {
      backgroundColor: "#fafafc",
      backgroundImage: `
        radial-gradient(circle at 50% 50%, transparent 20%, rgba(17, 17, 19, 0.05) 21%, transparent 22%),
        radial-gradient(circle at 50% 50%, transparent 40%, rgba(17, 17, 19, 0.05) 41%, transparent 42%),
        radial-gradient(circle at 50% 50%, transparent 60%, rgba(17, 17, 19, 0.05) 61%, transparent 62%),
        radial-gradient(circle at 50% 50%, transparent 80%, rgba(17, 17, 19, 0.05) 81%, transparent 82%)
      `,
      backgroundSize: "60px 60px",
    },
    css: `background-color: #fafafc;
background-image: 
  radial-gradient(circle at 50% 50%, transparent 20%, rgba(17, 17, 19, 0.05) 21%, transparent 22%),
  radial-gradient(circle at 50% 50%, transparent 40%, rgba(17, 17, 19, 0.05) 41%, transparent 42%),
  radial-gradient(circle at 50% 50%, transparent 60%, rgba(17, 17, 19, 0.05) 61%, transparent 62%),
  radial-gradient(circle at 50% 50%, transparent 80%, rgba(17, 17, 19, 0.05) 81%, transparent 82%);
background-size: 60px 60px;`,
    tailwind: "bg-[#fafafc] bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(17,17,19,0.05)_21%,transparent_22%),radial-gradient(circle_at_50%_50%,transparent_40%,rgba(17,17,19,0.05)_41%,transparent_42%),radial-gradient(circle_at_50%_50%,transparent_60%,rgba(17,17,19,0.05)_61%,transparent_62%),radial-gradient(circle_at_50%_50%,transparent_80%,rgba(17,17,19,0.05)_81%,transparent_82%)] bg-[size:60px_60px]",
    tsx: `export function TopoElevationBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#fafafc] bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(17,17,19,0.05)_21%,transparent_22%),radial-gradient(circle_at_50%_50%,transparent_40%,rgba(17,17,19,0.05)_41%,transparent_42%),radial-gradient(circle_at_50%_50%,transparent_60%,rgba(17,17,19,0.05)_61%,transparent_62%),radial-gradient(circle_at_50%_50%,transparent_80%,rgba(17,17,19,0.05)_81%,transparent_82%)] bg-[size:60px_60px]">
      {children}
    </div>
  );
}`,
  },

  // 14. Amber Dusk (Rich Warm Mesh)
  {
    id: "amber-dusk",
    name: "Amber Dusk",
    category: "Mesh",
    description: "Golden honey and burnt terracotta clouds casting warmth into a clean cream base.",
    tags: ["amber", "honey", "gold", "warm", "mesh", "terracotta"],
    style: {
      backgroundColor: "#fefcf6",
      backgroundImage: `
        radial-gradient(at 10% 10%, rgba(251, 191, 36, 0.45) 0px, transparent 50%),
        radial-gradient(at 90% 20%, rgba(245, 158, 11, 0.35) 0px, transparent 55%),
        radial-gradient(at 50% 85%, rgba(249, 115, 22, 0.3) 0px, transparent 60%)
      `,
    },
    css: `background-color: #fefcf6;
background-image: 
  radial-gradient(at 10% 10%, rgba(251, 191, 36, 0.45) 0px, transparent 50%),
  radial-gradient(at 90% 20%, rgba(245, 158, 11, 0.35) 0px, transparent 55%),
  radial-gradient(at 50% 85%, rgba(249, 115, 22, 0.3) 0px, transparent 60%);`,
    tailwind: "bg-[#fefcf6] [background-image:radial-gradient(at_10%_10%,rgba(251,191,36,0.45)_0px,transparent_50%),radial-gradient(at_90%_20%,rgba(245,158,11,0.35)_0px,transparent_55%),radial-gradient(at_50%_85%,rgba(249,115,22,0.3)_0px,transparent_60%)]",
    tsx: `export function AmberDuskBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#fefcf6] [background-image:radial-gradient(at_10%_10%,rgba(251,191,36,0.45)_0px,transparent_50%),radial-gradient(at_90%_20%,rgba(245,158,11,0.35)_0px,transparent_55%),radial-gradient(at_50%_85%,rgba(249,115,22,0.3)_0px,transparent_60%)]">
      {children}
    </div>
  );
}`,
  },

  // 15. Velvet Violet (Luxury Dark Spectrum)
  {
    id: "velvet-violet",
    name: "Velvet Violet",
    category: "Dark",
    description: "Deep luxury plum and ultraviolet glow with dark obsidian contrast.",
    tags: ["dark", "violet", "plum", "luxury", "glow", "gradient"],
    style: {
      background: "linear-gradient(145deg, #0f0715 0%, #1a0b2e 40%, #0d0617 100%)",
    },
    css: `background: linear-gradient(145deg, #0f0715 0%, #1a0b2e 40%, #0d0617 100%);`,
    tailwind: "bg-[linear-gradient(145deg,#0f0715_0%,#1a0b2e_40%,#0d0617_100%)]",
    tsx: `export function VelvetVioletBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[linear-gradient(145deg,#0f0715_0%,#1a0b2e_40%,#0d0617_100%)]">
      {children}
    </div>
  );
}`,
  },

  // 16. Subtle Micro Plus (Plus Cross Pattern)
  {
    id: "micro-plus",
    name: "Cross Stitch Grid",
    category: "Patterns",
    description: "Subtle coordinate crosses positioned at regular intersections.",
    tags: ["cross", "plus", "pattern", "coordinate", "grid", "minimal"],
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(to right, rgba(17, 17, 19, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(17, 17, 19, 0.08) 1px, transparent 1px)
      `,
      backgroundSize: "24px 24px",
      maskImage: "radial-gradient(circle, black 30%, transparent 35%)",
      WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 35%)",
      maskSize: "24px 24px",
      WebkitMaskSize: "24px 24px",
    },
    css: `background-color: #ffffff;
background-image: 
  linear-gradient(to right, rgba(17, 17, 19, 0.08) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(17, 17, 19, 0.08) 1px, transparent 1px);
background-size: 24px 24px;
mask-image: radial-gradient(circle, black 30%, transparent 35%);
mask-size: 24px 24px;`,
    tailwind: "bg-white bg-[linear-gradient(to_right,rgba(17,17,19,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,19,0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,black_30%,transparent_35%)] [mask-size:24px_24px]",
    tsx: `export function CrossStitchBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,rgba(17,17,19,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,19,0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,black_30%,transparent_35%)] [mask-size:24px_24px]">
      {children}
    </div>
  );
}`,
  },
];
