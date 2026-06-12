import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mhasnainkhan725@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's talk
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>I'm currently seeking full-time Data Analyst/Data Scientist opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!</p>

            <div className="contact-details">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mhasnainkhan725@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon email-icon"><FaEnvelope /></div>
                <div className="contact-card-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">mhasnainkhan725@gmail.com</span>
                </div>
              </a>
              <a href="tel:+923081837095" className="contact-card">
                <div className="contact-card-icon phone-icon"><FaPhone /></div>
                <div className="contact-card-info">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+92 308 1837095</span>
                </div>
              </a>
              <a href="https://wa.me/923081837095" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon whatsapp-icon"><FaWhatsapp /></div>
                <div className="contact-card-info">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+92 308 1837095</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/m-hasnain-abbas-khan-0063a71a3" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon linkedin-icon"><FaLinkedinIn /></div>
                <div className="contact-card-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Connect with me</span>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon location-icon"><FaMapMarkerAlt /></div>
                <div className="contact-card-info">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Rawalpindi, Pakistan</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
