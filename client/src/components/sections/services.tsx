import { motion } from "framer-motion";
import { UserCheck, Mic, Pill, Video, Palette, TrendingUp } from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

export default function Services() {
  const services = [
    {
      icon: UserCheck,
      title: "Doctor Branding",
      description: "Professional brand identity and positioning for healthcare practitioners to build trust and authority."
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description: "End-to-end podcast creation for medical professionals to share expertise and build thought leadership."
    },
    {
      icon: Pill,
      title: "Pharma Social Media",
      description: "Compliant and engaging social media strategies for pharmaceutical brands and healthcare organizations."
    },
    {
      icon: Video,
      title: "Medical Video Shoots",
      description: "Professional video production for educational content, procedures, and healthcare marketing campaigns."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Innovative visual design solutions for healthcare communications, from print to digital platforms."
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies tailored for healthcare brands and medical practices."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-flc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-flc-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive healthcare media solutions tailored to elevate your brand and engage your audience
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
