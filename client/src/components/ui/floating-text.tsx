import { motion } from "framer-motion";

interface FloatingTextProps {
  items: string[];
  className?: string;
}

export default function FloatingText({ items, className = "" }: FloatingTextProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <motion.span
            key={index}
            className="text-sm font-medium text-gray-400 mr-16 flex-shrink-0"
            whileHover={{ 
              color: "var(--flc-primary)",
              scale: 1.1 
            }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}