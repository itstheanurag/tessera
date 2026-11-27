"use client";

import React from "react";
import { cn } from "@/registry/tessera/lib/utils";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export const PropsTable: React.FC<PropsTableProps> = ({ props, className }) => {
  return (
    <div
      className={cn(
        "my-6 overflow-x-auto rounded-[14px] border border-border bg-white",
        className,
      )}
    >
      <table className="w-full text-[13.5px] border-collapse">
        <thead>
          <tr className="border-b border-border bg-surface/80">
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Prop
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Type
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Default
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={cn(
                "border-b border-border/60 transition-colors hover:bg-surface/40",
                index === props.length - 1 && "border-b-0",
              )}
            >
              <td className="py-3.5 px-4 align-top whitespace-nowrap">
                <code className="rounded-md border border-border/80 bg-surface px-1.5 py-0.5 font-mono text-xs font-medium text-foreground">
                  {prop.name}
                </code>
                {prop.required && (
                  <span
                    className="ml-1 text-destructive text-xs font-medium"
                    title="Required"
                  >
                    *
                  </span>
                )}
              </td>
              <td className="py-3.5 px-4 align-top">
                <code className="font-mono text-xs text-foreground/75">
                  {prop.type}
                </code>
              </td>
              <td className="py-3.5 px-4 align-top whitespace-nowrap">
                {prop.default ? (
                  <code className="font-mono text-xs text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="py-3.5 px-4 align-top leading-relaxed text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
