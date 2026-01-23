import { useState } from 'react';
import { HiBolt, HiArrowUp } from 'react-icons/hi2';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiSupabase, SiFirebase, SiGraphql, SiSentry } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const TechnologyStack = () => {
  const [activeModule, setActiveModule] = useState('all');

  const modules = [
    { id: 'all', label: 'ALL MODULES' },
    { id: 'frontend', label: '01/FRONTEND' },
    { id: 'backend', label: '02/BACKEND' },
    { id: 'infrastructure', label: '03/INFRASTRUCTURE' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="mb-4">
          <div className="w-12 h-0.5 bg-accent-primary mb-2" />
          <p className="text-sm text-accent-primary font-medium">DIGITAL LABORATORY V2.0</p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Technology <span className="text-accent-primary">Stack.</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-6">
          A curated selection of best-in-class tools and frameworks meticulously tuned for 
          high-performance digital experiences.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 border border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary/10 transition-colors">
          <HiArrowUp className="h-4 w-4" />
          View Architecture
        </button>
      </section>

      {/* Module Navigation */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 border-b border-dark-border pb-4">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeModule === module.id
                  ? 'text-accent-primary border-b-2 border-accent-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {module.label}
            </button>
          ))}
        </div>
      </section>

      {/* Core Frontend System */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">CORE_FRONTEND_SYSTEM</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Reactive UI Architectures</h2>
          <p className="text-gray-400 mb-6">
            We utilize React and Vue for building dynamic, high-fidelity user interfaces that scale 
            across any screen size.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <FaReact className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">React.js</p>
              <p className="text-xs text-gray-400">COMPONENT_BASED</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <FaVuejs className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Vue.js</p>
              <p className="text-xs text-gray-400">REACTIVE_SYNC</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <SiTailwindcss className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Tailwind</p>
              <p className="text-xs text-gray-400">UTILITY_FIRST</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <HiBolt className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Ant Design</p>
              <p className="text-xs text-gray-400">ENTERPRISE_UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Server Runtime & Content Layer Grid */}
      <section className="max-w-7xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
        {/* Server Runtime */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">SERVER_RUNTIME</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Engine & Data</h2>
          <p className="text-gray-400 mb-6">
            Robust server logic and real-time database synchronization for reliable enterprise applications.
          </p>
          <div className="space-y-4">
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiNodedotjs className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Node.js</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">v20_LTS</span>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiSupabase className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Supabase</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">POSTGRES</span>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiFirebase className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Firebase</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">SERVERLESS</span>
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">CONTENT_LAYER</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Sanity.io</h2>
          <p className="text-gray-400">
            Composability first, headless content management.
          </p>
        </div>
      </section>

      {/* Deployment */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Vercel & AWS</h2>
          <p className="text-gray-400">
            Optimized delivery for the modern edge network.
          </p>
        </div>
      </section>

      {/* System Components */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-2">System Components</h2>
        <p className="text-gray-400 mb-8">Deep dive into the specialized tools that power our workflow.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiNextdotjs className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Next.js 14</h3>
            </div>
            <p className="text-gray-400">
              Full-stack React framework with server actions and optimized rendering.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiGraphql className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">GraphQL</h3>
            </div>
            <p className="text-gray-400">
              Type-safe data fetching layer for complex frontend-backend interactions.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <HiBolt className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Auth.js</h3>
            </div>
            <p className="text-gray-400">
              Secure, flexible authentication system for modern web applications.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiSentry className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Sentry</h3>
            </div>
            <p className="text-gray-400">
              Real-time error tracking and performance monitoring dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Optimized Infrastructure */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <div className="h-64 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-3">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-accent-primary rounded-full opacity-50" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">NODE_CLUSTER_STATUS:</span>
                <span className="text-sm text-green-400 font-mono">STABLE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">LATENCY:</span>
                <span className="text-sm text-white font-mono">12ms</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Optimized Infrastructure</h2>
            <p className="text-gray-400 mb-6">
              Beyond just code, we engineer the environments where your applications live. From CI/CD 
              pipelines to auto-scaling server clusters, we ensure 99.9% uptime and lightning-fast global delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiBolt className="h-5 w-5 text-accent-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Edge Computing</h3>
                  <p className="text-sm text-gray-400">Running logic closer to users to reduce latency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiBolt className="h-5 w-5 text-accent-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Docker Containerization</h3>
                  <p className="text-sm text-gray-400">Consistent environments from dev to production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
