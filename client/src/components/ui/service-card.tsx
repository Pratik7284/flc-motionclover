import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 bg-flc-primary rounded-2xl flex items-center justify-center mb-6"
        whileHover={{ 
          rotate: 5,
          scale: 1.1
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="text-white text-2xl" size={24} />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-flc-dark mb-4 group-hover:text-flc-primary transition-colors duration-300"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
