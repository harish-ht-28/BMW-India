import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Zap, Shield, Gauge, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroBmw from "@/assets/hero-bmw.jpg";
import SpeedLines from "./SpeedLines";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroBmw}
          alt="BMW Luxury Sedan"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      {/* Speed Lines Effect */}
      <SpeedLines />

      {/* Animated Glow Orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div className="relative container mx-auto px-4 md:px-8 pt-20" style={{ y: textY, opacity }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
              The Ultimate Driving Machine
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] mb-8 tracking-tight"
          >
            SHEER
            <br />
            <span className="text-gradient-blue inline-block">
              DRIVING
            </span>
            <br />
            <span className="text-foreground/90">PLEASURE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            Discover the complete BMW lineup. From elegant sedans to powerful 
            M Sport vehicles and cutting-edge electric innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              to="/catalogue"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-10 py-5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.6)]"
            >
              Explore All Models
              <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/experience"
              className="group inline-flex items-center gap-3 border-2 border-border hover:border-primary/50 text-foreground px-10 py-5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-500 hover:bg-primary/5"
            >
              <Play size={16} className="text-primary" />
              Experience BMW
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { icon: Gauge, value: 653, suffix: "", label: "Max HP", color: "text-primary" },
              { icon: Zap, value: 3.4, suffix: "s", label: "0-100 km/h", color: "text-bmw-gold" },
              { icon: Shield, value: 16, suffix: "+", label: "Models", color: "text-primary" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group flex items-center gap-4 cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/80 border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                  <stat.icon size={20} className={stat.color} />
                </div>
                <div>
                  <p className="text-foreground text-xl font-black">
                    {stat.suffix === "s" ? (
                      <>{stat.value}{stat.suffix}</>
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
