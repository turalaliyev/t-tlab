import { useEffect, useState } from 'react'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">T&T Lab</span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
          Software Development Team
        </p>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Crafting exceptional web experiences with cutting-edge technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-bg font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
          >
            View Our Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-lg transform transition-all duration-300 hover:bg-accent-primary hover:text-dark-bg hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-accent-primary transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown className="h-8 w-8" />
      </button>
    </section>
  )
}

export default Hero
