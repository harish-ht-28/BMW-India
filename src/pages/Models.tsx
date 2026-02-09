import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Gauge, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import SpeedLines from "@/components/SpeedLines";
import AnimatedCounter from "@/components/AnimatedCounter";
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
  { name: "Sedan Series", filter: "Sedan", description: "Elegance meets performance in every BMW sedan. From the iconic 3 Series to the flagship 7 Series.", accent: "from-primary/10 to-transparent" },
  { name: "X Series (SUV)", filter: "SUV", description: "Command every road with BMW's Sports Activity Vehicles — built for adventure and luxury.", accent: "from-bmw-gold/10 to-transparent" },
  { name: "Coupé & Gran Coupé", filter: "Coupé", description: "Striking design and athletic performance define the BMW Coupé range.", accent: "from-primary/10 to-transparent" },
  { name: "Electric Range", filter: "Electric", description: "Zero emissions, full driving pleasure. The future of BMW is electric.", accent: "from-green-500/10 to-transparent" },
  { name: "M Performance", filter: "M Sport", description: "Born on the racetrack, built for the road. BMW M delivers pure motorsport DNA.", accent: "from-bmw-red/10 to-transparent" },
];

const Models = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero Banner */}
        <section ref={heroRef} className="relative h-[75vh] flex items-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src={heroBmw} alt="BMW Models" className="w-full h-[120%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </motion.div>
          <SpeedLines />
          <motion.div className="relative container mx-auto px-4 md:px-8 pt-20" style={{ opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Complete Lineup</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-6 tracking-tight"
            >
              ALL <span className="text-gradient-blue">MODELS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              Explore the entire BMW range — from agile sedans to commanding SUVs, cutting-edge electrics, and track-bred M cars.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-10"
            >
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={16} suffix="+" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Models</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={5} /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Categories</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={653} /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Max HP</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Series Groups */}
        {seriesGroups.map((group, gIndex) => {
          const models = bmwModels.filter((m) => m.category === group.filter);
          return (
            <section key={group.name} className={`py-24 relative overflow-hidden ${gIndex % 2 === 0 ? "bg-background" : "bg-bmw-dark"}`}>
              {/* Subtle gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent`} />
              
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="mb-14"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8 bg-primary" />
                    <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{group.filter}</p>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 tracking-tight">{group.name}</h2>
                  <p className="text-muted-foreground max-w-xl leading-relaxed">{group.description}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {models.map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12, duration: 0.6 }}
                      whileHover={{ y: -8 }}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-glow"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <motion.img
                          src={imageMap[model.image] || heroBmw}
                          alt={model.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] uppercase bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full backdrop-blur-sm">
                          {model.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{model.name}</h3>
                        <p className="text-muted-foreground text-xs mb-5 line-clamp-2 leading-relaxed">{model.description}</p>

                        <div className="grid grid-cols-3 gap-2 mb-5">
                          <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50 group-hover:border-primary/20 transition-colors">
                            <Gauge size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-bold">{model.horsepower} hp</p>
                          </div>
                          <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50 group-hover:border-primary/20 transition-colors">
                            <Zap size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-bold">{model.acceleration.split(" ")[0]}</p>
                          </div>
                          <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50 group-hover:border-primary/20 transition-colors">
                            <Users size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-foreground text-xs font-bold">{model.seating} seats</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <span className="text-foreground font-black text-sm">{model.price}</span>
                          <Link to="/catalogue" className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
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
        <section className="py-28 bg-background relative overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          />
          <div className="container mx-auto px-4 md:px-8 text-center relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                Ready to Find <span className="text-gradient-blue">Your BMW</span>?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
                Browse our full catalogue with advanced filters to find the perfect BMW for you.
              </p>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-3 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-10 py-5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.6)]"
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
