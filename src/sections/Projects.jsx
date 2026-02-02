import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "High-Rise Commercial Building",
      description: "Structural design and analysis of a 25-story commercial building with reinforced concrete frame system. Included seismic analysis and foundation design.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
      technologies: ["ETABS", "AutoCAD", "Revit", "SAP2000"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Highway Bridge Construction",
      description: "Project management and structural supervision of a 500-meter prestressed concrete bridge. Managed a team of 50+ workers and coordinated with multiple contractors.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
      technologies: ["Primavera P6", "AutoCAD", "MS Project", "SAP2000"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Residential Complex",
      description: "Complete structural design for a 150-unit residential complex including foundation, framing, and utility systems. Achieved LEED certification.",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop",
      technologies: ["Revit Structure", "STAAD Pro", "AutoCAD", "BIM 360"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Water Treatment Facility",
      description: "Designed and supervised construction of a municipal water treatment plant serving 100,000+ residents. Included hydraulic analysis and environmental compliance.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      technologies: ["Civil 3D", "HEC-RAS", "AutoCAD", "GIS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've worked on recently
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}>
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Featured
                </div>
              )}
              
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl} 
                      className="btn btn-small bg-white text-primary-500 hover:bg-gray-100" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="btn btn-outline btn-small border-white text-white hover:bg-white hover:text-primary-500" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-gray-800 text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="btn btn-outline"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects