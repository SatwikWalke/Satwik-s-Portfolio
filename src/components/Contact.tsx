import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Let's Connect!</h3>
                  <p className="text-gray-600">
                    I'm always open to discussing new projects, opportunities, and collaborations.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+918884520740" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <Phone className="text-blue-600" size={20} />
                      <span>+91 8884520740</span>
                    </a>
                    <a href="mailto:satwikwalke79224@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <Mail className="text-blue-600" size={20} />
                      <span>satwikwalke79224@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="text-blue-600" size={20} />
                      <span>India</span>
                    </div>
                    <div className="pt-4 space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800">Social Profiles</h4>
                      <div className="space-y-3">
                        <a 
                          href="https://github.com/SatwikWalke" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <Github className="text-blue-600" size={20} />
                          <span>GitHub Profile</span>
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/satwik-walke-63a1b92a7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="text-blue-600" size={20} />
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}