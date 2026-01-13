import { HiCode, HiDesktopComputer, HiCog, HiLightningBolt, HiShieldCheck, HiChartBar } from 'react-icons/hi'

const Services = () => {
  const services = [
    {
      icon: HiDesktopComputer,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      color: 'from-accent-primary to-accent-secondary',
    },
    {
      icon: HiCode,
      title: 'Frontend Development',
      description: 'Beautiful, responsive user interfaces using React and cutting-edge design.',
      color: 'from-accent-secondary to-accent-primary',
    },
    {
      icon: HiCog,
      title: 'Backend Integration',
      description: 'Seamless integration with Sanity, Firebase, and Supabase for robust backends.',
      color: 'from-accent-primary to-accent-secondary',
    },
    {
      icon: HiLightningBolt,
      title: 'Performance Optimization',
      description: 'Fast, efficient applications optimized for speed and user experience.',
      color: 'from-accent-secondary to-accent-primary',
    },
    {
      icon: HiShieldCheck,
      title: 'Security & Best Practices',
      description: 'Secure applications following industry standards and security protocols.',
      color: 'from-accent-primary to-accent-secondary',
    },
    {
      icon: HiChartBar,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      color: 'from-accent-secondary to-accent-primary',
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-dark-card rounded-lg p-8 border border-dark-border transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="h-8 w-8 text-dark-bg" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
