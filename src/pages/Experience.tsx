import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Star, Phone, Mail, Clock, Shield, Gauge, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import BMWNavbar from "@/components/BMWNavbar";
import BMWFooter from "@/components/BMWFooter";
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
  {
    name: "Rajesh Kumar",
    role: "BMW M4 Owner",
    text: "The M Track Day was an absolutely thrilling experience. Driving the M4 at full throttle with professional guidance was a dream come true.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "BMW iX Owner",
    text: "The Electric Experience opened my eyes to the incredible technology behind BMW's EVs. I ordered my iX the very next day!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "BMW X5 Owner",
    text: "The xDrive Adventure was fantastic. I had no idea my X5 could handle such extreme off-road conditions. Truly impressive.",
    rating: 5,
  },
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
  return (
    <div className="min-h-screen bg-background">
      <BMWNavbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={bmwMsport} alt="BMW Experience" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 md:px-8 pt-20">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              BMW Experience
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-foreground leading-none mb-4"
            >
              LIVE THE
              <br />
              <span className="text-gradient-blue">THRILL</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-lg max-w-xl">
              Go beyond the showroom. Experience BMW's performance, luxury, and innovation through immersive driving events and curated journeys.
            </motion.p>
          </div>
        </section>

        {/* Experiences */}
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Driving Events</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Experiences</h2>
            </motion.div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{exp.description}</p>
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-primary" />
                          <span className="text-foreground text-xs">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-primary" />
                          <span className="text-foreground text-xs truncate">{exp.location.split(",")[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-primary" />
                          <span className="text-foreground text-xs">{exp.participants}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.highlights.map((h) => (
                          <span key={h} className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">{h}</span>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-6 py-3 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 shadow-glow w-fit">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Drivers Say</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-bmw-gold fill-bmw-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Test Drive CTA */}
        <section className="py-20 bg-bmw-dark">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Book Now</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule a Test Drive</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Experience any BMW model firsthand. Visit your nearest BMW dealership or book a test drive from the comfort of your home with our doorstep delivery service.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Calendar, text: "Choose your preferred date & time" },
                    { icon: MapPin, text: "Select your nearest BMW dealership" },
                    { icon: Shield, text: "Complimentary with no obligation" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 shadow-glow">
                  Book Test Drive <ArrowRight size={18} />
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img src={heroBmw} alt="BMW Test Drive" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dealer Network */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">Dealer Network</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Find Your BMW Dealer</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dealers.map((dealer, index) => (
                <motion.div
                  key={dealer.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-all"
                >
                  <h3 className="text-foreground font-bold mb-2">{dealer.city}</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{dealer.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
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
