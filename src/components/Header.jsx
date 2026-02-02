import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-md ${
      isScrolled 
        ? 'bg-white/95 shadow-lg py-2' 
        : 'bg-white/90'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        <nav className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary-500 hover:text-secondary-500 transition-colors duration-300"
          >
            Portfolio
          </a>
          
          <ul className={`hidden md:flex list-none gap-8 m-0 ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-medium transition-colors duration-300 hover:text-primary-500 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <div className={`md:hidden fixed top-full left-0 right-0 transition-all duration-300 backdrop-blur-md bg-white/95 shadow-lg ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}>
            <ul className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 font-medium transition-colors duration-300 hover:text-primary-500 block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button 
            className={`md:hidden flex flex-col p-1 gap-1 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45' : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header