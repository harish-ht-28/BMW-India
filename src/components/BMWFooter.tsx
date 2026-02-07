import { Link } from "react-router-dom";
import bmwLogo from "@/assets/bmw-logo.png";

const BMWFooter = () => {
  return (
    <footer className="bg-bmw-dark border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={bmwLogo} alt="BMW" className="h-10 w-10" />
              <span className="text-foreground text-lg font-bold tracking-wider">BMW</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sheer Driving Pleasure. BMW has been setting standards in automotive excellence since 1916.
            </p>
          </div>

          {/* Models */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Models</h4>
            <ul className="space-y-2">
              {[
                { label: "All Models", to: "/models" },
                { label: "Electric Range", to: "/electric" },
                { label: "M Performance", to: "/msport" },
                { label: "Full Catalogue", to: "/catalogue" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "BMW Experience", to: "/experience" },
                { label: "Test Drive", to: "/experience" },
                { label: "Find a Dealer", to: "/experience" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              {["BMW Financial Services", "BMW Accessories"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>BMW India Pvt. Ltd.</li>
              <li>DLF Cyber City, Gurgaon</li>
              <li>Haryana 122002</li>
              <li className="pt-2">
                <a href="tel:1800-102-2269" className="text-primary hover:text-bmw-blue-glow transition-colors">
                  1800-102-2269
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 BMW India. All rights reserved. The Ultimate Driving Machine.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings", "Legal Notice"].map((link) => (
              <span key={link} className="text-muted-foreground text-xs hover:text-foreground transition-colors cursor-pointer">
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
