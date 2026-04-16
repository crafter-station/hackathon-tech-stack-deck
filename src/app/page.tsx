import { redirect } from "next/navigation";
import { firstSlide } from "@/lib/slides";

export default function Home() {
  redirect(`/${firstSlide.meta.slug}`);
}
