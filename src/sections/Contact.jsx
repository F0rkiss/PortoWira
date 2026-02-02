import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a backend service or email service here
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@yourname.com',
      link: 'mailto:hello@yourname.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourname',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's work together to bring your ideas to life
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's discuss your project</h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              I'm always interested in new construction projects and engineering challenges. 
              Whether you need structural design, project consultation, or just want to connect, feel free to reach out!
            </p>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="text-lg text-gray-800 hover:text-primary-500 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-lg text-gray-800">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                />
              </div>
              
              <button type="submit" className="w-full btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact