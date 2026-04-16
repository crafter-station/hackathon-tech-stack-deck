import type { ComponentPropsWithoutRef } from "react";

export function Prose({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex max-w-4xl flex-col gap-6 ${className}`.trim()}
      {...props}
    />
  );
}
