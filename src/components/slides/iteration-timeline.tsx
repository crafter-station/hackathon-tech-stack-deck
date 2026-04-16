import type { CSSProperties } from "react";

type TimelineItem = {
  icon: "idea" | "progress" | "bug" | "settings";
  label: string;
};

const nowItems: TimelineItem[] = [
  { icon: "idea", label: "idea" },
  { icon: "progress", label: "progress" },
  { icon: "bug", label: "bugs" },
  { icon: "settings", label: "settings" },
  { icon: "progress", label: "progress" },
  { icon: "idea", label: "idea" },
  { icon: "bug", label: "bugs" },
  { icon: "progress", label: "progress" },
  { icon: "settings", label: "settings" },
  { icon: "progress", label: "progress" },
];

function Icon({ type }: { type: TimelineItem["icon"] }) {
  if (type === "idea") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 text-white"
      >
        <path
          d="M9 18h6M10 22h4M8.2 14.8C6.82 13.75 6 12.02 6 10.2A6 6 0 0 1 18 10.2c0 1.82-.82 3.55-2.2 4.6-.55.42-.8.7-.8 1.2V17H9v-1c0-.5-.25-.78-.8-1.2Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "bug") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 text-white"
      >
        <path
          d="M9 7.5 7 5.5M15 7.5l2-2M8 10H5m14 0h-3M8 14H4m16 0h-4M10 6.5h4a3.5 3.5 0 0 1 3.5 3.5v3a5.5 5.5 0 1 1-11 0v-3A3.5 3.5 0 0 1 10 6.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "settings") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 text-white"
      >
        <path
          d="M10.6 3h2.8l.6 2.1a6.9 6.9 0 0 1 1.7.7l2-1.1 2 2-1.1 2a6.9 6.9 0 0 1 .7 1.7l2.1.6v2.8l-2.1.6a6.9 6.9 0 0 1-.7 1.7l1.1 2-2 2-2-1.1a6.9 6.9 0 0 1-1.7.7l-.6 2.1h-2.8l-.6-2.1a6.9 6.9 0 0 1-1.7-.7l-2 1.1-2-2 1.1-2a6.9 6.9 0 0 1-.7-1.7L3 13.4v-2.8l2.1-.6a6.9 6.9 0 0 1 .7-1.7l-1.1-2 2-2 2 1.1a6.9 6.9 0 0 1 1.7-.7l.6-2.1Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="2.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-white">
      <path
        d="M5 16h5M10 12h4M15 8h4M5 20h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function IterationTimeline() {
  return (
    <div className="max-w-6xl space-y-6 rounded-[2.25rem] border border-white/8 bg-white/[0.02] px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.34em] text-zinc-600">
          Time to ship
        </p>
        <div className="h-px bg-white/10" />
      </div>

      <div className="space-y-6">
        <div className="grid items-center gap-4 lg:grid-cols-[96px_1fr_52px]">
          <div className="text-2xl font-medium tracking-[-0.05em] text-zinc-200">
            Before
          </div>
          <div className="space-y-3">
            <div className="flex justify-center text-white">
              <Icon type="settings" />
            </div>
            <div className="h-5 rounded-full bg-white/85 shadow-[0_0_24px_rgba(255,255,255,0.08)]" />
          </div>
          <div className="flex justify-end text-white/85">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
              <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-5c1.2-1.1 2.55-1.65 4-1.65S14.8 14.9 16 16m-6.5-5.25h.01M14.5 10.75h.01"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </div>
        </div>

        <div className="grid items-end gap-4 lg:grid-cols-[96px_1fr_52px]">
          <div className="text-2xl font-medium tracking-[-0.05em] text-white">
            Now
          </div>
          <div className="grid grid-cols-5 gap-x-3 gap-y-3 sm:grid-cols-10">
            {nowItems.map((item, index) => (
              <div key={`${item.label}-${index}`} className="space-y-2">
                <div
                  className="timeline-line h-4 rounded-full bg-white/85 shadow-[0_0_16px_rgba(255,255,255,0.08)]"
                  style={
                    {
                      "--line-delay": `${180 + index * 120}ms`,
                    } as CSSProperties
                  }
                />
                <div
                  className="timeline-item flex justify-center"
                  style={
                    {
                      "--item-delay": `${240 + index * 120}ms`,
                    } as CSSProperties
                  }
                >
                  <Icon type={item.icon} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end text-white">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
              <path
                d="m4 16 6-6 4 4 6-6M14 8h6v6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
