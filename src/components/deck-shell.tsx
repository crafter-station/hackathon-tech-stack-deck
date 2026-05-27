import type { ReactNode } from "react";
import { References } from "@/components/mdx/references";
import { SlideScrollNav } from "@/components/slide-scroll-nav";
import { getTotalSlides, type Slide } from "@/lib/slides";

type DeckShellProps = {
  slide: Slide;
  previous?: Slide;
  next?: Slide;
  children: ReactNode;
};

export function DeckShell({ slide, previous, next, children }: DeckShellProps) {
  const progress = `${String(slide.index + 1).padStart(2, "0")}/${String(getTotalSlides()).padStart(2, "0")}`;

  return (
    <div className="relative h-dvh overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%)]" />
      <div className="pointer-events-none deck-grid absolute inset-0 opacity-60" />
      <div className="relative flex h-dvh flex-col bg-[#080808]">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12 lg:py-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-600">
              Hackathon product workshop
            </p>
            <h1 className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-200">
              Choosing & Building Your Tech Stack
            </h1>
          </div>
        </header>
        <main className="relative flex flex-1 items-stretch bg-[#080808]">
          <section className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col overflow-hidden px-5 pb-5 pt-1 sm:px-8 sm:pb-6 lg:px-12 lg:pb-8 lg:pt-2">
            <div className="deck-stage animate-slide-in">{children}</div>
            {slide.references.length > 0 ? (
              <div className="mt-auto border-t border-white/8 pt-3 pb-3">
                <References items={slide.references} />
              </div>
            ) : null}
            <footer className="flex flex-col gap-3 border-t border-white/8 pt-3 text-xs uppercase tracking-[0.24em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span>{progress}</span>
                <span className="h-px w-10 bg-white/10" />
                <span className="text-zinc-300">{slide.meta.title}</span>
              </div>
              <div className="flex items-center gap-3">
                {previous ? (
                  <span>Back</span>
                ) : (
                  <span className="text-zinc-800">Back</span>
                )}
                <span className="h-px w-6 bg-white/10" />
                {next ? (
                  <span>Forward</span>
                ) : (
                  <span className="text-zinc-800">Forward</span>
                )}
              </div>
            </footer>
          </section>
        </main>
      </div>
      <SlideScrollNav previous={previous} next={next} />
    </div>
  );
}
