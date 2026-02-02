import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Structural Design",
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "SAP2000", level: 90 },
        { name: "ETABS", level: 85 },
        { name: "Revit Structure", level: 85 },
        { name: "STAAD Pro", level: 80 },
      ]
    },
    {
      title: "Project Management",
      skills: [
        { name: "MS Project", level: 90 },
        { name: "Primavera P6", level: 85 },
        { name: "Cost Estimation", level: 85 },
        { name: "Contract Admin", level: 80 },
        { name: "Quality Control", level: 90 },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Concrete Design", level: 90 },
        { name: "Steel Structures", level: 85 },
        { name: "Geotechnical", level: 75 },
        { name: "Surveying", level: 80 },
        { name: "BIM Modeling", level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Engineering skills and tools I use to deliver quality projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-[0.98]">
              <h3 className="text-primary-500 dark:text-primary-400 text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center relative">
                {category.title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded"></div>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="font-semibold text-primary-500 dark:text-primary-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills