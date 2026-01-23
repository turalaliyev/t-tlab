import { useState } from 'react';
import { HiArrowRight, HiGlobeAlt } from 'react-icons/hi2';
import { HiMail, HiShare } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
    requireNDA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-sm text-accent-primary font-medium mb-2">CONNECT</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in touch with the Lab.</h1>
            <p className="text-gray-300 mb-12">
              We're ready to engineer your next digital breakthrough. Reach out through any of these 
              channels or use the form.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-accent-primary font-medium mb-2">EMAIL</p>
                <a href="mailto:hello@tt-lab.dev" className="text-white hover:text-accent-primary transition-colors">
                  hello@tt-lab.dev
                </a>
              </div>

              <div>
                <p className="text-sm text-accent-primary font-medium mb-2">LOCATION</p>
                <div className="flex items-center gap-2 text-white">
                  <HiGlobeAlt className="h-5 w-5 text-accent-primary" />
                  <span>Remote / Global</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-accent-primary font-medium mb-4">SOCIALS</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary transition-colors">
                    <HiMail className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary transition-colors">
                    <HiShare className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary transition-colors">
                    <HiGlobeAlt className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 h-64 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center">
              <HiGlobeAlt className="h-16 w-16 text-gray-600" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Let's build something experimental</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary transition-colors"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="web3">Web3 & DApps</option>
                  <option value="design">Design System</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="requireNDA"
                  name="requireNDA"
                  checked={formData.requireNDA}
                  onChange={handleChange}
                  className="w-5 h-5 bg-dark-surface border border-dark-border rounded text-accent-primary focus:ring-accent-primary focus:ring-2"
                />
                <label htmlFor="requireNDA" className="text-sm text-gray-300">
                  Require a signed NDA before discussion?
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors"
              >
                Send Message
                <HiArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
