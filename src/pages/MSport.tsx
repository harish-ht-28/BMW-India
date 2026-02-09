import { motion, useScroll, useTransform } from "framer-motion";
import { Gauge, Flame, ArrowRight, Zap, Timer, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import SpeedLines from "@/components/SpeedLines";
import AnimatedCounter from "@/components/AnimatedCounter";
import { bmwModels } from "@/data/bmwModels";
import bmwMsport from "@/assets/bmw-msport.jpg";

const mModels = bmwModels.filter((m) => m.category === "M Sport");

const mDna = [
  { icon: Gauge, title: "Track-Bred Power", stat: "Up to 653 hp", description: "M TwinPower Turbo engines deliver explosive acceleration and relentless power, born from decades of motorsport experience." },
  { icon: Timer, title: "Lightning Acceleration", stat: "3.4s 0-100", description: "Launch control and M-tuned drivetrains catapult you from standstill to 100 km/h in a heartbeat." },
  { icon: Target, title: "Precision Handling", stat: "M-Specific", description: "Adaptive M Suspension, M Sport Differential, and M-specific chassis tuning for razor-sharp dynamics." },
  { icon: Flame, title: "Unmistakable Sound", stat: "M Exhaust", description: "The signature BMW M exhaust note announces your arrival — a deep, visceral soundtrack for every drive." },
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
            <img src={bmwMsport} alt="BMW M Sport" className="w-full h-[120%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </motion.div>
          <SpeedLines />

          {/* Red accent glow for M */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, hsl(var(--bmw-red)) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div className="relative container mx-auto px-4 md:px-8 pt-20" style={{ opacity: heroOpacity }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                {/* M Colors */}
                <div className="flex gap-1">
                  <div className="w-2 h-8 rounded-sm bg-bmw-blue" />
                  <div className="w-2 h-8 rounded-sm bg-bmw-red" />
                  <div className="w-2 h-8 rounded-sm bg-bmw-red" />
                </div>
                <div className="h-px w-8 bg-bmw-red" />
                <span className="text-bmw-red text-sm font-semibold tracking-[0.3em] uppercase">BMW M Performance</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-6 tracking-tight"
            >
              BORN ON
              <br />
              <span className="text-gradient-blue">THE TRACK</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
            >
              BMW M is the motorsport division that transforms everyday vehicles into high-performance machines. Pure power, precision engineering, and driving passion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-8">
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={653} suffix=" hp" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Peak Power</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={800} suffix=" Nm" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Max Torque</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-foreground text-3xl font-black"><AnimatedCounter value={290} suffix=" km/h" /></p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Top Speed</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* M DNA */}
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-red/30 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-bmw-red mx-auto mb-6" />
              <p className="text-bmw-red text-sm font-semibold tracking-[0.3em] uppercase mb-4">What Makes M Special</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">The M <span className="text-gradient-blue">DNA</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mDna.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-xl p-7 hover:border-bmw-red/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--bmw-red)/0.3)]"
                >
                  <div className="w-14 h-14 rounded-xl bg-bmw-red/10 border border-bmw-red/20 flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-bmw-red" />
                  </div>
                  <p className="text-bmw-red text-xs font-bold uppercase tracking-wider mb-1">{item.stat}</p>
                  <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* M Models */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-bmw-red" />
                <p className="text-bmw-red text-sm font-semibold tracking-[0.3em] uppercase">Current Lineup</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">BMW M Models in India</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {mModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-bmw-red/40 transition-all duration-500 shadow-card hover:shadow-[0_0_40px_-10px_hsl(var(--bmw-red)/0.3)]"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img src={bmwMsport} alt={model.name} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] uppercase bg-bmw-red text-primary-foreground px-3 py-1.5 rounded-full backdrop-blur-sm">
                      M Power
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-bmw-red transition-colors duration-300">{model.name}</h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{model.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
                        <p className="text-bmw-red text-xs font-bold mb-0.5">{model.performance.power}</p>
                        <p className="text-muted-foreground text-xs">Power</p>
                      </div>
                      <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
                        <p className="text-bmw-red text-xs font-bold mb-0.5">{model.performance.torque}</p>
                        <p className="text-muted-foreground text-xs">Torque</p>
                      </div>
                      <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
                        <p className="text-bmw-red text-xs font-bold mb-0.5">{model.performance.acceleration}</p>
                        <p className="text-muted-foreground text-xs">0-100 km/h</p>
                      </div>
                      <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
                        <p className="text-bmw-red text-xs font-bold mb-0.5">{model.performance.topSpeed}</p>
                        <p className="text-muted-foreground text-xs">Top Speed</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-foreground font-black">{model.price}</span>
                      <Link to="/catalogue" className="flex items-center gap-1.5 text-bmw-red text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
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
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-red/30 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-bmw-red mx-auto mb-6" />
              <p className="text-bmw-red text-sm font-semibold tracking-[0.3em] uppercase mb-4">Heritage</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">50+ Years of <span className="text-gradient-blue">M</span></h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bmw-red/50 via-primary/30 to-transparent" />
              <div className="space-y-10">
                {heritage.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-card border border-border rounded-xl p-6 hover:border-bmw-red/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--bmw-red)/0.2)]"
                      >
                        <p className="text-bmw-red text-3xl font-black mb-2">{item.year}</p>
                        <h3 className="text-foreground font-bold text-lg mb-1">{item.event}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-bmw-red mt-2 flex-shrink-0 relative z-10 shadow-[0_0_12px_hsl(var(--bmw-red)/0.5)]" />
                    <div className="flex-1 md:hidden">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <p className="text-bmw-red text-3xl font-black mb-2">{item.year}</p>
                        <h3 className="text-foreground font-bold text-lg mb-1">{item.event}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
        <section className="py-28 bg-background relative overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, hsl(var(--bmw-red)) 0%, transparent 70%)" }}
          />
          <div className="container mx-auto px-4 md:px-8 text-center relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Trophy size={56} className="text-bmw-gold mx-auto mb-8" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                BMW M <span className="text-gradient-blue">Track Experience</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed text-lg">
                Push the limits of BMW M cars on world-class racetracks with professional instructors.
              </p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-3 bg-bmw-red hover:bg-bmw-red/90 text-primary-foreground px-10 py-5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_40px_-10px_hsl(var(--bmw-red)/0.4)] hover:shadow-[0_0_60px_-10px_hsl(var(--bmw-red)/0.6)]"
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
