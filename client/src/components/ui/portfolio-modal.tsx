import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink, Mic, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    details: string;
  };
}

export default function PortfolioModal({ isOpen, onClose, project }: PortfolioModalProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'video': return <Play className="text-4xl" />;
      case 'podcast': return <Mic className="text-4xl" />;
      case 'digital': return <BarChart3 className="text-4xl" />;
      default: return <ExternalLink className="text-4xl" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <motion.h3 
                className="text-3xl font-bold text-flc-dark"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-500 hover:text-flc-dark"
              >
                <X size={24} />
              </Button>
            </div>
            
            <motion.div 
              className="mb-6 relative overflow-hidden rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-flc-primary bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  {getIcon(project.category)}
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-flc-dark mb-3">Project Details</h4>
              <p className="text-gray-600 leading-relaxed">
                {project.details}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
