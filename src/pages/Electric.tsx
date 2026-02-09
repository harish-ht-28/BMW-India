import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Battery, Leaf, ArrowRight, Gauge, Timer, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import SpeedLines from "@/components/SpeedLines";
import AnimatedCounter from "@/components/AnimatedCounter";
import { bmwModels } from "@/data/bmwModels";
import bmwElectric from "@/assets/bmw-electric.jpg";

const electricModels = bmwModels.filter((m) => m.fuelType === "Electric");

const evFeatures = [
  { icon: Battery, title: "Up to 615 km Range", description: "BMW eDrive technology delivers class-leading range with intelligent energy management for worry-free journeys." },
  { icon: Zap, title: "Ultra-Fast Charging", description: "Charge from 10% to 80% in as little as 34 minutes with DC fast charging at up to 200 kW." },
  { icon: Leaf, title: "Zero Emissions", description: "100% electric driving with zero local emissions. Sustainable luxury for a cleaner tomorrow." },
  { icon: Gauge, title: "Instant Torque", description: "Electric motors deliver maximum torque from standstill for breathtaking acceleration." },
];

const chargingSteps = [
  { step: "01", title: "BMW Wallbox", desc: "Install a BMW Wallbox at home for convenient overnight charging up to 22 kW." },
  { step: "02", title: "Public Charging", desc: "Access over 4,50,000+ public charging points across India via BMW Charging." },
  { step: "03", title: "DC Fast Charging", desc: "Get up to 120 km of range in just 10 minutes at compatible DC fast chargers." },
  { step: "04", title: "BMW Charging App", desc: "Find, navigate to, and pay for charging — all within the My BMW App." },
];

const Electric = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative h-[80vh] flex items-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src={bmwElectric} alt="BMW Electric" className="w-full h-[120%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </motion.div>
          
          {/* Electric pulse effect */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, hsl(170 80% 50%) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div className="relative container mx-auto px-4 md:px-8 pt-20" style={{ opacity: heroOpacity }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <Zap size={18} className="text-primary" />
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">BMW i — Electric</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-6 tracking-tight"
            >
              ELECTRIFY
              <br />
              <span className="text-gradient-blue">YOUR DRIVE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
            >
              Experience the future of mobility. BMW electric vehicles combine sustainable luxury with exhilarating performance and zero emissions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-8">
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={615} suffix=" km" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Max Range</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={544} suffix=" hp" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Peak Power</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black">3.7s</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">0-100 km/h</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* EV Features Grid */}
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-primary mx-auto mb-6" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Why Electric</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">The BMW Electric <span className="text-gradient-blue">Advantage</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {evFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8, borderColor: "hsl(var(--primary) / 0.4)" }}
                  className="bg-card border border-border rounded-xl p-7 transition-all duration-500 hover:shadow-glow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Electric Models */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Lineup</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">BMW Electric Vehicles</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {electricModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-glow"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img src={bmwElectric} alt={model.name} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] uppercase bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Zap size={10} /> Electric
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{model.name}</h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{model.description}</p>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50">
                        <Gauge size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.horsepower} hp</p>
                      </div>
                      <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50">
                        <Timer size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.performance.acceleration}</p>
                      </div>
                      <div className="bg-secondary/80 rounded-lg p-2.5 text-center border border-border/50">
                        <Battery size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.performance.fuelEconomy}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-foreground font-black">{model.price}</span>
                      <Link to="/catalogue" className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Charging */}
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-primary mx-auto mb-6" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Charging Solutions</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Charging Made <span className="text-gradient-blue">Easy</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">From home to highway, BMW offers a seamless charging ecosystem.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {chargingSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border rounded-xl p-7 hover:border-primary/30 transition-all duration-500 hover:shadow-glow relative overflow-hidden group"
                >
                  <span className="text-primary/10 text-8xl font-black absolute -top-4 -right-2 group-hover:text-primary/15 transition-colors duration-500">{item.step}</span>
                  <span className="text-primary text-sm font-black mb-4 block relative">{item.step}</span>
                  <h3 className="text-foreground font-bold text-lg mb-2 relative">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Sustainability</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  Driving Towards a <span className="text-gradient-blue">Greener Future</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  BMW Group aims to reduce CO₂ emissions per vehicle by at least 40% across its entire value chain by 2030.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: Leaf, text: "100% renewable energy in production" },
                    { icon: Battery, text: "Recyclable battery materials" },
                    { icon: MapPin, text: "Carbon-neutral supply chain by 2050" },
                  ].map((item) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-4"
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-card">
                  <img src={bmwElectric} alt="BMW Sustainability" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <BMWFooter />
    </div>
  );
};

export default Electric;
