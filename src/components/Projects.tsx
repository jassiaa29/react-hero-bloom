
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export const Projects = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico moderna con React, Node.js y PostgreSQL. Incluye sistema de pagos, inventario y dashboard administrativo.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "Sitio web interactivo con animaciones 3D usando Three.js y React. Diseño responsivo con efectos de paralaje y transiciones suaves.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["React", "Three.js", "GSAP", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funciones colaborativas, notificaciones en tiempo real y sincronización en la nube.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Firebase", "TypeScript", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Code Generator",
      description: "Herramienta que utiliza IA para generar código basado en descripciones en lenguaje natural. Integración con OpenAI API.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, donde combino creatividad 
            y tecnología para crear soluciones innovadoras.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
