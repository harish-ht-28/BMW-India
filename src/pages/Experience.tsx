import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Star, Phone, Clock, Shield, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
import SpeedLines from "@/components/SpeedLines";
import bmwMsport from "@/assets/bmw-msport.jpg";
import bmwSuv from "@/assets/bmw-suv.jpg";
import bmwElectric from "@/assets/bmw-electric.jpg";
import heroBmw from "@/assets/hero-bmw.jpg";

const experiences = [
  {
    title: "BMW M Track Day",
    description: "Get behind the wheel of the BMW M4 Competition on a professional racetrack. Professional instructors guide you through high-speed cornering, braking techniques, and performance driving.",
    image: bmwMsport,
    duration: "Full Day",
    location: "Buddh International Circuit, Greater Noida",
    participants: "12 per session",
    highlights: ["M4 Competition driving", "Professional instruction", "Lap time tracking", "Lunch & refreshments"],
  },
  {
    title: "BMW xDrive Adventure",
    description: "Take the BMW X range off-road through challenging terrain. Experience the capability of xDrive all-wheel drive in mud, gravel, and steep inclines.",
    image: bmwSuv,
    duration: "Half Day",
    location: "BMW Off-Road Experience Center, Gurgaon",
    participants: "8 per session",
    highlights: ["Off-road course", "X5 & X7 experience", "Terrain coaching", "Certificate of completion"],
  },
  {
    title: "BMW i Electric Experience",
    description: "Discover the world of BMW electric mobility. Test drive the full BMW i range and learn about EV technology, charging infrastructure, and the future of driving.",
    image: bmwElectric,
    duration: "3 Hours",
    location: "BMW Experience Centre, Mumbai",
    participants: "15 per session",
    highlights: ["i4, iX & i7 test drives", "EV technology workshop", "Charging demonstration", "Sustainability session"],
  },
  {
    title: "BMW Luxury Tour",
    description: "Experience the pinnacle of luxury with the BMW 7 Series on a curated scenic drive through the Western Ghats. Fine dining, luxury stays, and unforgettable roads.",
    image: heroBmw,
    duration: "2 Days",
    location: "Mumbai to Mahabaleshwar",
    participants: "10 couples",
    highlights: ["7 Series chauffeur experience", "5-star luxury stay", "Gourmet dining", "Scenic route navigation"],
  },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "BMW M4 Owner", text: "The M Track Day was an absolutely thrilling experience. Driving the M4 at full throttle with professional guidance was a dream come true.", rating: 5 },
  { name: "Priya Sharma", role: "BMW iX Owner", text: "The Electric Experience opened my eyes to the incredible technology behind BMW's EVs. I ordered my iX the very next day!", rating: 5 },
  { name: "Arjun Mehta", role: "BMW X5 Owner", text: "The xDrive Adventure was fantastic. I had no idea my X5 could handle such extreme off-road conditions. Truly impressive.", rating: 5 },
];

const dealers = [
  { city: "Mumbai", address: "BMW Infinity Cars, Andheri West", phone: "+91 22 6789 0123" },
  { city: "Delhi NCR", address: "BMW Bird Automotive, DLF Cyber City, Gurgaon", phone: "+91 124 456 7890" },
  { city: "Bangalore", address: "BMW Navnit Motors, MG Road", phone: "+91 80 4567 8901" },
  { city: "Chennai", address: "BMW KUN Exclusive, Anna Salai", phone: "+91 44 3456 7890" },
  { city: "Hyderabad", address: "BMW Deutsche Motoren, Jubilee Hills", phone: "+91 40 2345 6789" },
  { city: "Pune", address: "BMW Momentum, Bund Garden Road", phone: "+91 20 6789 0123" },
];

const Experience = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative h-[75vh] flex items-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src={bmwMsport} alt="BMW Experience" className="w-full h-[120%] object-cover" />
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
              <Play size={16} className="text-primary" />
              <div className="h-px w-8 bg-primary" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">BMW Experience</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-6 tracking-tight"
            >
              LIVE THE
              <br />
              <span className="text-gradient-blue">THRILL</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              Go beyond the showroom. Experience BMW's performance, luxury, and innovation through immersive driving events and curated journeys.
            </motion.p>
          </motion.div>
        </section>

        {/* Experiences */}
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Driving Events</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Upcoming Experiences</h2>
            </motion.div>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-glow group"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <motion.img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{exp.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-primary flex-shrink-0" />
                          <span className="text-foreground text-xs font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-primary flex-shrink-0" />
                          <span className="text-foreground text-xs font-medium truncate">{exp.location.split(",")[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-primary flex-shrink-0" />
                          <span className="text-foreground text-xs font-medium">{exp.participants}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.highlights.map((h) => (
                          <span key={h} className="text-xs bg-secondary/80 text-muted-foreground px-3 py-1.5 rounded-full border border-border/50">{h}</span>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.5)] w-fit">
                        Register Interest <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-primary mx-auto mb-6" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">What Drivers <span className="text-gradient-blue">Say</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-glow relative"
                >
                  <div className="text-primary/10 text-6xl font-black absolute top-4 right-6">"</div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-bmw-gold fill-bmw-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic relative">"{t.text}"</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-foreground font-bold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Test Drive CTA */}
        <section className="py-28 bg-bmw-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Book Now</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  Schedule a <span className="text-gradient-blue">Test Drive</span>
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Experience any BMW model firsthand. Visit your nearest BMW dealership or book a test drive from the comfort of your home.
                </p>
                <div className="space-y-5 mb-10">
                  {[
                    { icon: Calendar, text: "Choose your preferred date & time" },
                    { icon: MapPin, text: "Select your nearest BMW dealership" },
                    { icon: Shield, text: "Complimentary with no obligation" },
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
                <button className="inline-flex items-center gap-3 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-10 py-5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.6)]">
                  Book Test Drive <ArrowRight size={18} />
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-shadow duration-500">
                  <img src={heroBmw} alt="BMW Test Drive" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dealer Network */}
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px bg-primary mx-auto mb-6" />
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Dealer Network</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">Find Your <span className="text-gradient-blue">BMW Dealer</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealers.map((dealer, index) => (
                <motion.div
                  key={dealer.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group"
                >
                  <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">{dealer.city}</h3>
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{dealer.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{dealer.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BMWFooter />
    </div>
  );
};

export default Experience;
