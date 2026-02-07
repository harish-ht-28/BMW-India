import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  },
  {
    title: "BMW Electric",
    subtitle: "Zero Emissions, Full Thrill",
    description: "Experience the future of driving with BMW's all-electric vehicles.",
    image: bmwElectric,
    link: "/electric",
    tag: "Electric",
  },
  {
    title: "BMW M",
    subtitle: "Born on the Track",
    description: "Pure motorsport performance engineered for the open road.",
    image: bmwMsport,
    link: "/msport",
    tag: "M Sport",
  },
];

const ModelsShowcase = () => {
  return (
    <section id="models" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Discover
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Flagship Ranges
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <Link key={item.title} to={item.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative rounded-lg overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={16} />
                  </div>
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
