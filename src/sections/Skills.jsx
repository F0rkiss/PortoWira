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
    <section id="skills" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Engineering skills and tools I use to deliver quality projects
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-primary-500 text-2xl font-semibold mb-8 text-center relative">
                {category.title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded"></div>
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="font-semibold text-primary-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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