import bmwLogo from "@/assets/bmw-logo.png";

const BMWFooter = () => {
  return (
    <footer className="bg-bmw-dark border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={bmwLogo} alt="BMW" className="h-10 w-10" />
              <span className="text-foreground text-lg font-bold tracking-wider">BMW</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sheer Driving Pleasure. BMW has been setting standards in automotive excellence since 1916.
            </p>
          </div>

          {/* Models */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Models</h4>
            <ul className="space-y-2">
              {["3 Series", "5 Series", "7 Series", "X3", "X5", "i4", "M4"].map((item) => (
                <li key={item}>
                  <a href="#catalogue" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    BMW {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Build Your BMW", "Test Drive", "Find a Dealer", "BMW Financial Services", "BMW Accessories"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
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
              <a key={link} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BMWFooter;
