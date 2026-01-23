import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiGraphql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { HiBolt } from 'react-icons/hi2';

const CaseStudy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-accent-primary/10 border border-accent-primary/30 rounded-full mb-4">
                <span className="text-sm text-accent-primary font-medium">CASE STUDY: E-COMMERCE</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                NexGen <span className="text-accent-primary">E-Commerce</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Redefining digital retail with a modern, high-performance web solution built for scale 
                and lightning-fast user interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors">
                  View Live Site
                  <HiArrowTopRightOnSquare className="h-5 w-5" />
                </button>
                <button className="px-6 py-3 border border-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/10 transition-colors">
                  Client Interview
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-accent-primary/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <HiBolt className="h-12 w-12 text-accent-primary" />
                    </div>
                    <p className="text-gray-400">Project Mockup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="mb-20 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HiBolt className="h-5 w-5 text-accent-primary" />
              <h2 className="text-2xl font-bold">THE CHALLENGE</h2>
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              "Our legacy Shopify theme was bloated and slow. We were losing 30% of mobile traffic 
              during peak hours due to 5-second load times."
            </blockquote>
            <p className="text-gray-400">
              The client needed to migrate to a headless architecture that could handle 10k+ concurrent 
              users while maintaining a perfect lighthouse score.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HiBolt className="h-5 w-5 text-accent-primary" />
              <h2 className="text-2xl font-bold">THE SOLUTION</h2>
            </div>
            <p className="text-gray-300 mb-4">
              We engineered a custom headless architecture using React and Next.js, implementing 
              server-side rendering and edge-caching strategies.
            </p>
            <p className="text-gray-400">
              Resulted in a 150% increase in performance, reducing LCP from 4.2s to 0.8s and increasing 
              conversion rates by 22% in the first quarter.
            </p>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
          <div className="w-24 h-1 bg-accent-primary mb-8" />
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <FaReact className="h-8 w-8 text-accent-primary mx-auto mb-3" />
              <p className="text-white font-medium">React / Next.js</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <SiGraphql className="h-8 w-8 text-accent-primary mx-auto mb-3" />
              <p className="text-white font-medium">GraphQL</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <SiAws className="h-8 w-8 text-accent-primary mx-auto mb-3" />
              <p className="text-white font-medium">AWS Lambda</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <HiBolt className="h-8 w-8 text-accent-primary mx-auto mb-3" />
              <p className="text-white font-medium">PostgreSQL</p>
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Development Journey</h2>
          <div className="w-24 h-1 bg-accent-primary mb-8" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/30" />
            <div className="space-y-12">
              {[
                { number: '01', title: 'Discovery', description: 'Analyzing traffic patterns and identifying bottlenecks.' },
                { number: '02', title: 'UX Design', description: 'Creating high-fidelity prototypes and user flows.' },
                { number: '03', title: 'Engineered Dev', description: 'Headless Shopify integration and custom API dev.' },
                { number: '04', title: 'Optimization', description: 'Load testing and final performance tuning.' },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center text-dark-bg font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Testimonial */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent-primary mb-2">150%</p>
              <p className="text-sm text-gray-400">SPEED INCREASE</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent-primary mb-2">22%</p>
              <p className="text-sm text-gray-400">CONVERSION BOOST</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent-primary mb-2">0.8s</p>
              <p className="text-sm text-gray-400">AVG. PAGE LOAD</p>
            </div>
            <div className="bg-dark-card border border-accent-primary/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent-primary mb-2">99.9%</p>
              <p className="text-sm text-gray-400">UPTIME RELIABILITY</p>
            </div>
          </div>
          <div className="bg-accent-primary rounded-lg p-8">
            <div className="text-4xl text-dark-bg mb-4">"</div>
            <blockquote className="text-dark-bg text-lg mb-6">
              T&T Lab didn't just rebuild our site; they rebuilt our business. The speed and stability 
              are unlike anything we've had before.
            </blockquote>
            <div>
              <p className="text-dark-bg font-bold">Alex Rivera</p>
              <p className="text-dark-bg/80 text-sm">CTO, NexGen Retail</p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-dark-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to scale?</h2>
              <p className="text-gray-400">Let's discuss your next breakthrough project.</p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
