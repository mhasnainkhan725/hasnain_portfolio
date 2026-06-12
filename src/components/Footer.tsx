import { FaLinkedinIn, FaEnvelope, FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import logoImg from '../assets/img.jpeg';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                <img src={logoImg} alt="Hasnain Khan" className="nav-logo-img" />
                <span className="logo-text">Hasnain</span>
              </a>
              <p>Data Scientist | Data Analyst | ML Engineer</p>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/m-hasnain-abbas-khan-0063a71a3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mhasnainkhan725@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><FaEnvelope /></a>
              <a href="https://wa.me/923081837095" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="tel:+923081837095" aria-label="Phone"><FaPhone /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Muhammad Hasnain Abbas Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
