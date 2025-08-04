import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";

export default function CtaBanner() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-flc-dark text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Large animated text like Schbang */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                IT'S TIME TO CREATE
              </motion.h2>
            </motion.div>
            
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-none text-flc-primary"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                A HEALTHCARE
              </motion.h2>
            </motion.div>
            
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                REVOLUTION
              </motion.h2>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Ready to transform your healthcare brand? Let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <MagneticButton
              className="bg-flc-primary text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-flc-primary-light transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Create Magic Together
            </MagneticButton>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-flc-primary rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/3 right-16 w-6 h-6 bg-white rounded-full opacity-40"
            animate={{
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-flc-secondary rounded-full opacity-50"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  );
}