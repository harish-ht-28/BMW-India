import { motion } from "framer-motion";
import { Zap, Battery, Leaf, ArrowRight, Gauge, Timer, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import { bmwModels } from "@/data/bmwModels";
import bmwElectric from "@/assets/bmw-electric.jpg";
import heroBmw from "@/assets/hero-bmw.jpg";

const electricModels = bmwModels.filter((m) => m.fuelType === "Electric");

const evFeatures = [
  {
    icon: Battery,
    title: "Up to 615 km Range",
    description: "BMW eDrive technology delivers class-leading range with intelligent energy management for worry-free journeys.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Charging",
    description: "Charge from 10% to 80% in as little as 34 minutes with DC fast charging at up to 200 kW.",
  },
  {
    icon: Leaf,
    title: "Zero Emissions",
    description: "100% electric driving with zero local emissions. Sustainable luxury for a cleaner tomorrow.",
  },
  {
    icon: Gauge,
    title: "Instant Torque",
    description: "Electric motors deliver maximum torque from standstill for breathtaking acceleration.",
  },
];

const chargingSteps = [
  { step: "01", title: "BMW Wallbox", desc: "Install a BMW Wallbox at home for convenient overnight charging up to 22 kW." },
  { step: "02", title: "Public Charging", desc: "Access over 4,50,000+ public charging points across India via BMW Charging." },
  { step: "03", title: "DC Fast Charging", desc: "Get up to 120 km of range in just 10 minutes at compatible DC fast chargers." },
  { step: "04", title: "BMW Charging App", desc: "Find, navigate to, and pay for charging — all within the My BMW App." },
];

const Electric = () => {
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={bmwElectric} alt="BMW Electric" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 pt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={18} className="text-primary" />
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">BMW i — Electric</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-foreground leading-none mb-4"
            >
              ELECTRIFY
              <br />
              <span className="text-gradient-blue">YOUR DRIVE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mb-8"
            >
              Experience the future of mobility. BMW electric vehicles combine sustainable luxury with exhilarating performance and zero emissions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">615 km</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Max Range</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">544 hp</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Peak Power</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">3.7s</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">0-100 km/h</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EV Features Grid */}
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Why Electric</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The BMW Electric Advantage</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {evFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <feature.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Electric Models */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Lineup</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">BMW Electric Vehicles</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {electricModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-card"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={bmwElectric} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{model.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-secondary rounded p-2 text-center">
                        <Gauge size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.horsepower} hp</p>
                      </div>
                      <div className="bg-secondary rounded p-2 text-center">
                        <Timer size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.performance.acceleration}</p>
                      </div>
                      <div className="bg-secondary rounded p-2 text-center">
                        <Battery size={14} className="text-primary mx-auto mb-1" />
                        <p className="text-foreground text-xs font-bold">{model.performance.fuelEconomy}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-bold">{model.price}</span>
                      <Link to="/catalogue" className="flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all">
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
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Charging Solutions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Charging Made Easy</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From home to highway, BMW offers a seamless charging ecosystem.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {chargingSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <span className="text-primary text-3xl font-black mb-3 block">{item.step}</span>
                  <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Sustainability</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Driving Towards a Greener Future</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BMW Group aims to reduce CO₂ emissions per vehicle by at least 40% across its entire value chain by 2030. Our electric vehicles are manufactured using 100% renewable energy, and we are committed to a fully circular economy.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Leaf, text: "100% renewable energy in production" },
                    { icon: Battery, text: "Recyclable battery materials" },
                    { icon: MapPin, text: "Carbon-neutral supply chain by 2050" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
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
