import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/ui/text-reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import FloatingText from "@/components/ui/floating-text";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingServices = [
    "content creation",
    "seo",
    "brand strategy", 
    "research & analytics",
    "video production",
    "web development",
    "media planning"
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Creative healthcare team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="video-overlay absolute inset-0"></div>
      </div>

      {/* Floating Text Animation */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <FloatingText items={floatingServices} />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-20 text-center text-white max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            variants={textVariants}
            custom={0}
          >
            <motion.span 
              className="block"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              FLC
            </motion.span>
            <motion.span 
              className="block text-green-400"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Media Solutions
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl font-light mb-8"
          variants={textVariants}
          custom={0.9}
        >
          A creative healthcare and media partner
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={textVariants}
          custom={1.1}
        >
          We transform healthcare brands through innovative design, compelling storytelling, and cutting-edge digital experiences.
        </motion.p>

        <motion.div 
          className="space-x-4"
          variants={textVariants}
          custom={1.3}
        >
          <MagneticButton
            className="bg-flc-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-flc-primary-light transition-all duration-300"
            onClick={() => scrollToSection("#contact")}
          >
            Start Your Project
          </MagneticButton>
          <MagneticButton
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-flc-primary transition-all duration-300"
            onClick={() => scrollToSection("#work")}
          >
            View Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => scrollToSection("#about")}
      >
        <motion.div 
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
