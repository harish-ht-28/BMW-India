import { motion } from "framer-motion";

const SpeedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{
            top: `${15 + i * 10}%`,
            left: "-10%",
            width: "120%",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2.5 + i * 0.3,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 3 + i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLines;
