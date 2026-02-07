import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import CarCatalogue from "@/components/CarCatalogue";

const Catalogue = () => {
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main className="pt-20">
        <CarCatalogue />
      </main>
      <BMWFooter />
    </div>
  );
};

export default Catalogue;
