import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bmwLogo from "@/assets/bmw-logo.png";

const BMWFooter = () => {
  return (
    <footer className="bg-bmw-dark border-t border-border relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Newsletter/CTA Strip */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-foreground text-xl font-black tracking-tight mb-1">Stay in the fast lane</h3>
              <p className="text-muted-foreground text-sm">Get the latest BMW news, launches, and exclusive offers.</p>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 bg-primary hover:bg-bmw-blue-glow text-primary-foreground px-8 py-3.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]"
            >
              Explore Experiences <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img src={bmwLogo} alt="BMW" className="h-10 w-10" />
              <span className="text-foreground text-lg font-black tracking-[0.15em] group-hover:text-primary transition-colors duration-300">BMW</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sheer Driving Pleasure. BMW has been setting standards in automotive excellence since 1916.
            </p>
          </div>

          {/* Models */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-[0.2em] mb-5">Models</h4>
            <ul className="space-y-3">
              {[
                { label: "All Models", to: "/models" },
                { label: "Electric Range", to: "/electric" },
                { label: "M Performance", to: "/msport" },
                { label: "Full Catalogue", to: "/catalogue" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "BMW Experience", to: "/experience" },
                { label: "Test Drive", to: "/experience" },
                { label: "Find a Dealer", to: "/experience" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
              {["BMW Financial Services", "BMW Accessories"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground/60 text-sm cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>BMW India Pvt. Ltd.</li>
              <li>DLF Cyber City, Gurgaon</li>
              <li>Haryana 122002</li>
              <li className="pt-2">
                <a href="tel:1800-102-2269" className="text-primary hover:text-bmw-blue-glow transition-colors duration-300 font-semibold">
                  1800-102-2269
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © 2026 BMW India. All rights reserved. The Ultimate Driving Machine.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings", "Legal Notice"].map((link) => (
              <span key={link} className="text-muted-foreground/60 text-xs hover:text-muted-foreground transition-colors duration-300 cursor-pointer">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BMWFooter;
