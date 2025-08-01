import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ExternalLink, Mic, BarChart3 } from "lucide-react";
import PortfolioModal from "@/components/ui/portfolio-modal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "1",
      title: "Healthcare Campaign Video",
      description: "Professional medical video production for patient education and brand awareness",
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "video",
      icon: <Play className="text-4xl" />,
      details: "A comprehensive video production campaign for a leading healthcare provider, focusing on patient education and brand awareness. This project involved scriptwriting, professional filming, and post-production to create engaging content that resonates with both patients and healthcare professionals."
    },
    {
      id: "2",
      title: "Doctor Branding Package",
      description: "Complete brand identity design for medical practice",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "branding",
      icon: <ExternalLink className="text-4xl" />,
      details: "Complete brand identity design for a medical practice, including logo design, business cards, letterheads, and digital assets. This project established a professional and trustworthy brand presence that resonates with patients and colleagues."
    },
    {
      id: "3",
      title: "Medical Podcast Series",
      description: "Professional podcast production for medical professionals",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "podcast",
      icon: <Mic className="text-4xl" />,
      details: "Professional podcast production for medical professionals sharing expertise and insights. This includes studio setup, recording, editing, and distribution across major podcast platforms to build thought leadership."
    },
    {
      id: "4",
      title: "Digital Health Campaign",
      description: "Comprehensive digital strategy for healthcare organization",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "digital",
      icon: <BarChart3 className="text-4xl" />,
      details: "Comprehensive digital marketing strategy for a healthcare organization, including social media management, content creation, SEO optimization, and paid advertising campaigns to increase patient engagement and brand awareness."
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="py-20 md:py-32 bg-white">
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
            Our Latest Work
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how we've transformed healthcare brands through innovative design and strategic communication
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-flc-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-white">
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What We Do Section */}
        <motion.section 
          className="mt-32 py-20 md:py-32 bg-flc-primary text-white rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Do</h2>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                We bridge the gap between healthcare expertise and compelling storytelling through innovative media solutions
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Healthcare Focus",
                  description: "Specialized understanding of healthcare regulations, patient needs, and medical communication requirements."
                },
                {
                  title: "Innovation Driven",
                  description: "Cutting-edge technologies and creative approaches to healthcare marketing and brand communication."
                },
                {
                  title: "Patient-Centric",
                  description: "Every solution designed with patient experience and healthcare outcomes at the center of our strategy."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full opacity-60"></div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-90 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Portfolio Modal */}
      {selectedProject && (
        <PortfolioModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
