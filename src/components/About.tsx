
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sobre mí
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Soy un desarrollador full-stack apasionado por crear experiencias digitales 
                excepcionales. Con más de 5 años de experiencia, me especializo en React, 
                Node.js y tecnologías modernas de desarrollo web.
              </p>
              
              <p>
                Mi enfoque combina diseño estético con funcionalidad robusta, siempre 
                buscando soluciones innovadoras que generen impacto real en los usuarios.
              </p>
              
              <p>
                Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
                contribuyendo a proyectos open source y compartiendo conocimiento con 
                la comunidad de desarrolladores.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Tecnologías principales</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Three.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Docker'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 font-medium hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
