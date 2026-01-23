import { Link } from 'react-router-dom';
import { HiBolt, HiArrowUpRight } from 'react-icons/hi2';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Q4 Banner */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card border border-accent-primary/30 rounded-full">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <span className="text-sm text-accent-primary font-medium">NOW ACCEPTING Q4 PROJECTS</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Architecting the{' '}
              <span className="text-accent-primary">Future</span> of the Web
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              T&T Lab builds high-performance React & Vue applications powered by headless CMS architecture. 
              Precision engineering for the modern digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                to="/stack"
                className="px-6 py-3 border border-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/10 transition-colors"
              >
                Explore Our Stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Showcase */}
      <section className="py-12 border-y border-dark-border bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-white">
              <FaReact className="h-6 w-6 text-accent-primary" />
              <span className="font-medium">REACT.JS</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaVuejs className="h-6 w-6 text-accent-primary" />
              <span className="font-medium">VUE.JS</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <SiNextdotjs className="h-6 w-6 text-accent-primary" />
              <span className="font-medium">NEXT.JS</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <HiBolt className="h-6 w-6 text-accent-primary" />
              <span className="font-medium">HEADLESS CMS</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaAws className="h-6 w-6 text-accent-primary" />
              <span className="font-medium">AWS/VERCEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-accent-primary font-medium mb-2">CORE COMPETENCIES</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Engineering Excellence</h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              We build digital products that are fast, secure, and ready to scale. Our approach combines 
              aesthetic precision with technical rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lightning Fast */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                <HiBolt className="h-16 w-16 text-accent-primary opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized Core Web Vitals for maximum performance. We aim for 100/100 Lighthouse scores 
                on every deployment.
              </p>
            </div>

            {/* Scalable Infrastructure */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-accent-primary rounded-full opacity-50" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-400">
                Built for growth with modern cloud-native architecture. Microservices and serverless 
                functions at the core.
              </p>
            </div>

            {/* Content First */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                <div className="text-accent-primary/50 font-mono text-xs">
                  {'<Content />'}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Content First</h3>
              <p className="text-gray-400">
                Seamless Headless CMS Integration for effortless editing. Empower your marketing team 
                without breaking the build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Technology Stack</h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'React', icon: FaReact },
              { name: 'Vue.js', icon: FaVuejs },
              { name: 'Next.js', icon: SiNextdotjs },
              { name: 'Contentful', icon: HiBolt },
              { name: 'Strapi', icon: HiBolt },
              { name: 'GraphQL', icon: HiBolt },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center hover:border-accent-primary transition-colors"
              >
                <tech.icon className="h-8 w-8 text-accent-primary mx-auto mb-2" />
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4">
            Ready to upgrade your web presence?
          </h2>
          <p className="text-lg text-dark-bg/80 mb-8">
            Join the dozens of companies who have transformed their digital experience with our 
            specialized development solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark-bg rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Our Lab Today
            <HiArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
