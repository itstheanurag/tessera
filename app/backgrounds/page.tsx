import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackgroundsGallery } from "@/components/docs/backgrounds-gallery";

export const metadata: Metadata = {
  title: "Backgrounds & Gradients — Tessera",
  description:
    "Curated collection of modern CSS gradients, ambient mesh textures, and clean background patterns. Ready to copy for Tailwind CSS v4, raw CSS, or React TSX.",
};

export default function BackgroundsPage() {
  return (
    <div className="relative min-h-screen text-foreground flex flex-col">
      {/* Full-page vibrant background */}
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

      <Navbar />

      <main className="flex-1 pt-12 pb-24 sm:pt-16 sm:pb-28">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <h1 className="text-balance text-[2.5rem] sm:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.18)]">
              Backgrounds &amp; Gradients
            </h1>
            <p className="text-base sm:text-[17px] leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.18)]">
              Modern CSS gradients, subtle mesh auroras, and architectural grid
              patterns. Copy Tailwind CSS v4 classes, raw CSS, or React TSX in
              one click.
            </p>
          </div>

          <BackgroundsGallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}
