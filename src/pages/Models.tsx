import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import { bmwModels } from "@/data/bmwModels";
import bmwSuv from "@/assets/bmw-suv.jpg";
import bmwElectric from "@/assets/bmw-electric.jpg";
import bmwMsport from "@/assets/bmw-msport.jpg";
import heroBmw from "@/assets/hero-bmw.jpg";

const imageMap: Record<string, string> = {
  sedan: heroBmw,
  suv: bmwSuv,
  electric: bmwElectric,
  msport: bmwMsport,
};

const seriesGroups = [
  { name: "Sedan Series", filter: "Sedan", description: "Elegance meets performance in every BMW sedan. From the iconic 3 Series to the flagship 7 Series." },
  { name: "X Series (SUV)", filter: "SUV", description: "Command every road with BMW's Sports Activity Vehicles — built for adventure and luxury." },
  { name: "Coupé & Gran Coupé", filter: "Coupé", description: "Striking design and athletic performance define the BMW Coupé range." },
  { name: "Electric Range", filter: "Electric", description: "Zero emissions, full driving pleasure. The future of BMW is electric." },
  { name: "M Performance", filter: "M Sport", description: "Born on the racetrack, built for the road. BMW M delivers pure motorsport DNA." },
];

const Models = () => {
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBmw} alt="BMW Models" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 pt-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            >
              Complete Lineup
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-foreground leading-none mb-4"
            >
              ALL <span className="text-gradient-blue">MODELS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl"
            >
              Explore the entire BMW range — from agile sedans to commanding SUVs, cutting-edge electrics, and track-bred M cars.
            </motion.p>
          </div>
        </section>

        {/* Series Groups */}
        {seriesGroups.map((group, gIndex) => {
          const models = bmwModels.filter((m) => m.category === group.filter);
          return (
            <section key={group.name} className={`py-20 ${gIndex % 2 === 0 ? "bg-background" : "bg-bmw-dark"}`}>
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-2">{group.filter}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{group.name}</h2>
                  <p className="text-muted-foreground max-w-xl">{group.description}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {models.map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-card"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={imageMap[model.image] || heroBmw}
                          alt={model.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 text-xs font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded-sm">
                          {model.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{model.name}</h3>
                        <p className="text-muted-foreground text-xs mb-4 line-clamp-2">{model.description}</p>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="bg-secondary rounded p-2 text-center">
                            <Gauge size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-semibold">{model.horsepower} hp</p>
                          </div>
                          <div className="bg-secondary rounded p-2 text-center">
                            <Zap size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-semibold">{model.acceleration.split(" ")[0]}</p>
                          </div>
                          <div className="bg-secondary rounded p-2 text-center">
                            <Users size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-semibold">{model.seating} seats</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-bold text-sm">{model.price}</span>
                          <Link to="/catalogue" className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                            Details <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Find Your BMW?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">Browse our full catalogue with advanced filters to find the perfect BMW for you.</p>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 shadow-glow"
              >
                View Full Catalogue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <BMWFooter />
    </div>
  );
};

export default Models;
