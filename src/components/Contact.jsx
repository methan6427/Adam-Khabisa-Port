
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simple form handling - in a real app you'd send to a server
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "adamkh0698@gmail.com",
      href: "mailto:adamkh0698@gmail.com"
    },
    {
      title: "Phone",
      value: "+970593639342",
      href: "tel:+970593639342"
    }
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/methan6427" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/adam-khabisa-4a9677279/" },
    { name: "Facebook", href: "https://www.facebook.com/adam.khabisa.64" },
    { name: "Instagram", href: "https://www.instagram.com/methan6427/" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, projects, or just having a chat about technology
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you're looking for a frontend developer for your team, need help with a project, 
              or just want to connect, I'd love to hear from you. Let's build something amazing together!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.href} className="contact-item">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </a>
              ))}
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="social-link" target="_blank" rel="noopener noreferrer">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>© 2024 Adam Khabisa. Built with React and lots of ☕</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
