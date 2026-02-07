import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp, Fuel, Gauge, Zap, Users, Settings } from "lucide-react";
import { useState } from "react";
import { BMWModel } from "@/data/bmwModels";
import StarRating from "./StarRating";
import bmwSuv from "@/assets/bmw-suv.jpg";
import bmwElectric from "@/assets/bmw-electric.jpg";
import bmwMsport from "@/assets/bmw-msport.jpg";
import heroBmw from "@/assets/hero-bmw.jpg";

const imageMap: Record<string, string> = {
  sedan: heroBmw,
  suv: bmwSuv,
  electric: bmwElectric,
  msport: bmwMsport,
};

interface CarDetailDrawerProps {
  car: BMWModel | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailDrawer = ({ car, isOpen, onClose }: CarDetailDrawerProps) => {
  const [showTimeDetails, setShowTimeDetails] = useState(false);

  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto"
          >
            {/* Header Image */}
            <div className="relative h-56">
              <img
                src={imageMap[car.image] || heroBmw}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 pb-8 -mt-10 relative">
              {/* Title */}
              <div className="mb-6">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-2">
                  {car.category}
                </span>
                <h2 className="text-2xl font-bold text-foreground">{car.name}</h2>
                <p className="text-muted-foreground text-sm mt-1">{car.series} • {car.category}</p>
                <StarRating rating={car.rating} size={16} />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{car.description}</p>
              </div>

              {/* Price */}
              <div className="bg-secondary rounded-lg p-4 mb-6">
                <p className="text-xs text-muted-foreground mb-1">Starting Price</p>
                <p className="text-2xl font-bold text-foreground">{car.price}</p>
                <p className="text-xs text-muted-foreground">Ex-showroom price</p>
              </div>

              {/* Performance with expandable */}
              <div className="mb-6">
                <button
                  onClick={() => setShowTimeDetails(!showTimeDetails)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-foreground uppercase tracking-wider mb-3"
                >
                  <span>Performance</span>
                  {showTimeDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Gauge size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">Power</span>
                    </div>
                    <p className="text-foreground font-semibold">{car.performance.power}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">Torque</span>
                    </div>
                    <p className="text-foreground font-semibold">{car.performance.torque}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Gauge size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">0-100 km/h</span>
                    </div>
                    <p className="text-foreground font-semibold">{car.performance.acceleration}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Gauge size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">Top Speed</span>
                    </div>
                    <p className="text-foreground font-semibold">{car.performance.topSpeed}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {showTimeDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-secondary rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Fuel size={14} className="text-primary" />
                            <span className="text-xs text-muted-foreground">Economy</span>
                          </div>
                          <p className="text-foreground font-semibold">{car.performance.fuelEconomy}</p>
                        </div>
                        <div className="bg-secondary rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Settings size={14} className="text-primary" />
                            <span className="text-xs text-muted-foreground">Transmission</span>
                          </div>
                          <p className="text-foreground font-semibold text-xs">{car.transmission}</p>
                        </div>
                        <div className="bg-secondary rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Settings size={14} className="text-primary" />
                            <span className="text-xs text-muted-foreground">Drivetrain</span>
                          </div>
                          <p className="text-foreground font-semibold">{car.drivetrain}</p>
                        </div>
                        <div className="bg-secondary rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Users size={14} className="text-primary" />
                            <span className="text-xs text-muted-foreground">Seating</span>
                          </div>
                          <p className="text-foreground font-semibold">{car.seating} seats</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dimensions */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Dimensions</h3>
                <div className="bg-secondary rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(car.dimensions).map(([key, value]) => (
                        <tr key={key} className="border-b border-border last:border-0">
                          <td className="px-4 py-2.5 text-muted-foreground capitalize">{key}</td>
                          <td className="px-4 py-2.5 text-foreground font-medium text-right">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CarDetailDrawer;
