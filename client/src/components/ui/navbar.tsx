import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => scrollToSection("#home")} className="flex items-center">
              <Leaf className={`text-2xl mr-2 ${isScrolled ? 'text-flc-primary' : 'text-green-400'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-flc-dark' : 'text-white'}`}>
                FLC
              </span>
              <span className={`text-2xl font-bold ml-1 ${isScrolled ? 'text-flc-primary' : 'text-green-400'}`}>
                Media
              </span>
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-flc-dark hover:text-flc-primary' 
                    : 'text-white hover:text-green-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="bg-flc-primary text-white px-6 py-2 rounded-full hover:bg-flc-primary-light transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${isScrolled ? 'text-flc-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen && (
            <div className="pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-flc-dark hover:text-flc-primary' 
                      : 'text-white hover:text-green-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="bg-flc-primary text-white px-6 py-2 rounded-full hover:bg-flc-primary-light transition-all duration-300 w-full"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Talk
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
}
