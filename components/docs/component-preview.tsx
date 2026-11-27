"use client";

import React, { useState, useEffect, Suspense, useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { registry } from "@/registry/registry-data";
import { exampleRegistry } from "@/registry/example-registry";
import { CodeViewer, escapeHtml } from "./code-viewer";
import { cn } from "@/registry/tessera/lib/utils";

interface ComponentPreviewProps {
  name: string;
  className?: string;
}

export function ComponentPreview({ name, className }: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [code, setCode] = useState<string>("");
  const [highlightedHtml, setHighlightedHtml] = useState<string>("");
  const reduceMotion = useReducedMotion();
  const tabId = useId();

  const registryItem = registry[name];
  const exampleItem = exampleRegistry[name];
  const item = registryItem || exampleItem;
  const isExample = !!exampleItem;
  const itemPath = item?.path ?? "";

  // Prefetch highlighted code on mount so switching Preview -> Code has zero flicker
  useEffect(() => {
    if (!itemPath) return;
    let active = true;

    if (isExample) {
      fetch(`/api/code?path=${encodeURIComponent(itemPath)}`)
        .then((res) => res.json())
        .then((result) => {
          if (!active) return;
          setCode(result.code || "");
          setHighlightedHtml(result.html || "");
        })
        .catch(() => {});
    } else {
      fetch(`/r/${name}.json`)
        .then((res) => res.json())
        .then((registryData) => {
          const file = registryData.files?.find(
            (f: { type: string }) => f.type === "registry:component",
          );
          if (!active || !file?.content) return;
          setCode(file.content);
          fetch("/api/code", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: file.content }),
          })
            .then((res) => res.json())
            .then((highlightResult) => {
              if (!active) return;
              setHighlightedHtml(
                highlightResult.html ||
                  `<pre>${escapeHtml(file.content)}</pre>`,
              );
            })
            .catch(() => {});
        })
        .catch(() => {});
    }

    return () => {
      active = false;
    };
  }, [itemPath, isExample, name]);

  if (!item) {
    return (
      <div className="my-6 rounded-[14px] border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Component &ldquo;{name}&rdquo; not found.
      </div>
    );
  }

  const PreviewComponent = item.component;

  if (!PreviewComponent) {
    return (
      <div className="my-6 rounded-[14px] border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Component &ldquo;{name}&rdquo; has no preview.
      </div>
    );
  }

  const filename = item.path.split("/").pop() ?? `${name}.tsx`;

  return (
    <div className={cn("my-6", className)}>
      {/* Recessed stone bezel + dotted workbench preview stage */}
      <div className="rounded-[20px] border border-black/[0.07] bg-[#e9e9ee] p-1.5">
        <div className="overflow-hidden rounded-[15px] border border-black/[0.07] bg-white">
          {/* Header bar */}
          <div className="flex items-center justify-between gap-3 border-b border-black/[0.07] bg-[#f4f4f6] px-4 py-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="truncate text-[13px] font-medium text-foreground">
                {item.title}
              </span>
              {isExample && (
                <span className="rounded-full border border-black/[0.07] bg-white px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">
                  example
                </span>
              )}
            </div>

            <div className="inline-flex items-center gap-1 rounded-full bg-[#e6e6eb] p-0.5">
              {(["preview", "code"] as const).map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "relative rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId={`preview-tab-${tabId}`}
                        transition={
                          reduceMotion
                            ? { duration: 0.08 }
                            : { type: "spring", stiffness: 450, damping: 34 }
                        }
                        className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(17,17,19,0.08)]"
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content area — instant toggle with zero flicker */}
          {activeTab === "preview" ? (
            <div
              className="flex min-h-[340px] items-center justify-center bg-[#ececf0] p-6 sm:p-10"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(17, 17, 19, 0.1) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            >
              <Suspense
                fallback={
                  <div className="text-sm text-muted-foreground">
                    Loading preview…
                  </div>
                }
              >
                <PreviewComponent />
              </Suspense>
            </div>
          ) : (
            <CodeViewer
              code={code}
              highlightedHtml={highlightedHtml}
              filename={filename}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function SimplePreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-6 flex min-h-[200px] items-center justify-center rounded-[16px] border border-border bg-[#ececf0] p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
