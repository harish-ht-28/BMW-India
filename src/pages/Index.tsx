import BMWNavbar from "@/components/BMWNavbar";
import HeroSection from "@/components/HeroSection";
import ModelsShowcase from "@/components/ModelsShowcase";
import CarCatalogue from "@/components/CarCatalogue";
import BMWFooter from "@/components/BMWFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        <HeroSection />
        <ModelsShowcase />
        <CarCatalogue />
      </main>
      <BMWFooter />
    </div>
  );
};

export default Index;
