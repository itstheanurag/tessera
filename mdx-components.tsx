import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import {
  ComponentPreview,
  SimplePreview,
} from "@/components/docs/component-preview";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { PropsTable } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsCards } from "@/components/docs/docs-cards";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  "data-language"?: string;
};

type FigureProps = ComponentPropsWithoutRef<"figure"> & {
  "data-rehype-pretty-code-figure"?: string;
};

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    ComponentPreview,
    SimplePreview,
    InstallationTabs,
    PropsTable,
    CodeBlock,
    DocsCards,

    h1: (props) => (
      <h1
        className="text-balance text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground mt-0 mb-4"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="scroll-mt-24 text-[1.4rem] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground mt-14 mb-4 pb-2.5 border-b border-border/70"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="scroll-mt-24 text-[1.125rem] font-semibold leading-[1.3] tracking-[-0.015em] text-foreground mt-9 mb-3"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-[15.5px] leading-[1.7] text-muted-foreground mb-5 max-w-[68ch]"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="list-disc pl-5 mb-6 space-y-2.5 text-[15px] leading-[1.65] text-muted-foreground max-w-[68ch]"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-5 mb-6 space-y-2.5 text-[15px] leading-[1.65] text-muted-foreground max-w-[68ch]"
        {...props}
      />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-6 rounded-[14px] border border-border bg-surface px-5 py-4 text-[14.5px] leading-relaxed text-foreground"
        {...props}
      />
    ),
    code: (props: CodeProps) => {
      if (props["data-language"]) {
        return <code className="font-mono text-[13px] leading-relaxed" {...props} />;
      }
      return (
        <code
          className="rounded-md border border-border/80 bg-surface px-1.5 py-0.5 font-mono text-[0.84em] text-foreground"
          {...props}
        />
      );
    },
    figure: (props: FigureProps) => {
      if ("data-rehype-pretty-code-figure" in props) {
        return (
          <figure
            className="tessera-scrollbar relative my-6 overflow-hidden rounded-[14px] border border-black/[0.08] bg-[#f6f6f8] text-[#111113]"
            {...props}
          />
        );
      }
      return <figure {...props} />;
    },
    pre: (props) => (
      <pre
        className="tessera-scrollbar overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-[1.65]"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 w-full overflow-x-auto rounded-[14px] border border-border bg-white">
        <table
          className="w-full text-left text-[13.5px] border-collapse"
          {...props}
        />
      </div>
    ),
    th: (props) => (
      <th
        className="bg-surface px-4 py-3 font-semibold text-foreground border-b border-border"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="px-4 py-3 border-b border-border/60 text-muted-foreground align-top"
        {...props}
      />
    ),
  };
}
