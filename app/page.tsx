import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
    </div>
  );
}
