
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration (you'll need to configure this with your EmailJS account)
    // For now, simulating the form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adam.khabisa@email.com",
      href: "mailto:adam.khabisa@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available for Remote Work",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-slate-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-50 mb-6">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you're looking for a frontend developer for your team, need help with a project, 
                or just want to connect, I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:border-cyan-500/50 transition-all duration-200 group"
                >
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <info.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-50 font-semibold">{info.title}</h4>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-slate-50 font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 glass-effect rounded-lg text-slate-400 ${social.color} transition-all duration-200 hover-scale`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-50 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-50 font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover-scale disabled:opacity-50 disabled:cursor-not-allowed cyan-glow"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-slate-50 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 Adam Khabisa. Built with React and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
