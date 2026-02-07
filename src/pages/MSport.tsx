import { motion } from "framer-motion";
import { Gauge, Flame, ArrowRight, Zap, Timer, Trophy, Target, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import { bmwModels } from "@/data/bmwModels";
import bmwMsport from "@/assets/bmw-msport.jpg";
import heroBmw from "@/assets/hero-bmw.jpg";

const mModels = bmwModels.filter((m) => m.category === "M Sport");

const mDna = [
  {
    icon: Gauge,
    title: "Track-Bred Power",
    stat: "Up to 653 hp",
    description: "M TwinPower Turbo engines deliver explosive acceleration and relentless power, born from decades of motorsport experience.",
  },
  {
    icon: Timer,
    title: "Lightning Acceleration",
    stat: "3.4s 0-100",
    description: "Launch control and M-tuned drivetrains catapult you from standstill to 100 km/h in a heartbeat.",
  },
  {
    icon: Target,
    title: "Precision Handling",
    stat: "M-Specific",
    description: "Adaptive M Suspension, M Sport Differential, and M-specific chassis tuning for razor-sharp dynamics.",
  },
  {
    icon: Flame,
    title: "Unmistakable Sound",
    stat: "M Exhaust",
    description: "The signature BMW M exhaust note announces your arrival — a deep, visceral soundtrack for every drive.",
  },
];

const heritage = [
  { year: "1972", event: "BMW Motorsport GmbH Founded", desc: "The birth of BMW M division in Munich, Germany." },
  { year: "1978", event: "BMW M1 Supercar", desc: "The first-ever BMW M car — a mid-engine masterpiece designed for racing." },
  { year: "1986", event: "E30 M3 Debut", desc: "The most successful touring car in history. The legend begins." },
  { year: "2000", event: "E46 M3 — The Icon", desc: "Widely regarded as the greatest M car ever made." },
  { year: "2014", event: "First M with Turbo", desc: "The F80 M3 introduced turbocharged inline-6 power to the M lineage." },
  { year: "2023", event: "BMW XM — New Era", desc: "The first M-exclusive model since M1, combining V8 power with electric drive." },
];

const MSport = () => {
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={bmwMsport} alt="BMW M Sport" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 pt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-6 rounded-sm bg-bmw-blue" />
                  <div className="w-2 h-6 rounded-sm bg-bmw-red" />
                  <div className="w-2 h-6 rounded-sm bg-bmw-red" />
                </div>
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">BMW M Performance</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-foreground leading-none mb-4"
            >
              BORN ON
              <br />
              <span className="text-gradient-blue">THE TRACK</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mb-8"
            >
              BMW M is the motorsport division that transforms everyday vehicles into high-performance machines. Pure power, precision engineering, and driving passion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">653 hp</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Peak Power</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">800 Nm</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Max Torque</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-foreground text-3xl font-black">290 km/h</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Top Speed</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* M DNA */}
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">What Makes M Special</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The M DNA</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mDna.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{item.stat}</p>
                  <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* M Models */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Current Lineup</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">BMW M Models in India</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {mModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-card"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={bmwMsport} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-bold tracking-wider uppercase bg-bmw-red text-primary-foreground px-3 py-1 rounded-sm">
                      M Power
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{model.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-secondary rounded p-3">
                        <p className="text-primary text-xs font-bold mb-0.5">{model.performance.power}</p>
                        <p className="text-muted-foreground text-xs">Power</p>
                      </div>
                      <div className="bg-secondary rounded p-3">
                        <p className="text-primary text-xs font-bold mb-0.5">{model.performance.torque}</p>
                        <p className="text-muted-foreground text-xs">Torque</p>
                      </div>
                      <div className="bg-secondary rounded p-3">
                        <p className="text-primary text-xs font-bold mb-0.5">{model.performance.acceleration}</p>
                        <p className="text-muted-foreground text-xs">0-100 km/h</p>
                      </div>
                      <div className="bg-secondary rounded p-3">
                        <p className="text-primary text-xs font-bold mb-0.5">{model.performance.topSpeed}</p>
                        <p className="text-muted-foreground text-xs">Top Speed</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-foreground font-bold">{model.price}</span>
                      <Link to="/catalogue" className="flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all">
                        Configure <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Heritage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">50+ Years of M</h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {heritage.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="bg-card border border-border rounded-lg p-5">
                        <p className="text-primary text-2xl font-black mb-1">{item.year}</p>
                        <h3 className="text-foreground font-bold mb-1">{item.event}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 relative z-10" />
                    <div className="flex-1 md:hidden">
                      <div className="bg-card border border-border rounded-lg p-5">
                        <p className="text-primary text-2xl font-black mb-1">{item.year}</p>
                        <h3 className="text-foreground font-bold mb-1">{item.event}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Track Experience CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Trophy size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">BMW M Track Experience</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Push the limits of BMW M cars on world-class racetracks with professional instructors. The ultimate thrill for driving enthusiasts.
              </p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 shadow-glow"
              >
                Explore Experiences <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <BMWFooter />
    </div>
  );
};

export default MSport;
