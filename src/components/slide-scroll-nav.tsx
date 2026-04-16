"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { Slide } from "@/lib/slides";

type SlideScrollNavProps = {
  previous?: Slide;
  next?: Slide;
};

const WHEEL_THRESHOLD = 120;
const TOUCH_THRESHOLD = 56;
const LOCK_MS = 650;

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export function SlideScrollNav({ previous, next }: SlideScrollNavProps) {
  const router = useRouter();
  const lockRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const targets = [previous?.href, next?.href].filter(Boolean) as string[];

    for (const href of targets) {
      router.prefetch(href);
    }
  }, [next?.href, previous?.href, router]);

  useEffect(() => {
    const releaseLock = () => {
      window.setTimeout(() => {
        lockRef.current = false;
      }, LOCK_MS);
    };

    const navigate = (href?: string) => {
      if (!href || lockRef.current) {
        return;
      }

      lockRef.current = true;
      router.push(href, { scroll: true });
      releaseLock();
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) {
        return;
      }

      navigate(event.deltaY > 0 ? next?.href : previous?.href);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (
        ["ArrowDown", "ArrowRight", "PageDown", " ", "j"].includes(event.key)
      ) {
        event.preventDefault();
        navigate(next?.href);
      }

      if (["ArrowUp", "ArrowLeft", "PageUp", "k"].includes(event.key)) {
        event.preventDefault();
        navigate(previous?.href);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartYRef.current;
      const end = event.changedTouches[0]?.clientY;

      touchStartYRef.current = null;

      if (start == null || end == null) {
        return;
      }

      const delta = start - end;

      if (Math.abs(delta) < TOUCH_THRESHOLD) {
        return;
      }

      navigate(delta > 0 ? next?.href : previous?.href);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next?.href, previous?.href, router]);

  return null;
}
