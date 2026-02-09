import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Gauge, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import bmwSuv from "@/assets/bmw-suv.jpg";
import bmwElectric from "@/assets/bmw-electric.jpg";
import bmwMsport from "@/assets/bmw-msport.jpg";

const showcaseItems = [
  {
    title: "BMW X Range",
    subtitle: "Sports Activity Vehicles",
    description: "Command every road with confidence and luxury in BMW's iconic SUV lineup.",
    image: bmwSuv,
    link: "/models",
    tag: "SUV",
    stat: "381 hp",
    statLabel: "X7 Power",
    icon: Shield,
  },
  {
    title: "BMW Electric",
    subtitle: "Zero Emissions, Full Thrill",
    description: "Experience the future of driving with BMW's revolutionary all-electric vehicles.",
    image: bmwElectric,
    link: "/electric",
    tag: "Electric",
    stat: "615 km",
    statLabel: "Max Range",
    icon: Zap,
  },
  {
    title: "BMW M",
    subtitle: "Born on the Track",
    description: "Pure motorsport performance engineered for the open road. Unleash the beast.",
    image: bmwMsport,
    link: "/msport",
    tag: "M Sport",
    stat: "653 hp",
    statLabel: "XM Power",
    icon: Gauge,
  },
];

const ModelsShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="models" className="py-32 bg-bmw-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-px bg-primary mx-auto mb-6"
          />
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Discover
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Our Flagship <span className="text-gradient-blue">Ranges</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <Link key={item.title} to={item.link}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -12 }}
                className="group relative rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-700"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Floating Stat */}
                  <motion.div
                    className="absolute top-4 right-4 glass border border-border/50 rounded-lg px-3 py-2 flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    <item.icon size={14} className="text-primary" />
                    <div>
                      <p className="text-foreground text-xs font-bold">{item.stat}</p>
                      <p className="text-muted-foreground text-[10px]">{item.statLabel}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 relative">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3 bg-primary/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-medium mb-3">{item.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase group-hover:gap-4 transition-all duration-500">
                    <span>Explore</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-bmw-blue-glow to-primary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;
