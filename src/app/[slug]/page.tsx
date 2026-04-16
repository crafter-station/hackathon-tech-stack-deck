import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeckShell } from "@/components/deck-shell";
import {
  getAdjacentSlides,
  getSlideBySlug,
  getSlideComponent,
  slides,
} from "@/lib/slides";

export const dynamicParams = false;

type SlidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return slides.map((slide) => ({ slug: slide.meta.slug }));
}

export async function generateMetadata({
  params,
}: SlidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const slide = getSlideBySlug(slug);

  if (!slide) {
    return {};
  }

  return {
    title: `${slide.meta.title} | From Idea to Internet`,
    description: `Slide ${slide.index + 1} from the workshop presentation.`,
  };
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { slug } = await params;
  const slide = getSlideBySlug(slug);

  if (!slide) {
    notFound();
  }

  const { previous, next } = getAdjacentSlides(slug);
  const Component = getSlideComponent(slug);

  if (!Component) {
    notFound();
  }

  return (
    <DeckShell slide={slide} previous={previous} next={next}>
      <Component />
    </DeckShell>
  );
}
