import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "ABC Construction Group",
      position: "Senior Structural Engineer",
      duration: "2022 - Present",
      description: [
        "Lead structural design for commercial and residential projects worth $50M+",
        "Mentored junior engineers and established design standards and QC procedures",
        "Reduced project costs by 15% through innovative design optimization"
      ],
      technologies: ["ETABS", "SAP2000", "Revit", "AutoCAD"]
    },
    {
      id: 2,
      company: "Metro Infrastructure Ltd.",
      position: "Project Engineer",
      duration: "2021 - 2022",
      description: [
        "Managed construction of highway and bridge projects with budgets up to $20M",
        "Coordinated with contractors, consultants, and government agencies",
        "Ensured compliance with safety standards and building codes"
      ],
      technologies: ["Primavera P6", "MS Project", "Civil 3D", "AutoCAD"]
    },
    {
      id: 3,
      company: "BuildRight Consultants",
      position: "Junior Civil Engineer",
      duration: "2020 - 2021",
      description: [
        "Performed structural analysis and design for residential buildings",
        "Conducted site inspections and prepared technical reports",
        "Assisted in quantity surveying and cost estimation"
      ],
      technologies: ["AutoCAD", "STAAD Pro", "Excel", "SketchUp"]
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and key achievements
        </p>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex mb-8 sm:mb-12 relative">
              {/* Timeline marker */}
              <div className="flex flex-col items-center mr-4 sm:mr-8 relative">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-lg relative z-10"></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full absolute top-4 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.99] border-l-4 border-primary-500">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2 sm:gap-4">
                    <h3 className="text-gray-800 dark:text-white text-lg sm:text-xl font-semibold">{exp.position}</h3>
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-primary-500 dark:text-primary-400 text-base sm:text-lg font-semibold mb-4 sm:mb-6">{exp.company}</h4>
                  
                  <ul className="list-none mb-4 sm:mb-6 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 leading-relaxed pl-5 sm:pl-6 relative text-sm sm:text-base">
                        <span className="absolute left-0 top-2 text-primary-500 dark:text-primary-400 font-bold">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience