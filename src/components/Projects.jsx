import { useState } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  // Template data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'A modern web application built with React and cutting-edge technologies.',
      technologies: ['React', 'Tailwind', 'Sanity'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/00ff88?text=Project+1',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'An innovative solution for modern businesses with real-time features.',
      technologies: ['React', 'Firebase', 'Ant Design'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=Project+2',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'A scalable platform with advanced features and modern architecture.',
      technologies: ['React', 'Supabase', 'Tailwind'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+3',
      liveUrl: '#',
      codeUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-dark-card rounded-lg overflow-hidden border border-dark-border transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-dark-surface text-accent-primary rounded-full border border-accent-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent-primary text-dark-bg rounded-lg font-medium text-sm transition-all duration-300 hover:bg-accent-secondary hover:scale-105"
                  >
                    <HiExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-dark-border text-gray-300 rounded-lg font-medium text-sm transition-all duration-300 hover:border-accent-primary hover:text-accent-primary hover:scale-105"
                  >
                    <HiCode className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Effect Glow */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 border-2 border-accent-primary rounded-lg pointer-events-none animate-glow" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
