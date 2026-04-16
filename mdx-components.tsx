import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { Prose } from "@/components/mdx/prose";
import { Quote } from "@/components/mdx/quote";
import { References } from "@/components/mdx/references";
import { CareMatters } from "@/components/slides/care-matters";
import { IterationTimeline } from "@/components/slides/iteration-timeline";

function paragraphClassName(className?: string) {
  return [
    "max-w-3xl text-balance text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function Paragraph({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={paragraphClassName(className)} {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-5xl font-semibold tracking-[-0.085em] text-white sm:text-6xl lg:text-7xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-3xl font-semibold tracking-[-0.075em] text-white sm:text-4xl lg:text-5xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl"
        {...props}
      />
    ),
    p: Paragraph,
    ul: (props) => (
      <ul
        className="flex max-w-3xl list-none flex-col gap-3 text-lg text-zinc-200 sm:text-xl"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="flex max-w-3xl list-decimal flex-col gap-3 pl-6 text-lg text-zinc-200 sm:text-xl"
        {...props}
      />
    ),
    li: (props) => <li className="leading-8 marker:text-zinc-500" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-white" {...props} />
    ),
    hr: (props) => <hr className="border-white/10" {...props} />,
    a: (props) => (
      <a
        className="text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l border-white/12 pl-6 text-zinc-200"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="overflow-x-auto rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-sm text-zinc-100"
        {...props}
      />
    ),
    code: (props) => (
      <code className="font-mono text-[0.95em] text-zinc-100" {...props} />
    ),
    Prose,
    Quote,
    References,
    IterationTimeline,
    CareMatters,
    ...components,
  };
}
