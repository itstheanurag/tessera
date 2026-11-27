import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function CloseCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1160px] px-6 sm:px-8 text-center">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-white/65 bg-white/55 px-8 py-12 shadow-[var(--shadow-float)] backdrop-blur-2xl space-y-6">
          <h2 className="text-balance text-3xl sm:text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            Build interfaces that feel alive.
          </h2>
          <p className="text-base sm:text-[17px] leading-relaxed text-muted-foreground">
            Start with one component, inspect every line of TypeScript, and
            shape it with your AI workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/docs"
              className="group tessera-press relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_26px_-6px_rgba(17,17,19,0.35)] hover:bg-[#1c1c20]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-full border border-dashed border-white/30 transition-colors duration-200 group-hover:border-white/50"
              />
              <span className="relative z-10">Open documentation</span>
              <FiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" />
            </Link>

            <a
              href="https://github.com/itstheanurag/bitsandpieces"
              target="_blank"
              rel="noopener noreferrer"
              className="group tessera-press relative inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-foreground shadow-[var(--shadow-sm)] hover:bg-surface"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-full border border-dashed border-black/20 transition-colors duration-200 group-hover:border-black/38"
              />
              <span className="relative z-10">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
