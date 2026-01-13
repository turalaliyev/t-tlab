import { useState } from 'react'
import { 
  SiReact, 
  SiTailwindcss, 
  SiFirebase, 
  SiSupabase,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiVite,
} from 'react-icons/si'
import { HiDatabase, HiServer } from 'react-icons/hi'

const Tools = () => {
  const [hoveredTool, setHoveredTool] = useState(null)

  const toolCategories = [
    {
      category: 'Frontend',
      icon: HiServer,
      tools: [
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
      ],
    },
    {
      category: 'Backend & Database',
      icon: HiDatabase,
      tools: [
        { name: 'Sanity', icon: null, color: 'text-pink-400', customIcon: 'Sanity' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
        { name: 'Supabase', icon: SiSupabase, color: 'text-green-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      ],
    },
    {
      category: 'Tools & Others',
      icon: HiServer,
      tools: [
        { name: 'Git', icon: SiGit, color: 'text-red-400' },
        { name: 'Ant Design', icon: null, color: 'text-blue-500', customIcon: 'AntD' },
      ],
    },
  ]

  const renderIcon = (tool) => {
    if (tool.customIcon) {
      return (
        <div className={`${tool.color} font-bold text-lg`}>
          {tool.customIcon}
        </div>
      )
    }
    const Icon = tool.icon
    return Icon ? <Icon className={`h-12 w-12 ${tool.color}`} /> : null
  }

  return (
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools we use to build exceptional web experiences
          </p>
        </div>

        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex} className="bg-dark-card rounded-lg p-8 border border-dark-border">
                <div className="flex items-center gap-3 mb-6">
                  <CategoryIcon className="h-6 w-6 text-accent-primary" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="group relative bg-dark-surface rounded-lg p-6 border border-dark-border transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-1 cursor-pointer"
                      onMouseEnter={() => setHoveredTool(`${categoryIndex}-${toolIndex}`)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                          {renderIcon(tool)}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-accent-primary transition-colors">
                          {tool.name}
                        </span>
                      </div>

                      {/* Hover Glow Effect */}
                      {hoveredTool === `${categoryIndex}-${toolIndex}` && (
                        <div className="absolute inset-0 rounded-lg border-2 border-accent-primary/50 pointer-events-none animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Tools
