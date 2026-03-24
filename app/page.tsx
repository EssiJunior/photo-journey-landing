import Hero from "@/containers/Hero";
import Mindset from "@/containers/Mindset";
import Lens from "@/containers/Lens";
import Marrakech from "@/containers/Marrakech";
import SocialMedia from "@/containers/SocialMedia";
import Closing from "@/containers/Closing";
import RelatedErticles from "@/containers/RelatedArticles";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Mindset />
      <Lens />
      <Marrakech />
      <SocialMedia />
      <Closing />
      <RelatedErticles />
    </main>
  );
}
