import React, { useState } from 'react';
import { Mail, Phone, Send, LucideIcon } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
        .send(
            'service_Adport',
            'template_ry4i4pb',
            {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message
            },
            'RlY99OaNDBHpqXxkj'
        )
        .then(
            (response) => {
              console.log('Email sent successfully:', response);
              alert("Thank you for your message! I'll get back to you soon.");
              setFormData({ name: '', email: '', subject: '', message: '' });
            },
            (error) => {
              console.error('Error sending email:', error);
              alert('Oops! Something went wrong. Please try again later.');
            }
        )
        .finally(() => setIsSending(false));
  };

  const contactInfo: ContactInfo[] = [
    {
      title: 'Email',
      value: 'adamkh0698@gmail.com',
      href: 'mailto:adamkh0698@gmail.com',
      icon: Mail
    },
    {
      title: 'Phone',
      value: '+970593639342',
      href: 'tel:+970593639342',
      icon: Phone
    }
  ];

  return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                Whether you're looking for a frontend developer for your team, need help with a project, or just want to
                connect, I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                      <a key={index} href={info.href} className="contact-item">
                        <div className="contact-icon">
                          <IconComponent size={20} />
                        </div>
                        <div className="contact-text">
                          <h4>{info.title}</h4>
                          <p>{info.value}</p>
                        </div>
                      </a>
                  );
                })}
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

                <button type="submit" className="submit-btn" disabled={isSending}>
                  {isSending ? 'Sending...' : <><Send size={18} /><span>Send Message</span></>}
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
