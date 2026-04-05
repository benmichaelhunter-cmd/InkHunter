import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import FeaturedProject from "@/components/home/FeaturedProject";
import VideoFeature from "@/components/home/VideoFeature";
import TrustBadges from "@/components/home/TrustBadges";
import InstagramFeed from "@/components/home/InstagramFeed";
import WaveDivider from "@/components/ui/WaveDivider";
import { getFeaturedProject } from "@/lib/content";

export default async function Home() {
  const featuredProject = await getFeaturedProject();

  return (
    <>
      <Hero />
      <WaveDivider color="#ffffff" />
      <Pillars />
      <VideoFeature />
      {featuredProject && <FeaturedProject project={featuredProject} />}
      <TrustBadges />
      <InstagramFeed />
    </>
  );
}
