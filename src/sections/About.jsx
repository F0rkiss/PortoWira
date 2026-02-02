import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          <div>
            <h2 className="section-title text-left mb-8">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a passionate civil engineer with 3+ years of experience 
              designing and managing construction projects. I enjoy turning 
              complex engineering challenges into efficient, safe, and sustainable structures.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
              My journey in civil engineering started with a fascination for how 
              buildings and bridges are constructed. It has evolved into a career where I 
              continuously push myself to innovate and implement cutting-edge solutions 
              in structural design, construction management, and infrastructure development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">3+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">6+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">5+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=500&fit=crop" 
                  alt="About me" 
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About