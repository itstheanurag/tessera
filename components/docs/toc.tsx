"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUp } from "react-icons/fi";
import { cn } from "@/registry/tessera/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timeoutId = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("article h2, article h3"),
      );

      const tocItems: TOCItem[] = elements
        .map((elem) => ({
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        }))
        .filter((item) => item.id);

      setHeadings(tocItems);
      setActiveId(tocItems[0]?.id ?? "");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0% 0% -75% 0%" },
      );

      elements.forEach((elem) => observer?.observe(elem));
    }, 60);

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-[11.5px] font-semibold tracking-wide text-foreground/50 uppercase">
          On this page
        </p>
        <ul className="relative space-y-1 border-l border-black/[0.1]">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li key={heading.id} className="relative">
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1px] top-1.5 bottom-1.5 w-[2px] rounded-full bg-foreground"
                  />
                )}
                <a
                  href={`#${heading.id}`}
                  style={{
                    paddingLeft: heading.level === 3 ? "1.35rem" : "0.85rem",
                  }}
                  className={cn(
                    "block py-1 text-[13px] leading-snug transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-black/[0.08] pt-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          <FiArrowUp className="h-3.5 w-3.5" />
          <span>Back to top</span>
        </button>
      </div>
    </div>
  );
}
