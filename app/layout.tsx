import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tessera — Tactile React UI components built for AI workflows",
  description:
    "Fluid, spring-driven React and Tailwind CSS v4 components you copy directly into your codebase.",
  metadataBase: new URL("https://tessera.ui"),
  keywords: [
    "React",
    "UI Components",
    "Next.js",
    "Tailwind CSS",
    "Motion",
    "Design Engineering",
  ],
  authors: [{ name: "Gaurav", url: "https://github.com/itstheanurag" }],
  openGraph: {
    title: "Tessera — Tactile React UI components",
    description:
      "Fluid, spring-driven React and Tailwind CSS v4 components you copy directly into your codebase.",
    url: "https://tessera.ui",
    siteName: "Tessera",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tessera",
    description:
      "Fluid, spring-driven React and Tailwind CSS v4 components you own in source.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased bg-background text-foreground font-sans"
      >
        {children}
      </body>
    </html>
  );
}
