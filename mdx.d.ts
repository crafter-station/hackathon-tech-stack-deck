declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType;
  export default MDXComponent;

  export const meta: {
    slug: string;
    title: string;
    order: number;
    theme?: "dark" | "light";
    kicker?: string;
    accent?: string;
  };

  export const notes: string[];
}
