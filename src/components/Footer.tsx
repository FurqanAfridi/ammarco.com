import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="/logo-ammarco.png" 
              alt="AMMARCO Engineering Associates" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Quality and durability wrapped in a combination of archetypal contemporary designs – brought to you through exemplary professionalism.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors relative group inline-block"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Civil Construction",
                "Electrical Systems",
                "HVAC Solutions",
                "Security Systems",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+923335766744"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  +92 333 5766744
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <a
                    href="mailto:info@ammarco.pk"
                    className="text-gray-300 hover:text-secondary transition-colors block"
                  >
                    info@ammarco.pk
                  </a>
                  <a
                    href="mailto:ammarco.pk@gmail.com"
                    className="text-gray-300 hover:text-secondary transition-colors block"
                  >
                    ammarco.pk@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ammarco Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
