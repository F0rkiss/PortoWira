import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 animate-fade-in-up">
              Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-500 font-semibold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Civil Engineer & Structural Designer
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              I design and build infrastructure that stands the test of time. 
              Specializing in structural analysis, project management, and sustainable construction. 
              Currently working at <span className="text-primary-500 font-semibold">Your Company</span>.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1.5 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop" 
                  alt="Your Name" 
                  className="w-full h-full object-cover rounded-full bg-gray-100"
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