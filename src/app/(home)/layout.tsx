import { baseOptions } from "@/lib/layout.shared";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default function Layout({ children }: LayoutProps<"/">) {
  return <DocsLayout {...baseOptions()}>{children}</DocsLayout>;
}
