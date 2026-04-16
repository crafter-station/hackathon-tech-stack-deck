import type { CSSProperties } from "react";

const points = ["confusing", "ugly", "unclear", "not useful"];

export function CareMatters() {
  return (
    <div className="grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6 rounded-[2rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8">
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-600">
            The trap
          </div>
          <div className="h-px bg-white/10" />
        </div>
        <p className="max-w-none text-2xl tracking-[-0.05em] text-white sm:text-3xl">
          AI makes it easy to build something quickly.
        </p>
        <p className="max-w-none text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
          But that doesn’t mean it’s good.
        </p>
      </div>

      <div className="space-y-4 rounded-[2rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8">
        <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-600">
          If your product feels
        </div>
        <div className="grid gap-3">
          {points.map((point, index) => (
            <div
              key={point}
              className="timeline-item flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-black/30 px-4 py-3"
              style={
                { "--item-delay": `${120 + index * 120}ms` } as CSSProperties
              }
            >
              <span className="text-lg tracking-[-0.04em] text-zinc-100">
                {point}
              </span>
              <span className="text-zinc-500">x</span>
            </div>
          ))}
        </div>
        <div
          className="timeline-item rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4"
          style={
            {
              "--item-delay": `${120 + points.length * 120}ms`,
            } as CSSProperties
          }
        >
          <p className="max-w-none text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
            Even simple things can feel good if they’re clear and thoughtful.
          </p>
        </div>
      </div>
    </div>
  );
}
