import type { ReactNode } from "react";

type QuoteProps = {
  children: ReactNode;
  author: string;
  source?: string;
};

export function Quote({ children, author, source }: QuoteProps) {
  return (
    <figure className="max-w-4xl space-y-8 border-l border-white/12 pl-6 sm:pl-8">
      <blockquote className="text-pretty text-3xl font-medium tracking-[-0.06em] text-white sm:text-5xl sm:leading-[1.02]">
        {children}
      </blockquote>
      <figcaption className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        <span className="text-zinc-300">{author}</span>
        {source ? <span>{source}</span> : null}
      </figcaption>
    </figure>
  );
}
