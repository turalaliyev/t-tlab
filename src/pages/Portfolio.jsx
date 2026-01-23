import { useState } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import Project1 from '../assets/project1/Project1.png?url';
import Project2 from '../assets/project2/Project2.PNG?url';
import Project3 from '../assets/project3/Main.PNG?url';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL EXPERIMENTS' },
    { id: 'ecommerce', label: 'E-COMMERCE' },
    { id: 'saas', label: 'SAAS PLATFORMS' },
    { id: 'web3', label: 'WEB3 & DAPPS' },
    { id: 'design', label: 'DESIGN SYSTEMS' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Lumina SaaS',
      description: 'A high-performance analytics platform featuring real-time data streaming and custom visualization engine.',
      technologies: ['REACT', 'SUPABASE', 'TAILWIND'],
      image: Project3,
      category: 'saas',
    },
    {
      id: 2,
      title: 'Nexus Dashboard',
      description: 'Technical monitoring dashboard for multi-cloud infrastructure with predictive anomaly detection.',
      technologies: ['NEXT.JS', 'TYPESCRIPT', 'FRAMER'],
      image: Project1,
      category: 'saas',
    },
    {
      id: 3,
      title: 'Aether Commerce',
      description: 'Next-generation headless commerce platform with sub-second page loads and custom checkout flows.',
      technologies: ['VUE', 'SHOPIFY', 'GRAPHQL'],
      image: Project2,
      category: 'ecommerce',
    },
    {
      id: 4,
      title: 'Vertex Portal',
      description: 'Secure enterprise gateway for large-scale data management and internal tool synchronization.',
      technologies: ['NODE.JS', 'AWS', 'POSTGRESQL'],
      image: Project3,
      category: 'saas',
    },
    {
      id: 5,
      title: 'Core Engine',
      description: 'A proprietary backend architecture visualization tool for debugging distributed microservices.',
      technologies: ['PYTHON', 'DOCKER', 'REDIS'],
      image: Project1,
      category: 'web3',
    },
    {
      id: 6,
      title: 'Delta Interface',
      description: 'A modern, accessible design system framework built for rapid prototyping and scale.',
      technologies: ['TYPESCRIPT', 'STORYBOOK', 'FIGMA'],
      image: Project2,
      category: 'design',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Digital Engineering for the{' '}
          <span className="text-accent-primary">Modern Web</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Exploring the intersection of performance, design, and scalable code. We build the future 
          of the internet, one pixel at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors">
            View Our Work
          </button>
          <button className="px-6 py-3 border border-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/10 transition-colors">
            The Lab Journal
          </button>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 border-b border-dark-border pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'text-accent-primary border-b-2 border-accent-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-accent-primary/50 transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HiArrowUpRight className="h-6 w-6 text-accent-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto bg-dark-card border border-dark-border rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your next experiment?</h2>
        <p className="text-gray-400 mb-6">
          We're currently accepting new projects for Q3. Let's collaborate on your technical vision 
          and push the boundaries of what's possible.
        </p>
        <button className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors">
          Contact the Lab
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
