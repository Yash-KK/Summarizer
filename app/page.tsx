import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DemoSection />
    </div>
  );
}
