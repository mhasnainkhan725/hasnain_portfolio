import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaWhatsapp, FaPhone, FaPaperPlane, FaCode, FaBrain, FaChartLine, FaDatabase, FaGlobeAmericas } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-title-line greeting">Hello, I'm</span>
            <span className="hero-title-line name">Muhammad Hasnain Abbas Khan</span>
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="role-tag">Data Scientist</span>
            <span className="role-divider">•</span>
            <span className="role-tag">Data Analyst</span>
            <span className="role-divider">•</span>
            <span className="role-tag">ML Engineer</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transforming raw data into actionable insights. Specialized in predictive modeling,
            statistical analysis, and building ML pipelines with 2+ years of delivering data-driven solutions internationally.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              <FaPaperPlane /> Get in Touch
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
              <FaCode /> View Projects
            </button>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="https://www.linkedin.com/in/m-hasnain-abbas-khan-0063a71a3" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              <FaLinkedinIn /><span>LinkedIn</span>
            </a>
            <a href="mailto:mhasnainkhan725@gmail.com" className="social-btn email">
              <FaEnvelope /><span>Email</span>
            </a>
            <a href="https://wa.me/923081837095" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              <FaWhatsapp /><span>WhatsApp</span>
            </a>
            <a href="tel:+923081837095" className="social-btn phone">
              <FaPhone /><span>Call</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-visual-grid">
              <motion.div
                className="visual-card vc-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="vc-icon"><FaBrain /></div>
                <div className="vc-info">
                  <span className="vc-number">50+</span>
                  <span className="vc-label">ML Models Built</span>
                </div>
              </motion.div>
              <motion.div
                className="visual-card vc-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="vc-icon"><FaChartLine /></div>
                <div className="vc-info">
                  <span className="vc-number">92%</span>
                  <span className="vc-label">Best Accuracy</span>
                </div>
              </motion.div>
              <motion.div
                className="visual-card vc-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="vc-icon"><FaDatabase /></div>
                <div className="vc-info">
                  <span className="vc-number">1M+</span>
                  <span className="vc-label">Records Processed</span>
                </div>
              </motion.div>
              <motion.div
                className="visual-card vc-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="vc-icon"><FaGlobeAmericas /></div>
                <div className="vc-info">
                  <span className="vc-number">5+</span>
                  <span className="vc-label">Countries Served</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse"><div className="wheel"></div></div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
