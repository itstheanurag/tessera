import type { ReactNode } from "react";
import { DocsNavbar } from "@/components/docs/docs-navbar";
import { DocsSidebar } from "@/components/docs/sidebar";
import { TableOfContents } from "@/components/docs/toc";

export const metadata = {
  title: "Tessera Documentation",
  description:
    "Guides, installation, and source-owned React UI components built with Tailwind CSS v4 and Motion.",
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f4f6] text-foreground flex flex-col">
      <DocsNavbar />

      <div className="w-full flex-1 flex">
        {/* Left sidebar — pinned to the left edge */}
        <aside className="hidden lg:block w-[264px] shrink-0 border-r border-black/[0.08] bg-[#f4f4f6]">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-5 py-7">
            <DocsSidebar />
          </div>
        </aside>

        {/* Center main reading section */}
        <main className="flex-1 min-w-0 bg-white">
          <div className="mx-auto max-w-[820px] px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
            <article className="w-full">{children}</article>
          </div>
        </main>

        {/* Right TOC sidebar — pinned to the right edge */}
        <aside className="hidden xl:block w-[256px] shrink-0 border-l border-black/[0.08] bg-[#f4f4f6]">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-6 py-8">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
