import Hero from "@/components/Hero";
import WeaponShowcase from "@/components/WeaponShowcase";
import StorySection from "@/components/StorySection";
import ModInfo from "@/components/ModInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <WeaponShowcase />
      <StorySection />
      <ModInfo />
    </div>
  );
};

export default Index;
