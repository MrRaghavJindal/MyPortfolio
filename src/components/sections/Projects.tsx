import React from 'react';
import { projects } from '../../data/portfolioData';
import * as Icons from 'lucide-react';
const Projects: React.FC = () => {
  return (
    <section className="space-y-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-600 mt-2">Some of my recent work</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex gap-2 justify-end">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Icons.ExternalLink className="text-white" size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      >
                      <Icons.Github className="text-white" size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a 
          href="https://github.com/MrraghavJindal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Icons.Github size={20} />
          <span>View More on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;