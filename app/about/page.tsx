import Header from '@/modules/about/header';
import AboutStory from '@/modules/about/story';
import MissionVision from '@/modules/about/mission-vision';
import CoreValues from '@/modules/about/core-values';
import TeamSection from '@/modules/about/team-section';
import WhyChooseUs from '@/modules/about/choose-us';

export default function AboutPage() {
  return (
    <main>
      <Header />

      <AboutStory />

      <MissionVision />

      <CoreValues />

      <TeamSection />

      <WhyChooseUs />
    </main>
  );
}
