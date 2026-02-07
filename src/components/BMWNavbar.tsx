import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import bmwLogo from "@/assets/bmw-logo.png";

const navLinks = [
  { label: "Models", href: "#models" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Electric", href: "#electric" },
  { label: "M Sport", href: "#msport" },
  { label: "Experience", href: "#experience" },
];

const BMWNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={bmwLogo} alt="BMW" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-foreground text-lg font-bold tracking-wider hidden sm:block">BMW</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#catalogue"
              className="bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-300 shadow-glow"
            >
              Explore Models
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#catalogue"
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold tracking-wide text-center mt-4"
              >
                Explore Models
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default BMWNavbar;
