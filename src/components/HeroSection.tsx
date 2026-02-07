import { motion } from "framer-motion";
import { ChevronRight, Zap, Shield, Gauge } from "lucide-react";
import heroBmw from "@/assets/hero-bmw.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBmw}
          alt="BMW Luxury Sedan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            The Ultimate Driving Machine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none mb-6"
          >
            SHEER
            <br />
            <span className="text-gradient-blue">DRIVING</span>
            <br />
            PLEASURE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Discover the complete BMW lineup. From elegant sedans to powerful M Sport vehicles and cutting-edge electric innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 shadow-glow group"
            >
              Explore All Models
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#models"
              className="inline-flex items-center gap-2 border border-border hover:border-muted-foreground text-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all duration-300"
            >
              View Highlights
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                <Gauge size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground text-lg font-bold">653</p>
                <p className="text-muted-foreground text-xs">Max HP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                <Zap size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground text-lg font-bold">3.4s</p>
                <p className="text-muted-foreground text-xs">0-100 km/h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                <Shield size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground text-lg font-bold">16+</p>
                <p className="text-muted-foreground text-xs">Models</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
