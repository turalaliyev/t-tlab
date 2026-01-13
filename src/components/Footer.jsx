import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} T&T Lab. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with <HiHeart className="h-4 w-4 text-red-500" /> by T&T Lab
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
