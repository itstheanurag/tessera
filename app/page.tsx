import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { ShowcaseBento } from "@/components/landing/showcase-bento";
import { InstallBand } from "@/components/landing/install-band";
import { CloseCta } from "@/components/landing/close-cta";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Full-page colorful light background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{ backgroundImage: "url('/landing-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 text-sm font-medium text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ShowcaseBento />
        <InstallBand />
        <CloseCta />
      </main>
      <Footer />
    </div>
  );
}
