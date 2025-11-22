import { source } from "@/lib/source";
import { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps & DocsLayoutProps {
  return {
    nav: {
      title: "Fire",
    },
    sidebar: {
      defaultOpenLevel: 99,
    },
    tree: source.pageTree,
  };
}
