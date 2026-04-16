type Reference = {
  label: string;
  href: string;
};

type ReferencesProps = {
  items: Reference[];
  title?: string;
};

export function References({ items, title = "References" }: ReferencesProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-0 text-[11px] uppercase tracking-[0.24em] text-zinc-500">
      <span className="text-zinc-600">{title}</span>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-3 py-1.5 text-zinc-300 transition-colors hover:border-white/18 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
