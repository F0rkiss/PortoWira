import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="section-title text-left mb-8">About Me</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I'm a passionate full-stack developer with 3+ years of experience 
              creating digital solutions that make a difference. I enjoy turning 
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              My journey in web development started with curiosity about how 
              websites work, and it has evolved into a career where I continuously 
              push myself to learn and grow. I'm always excited to work on projects 
              that challenge me to think outside the box.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-primary-500 mb-2">50+</h3>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-primary-500 mb-2">3+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-primary-500 mb-2">20+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
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