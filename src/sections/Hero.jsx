import React from 'react'
import Aurora from '../component/aurora.jsx';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  // Different color schemes for light and dark modes
  const lightColors = ["#667eea", "#764ba2", "#a855f7"];
  const darkColors = ["#1e3a8a", "#4c1d95", "#7c3aed"];
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={isDark ? darkColors : lightColors}
          blend={isDark ? 0.6 : 0.5}
          amplitude={isDark ? 0.8 : 0.5}
          speed={0.8}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 transition-colors duration-300"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          <div className="max-w-2xl order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in-up">
              Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Wirahadi Pradnyana</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-500 dark:text-primary-400 font-semibold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Civil Engineer & Structural Designer
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              I design and build infrastructure that stands the test of time. 
              Specializing in structural analysis, project management, and sustainable construction. 
              Currently working at <span className="text-primary-500 dark:text-primary-400 font-semibold">Your Company</span>.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a href="#projects" className="btn w-full sm:w-auto">
                View My Work
              </a>
              <a href="#contact" className="btn w-full sm:w-auto">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1 sm:p-1.5 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop" 
                  alt="Wirahadi Pradnyana" 
                  className="w-full h-full object-cover rounded-full bg-gray-100 dark:bg-gray-800"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero