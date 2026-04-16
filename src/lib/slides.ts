import {
  type SlideMeta,
  type SlideRecord,
  type SlideReference,
  slideRecords,
} from "@/generated/slides-manifest";

export type SlideTheme = "dark" | "light";
export type { SlideMeta, SlideRecord, SlideReference };

export const slides = slideRecords.map(
  ({ Component: _component, ...slide }) => slide,
);

export type Slide = (typeof slides)[number];

export const firstSlide = slides[0];

export function getSlideBySlug(slug: string) {
  return slides.find((slide) => slide.meta.slug === slug);
}

export function getAdjacentSlides(slug: string) {
  const currentIndex = slides.findIndex((slide) => slide.meta.slug === slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: slides[currentIndex - 1],
    next: slides[currentIndex + 1],
  };
}

export function getSlideComponent(slug: string) {
  return slideRecords.find((slide) => slide.meta.slug === slug)?.Component;
}

export function getTotalSlides() {
  return slides.length;
}
