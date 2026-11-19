import { ExploreSection } from '@/components/sections/ExploreSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeBand } from '@/components/sections/MarqueeBand';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <MarqueeBand />
      <ExploreSection />
    </main>
  );
}
