import { motion } from 'framer-motion';
import { FaTrophy, FaProjectDiagram, FaBook, FaGraduationCap, FaCertificate, FaChartBar, FaPaintBrush, FaGlobe, FaMoneyBillWave } from 'react-icons/fa';

const certifications = [
  {
    icon: <FaTrophy />,
    title: 'Gold Medalist - BS Computer Science',
    issuer: 'University of Lahore',
    year: '2022',
    description: 'Awarded gold medal for outstanding academic performance with CGPA 3.64/4.00',
    badge: 'Gold',
    featured: true,
  },
  {
    icon: <FaProjectDiagram />,
    title: '50+ Freelance Projects Delivered',
    issuer: 'International Clients',
    year: '2023-2025',
    description: 'Successfully delivered 50+ data science projects with 100% client satisfaction',
    badge: '50+',
    featured: false,
  },
  {
    icon: <FaBook />,
    title: 'An Improved Predictive Model for Flood Hazards',
    issuer: 'International Journal of Management Science and Engineering (IJMSE)',
    year: 'Published',
    description: 'Assessing the impact of deforestation and CO₂ emissions on flood hazards in Pakistan.',
    badge: '★',
    featured: false,
  },
  {
    icon: <FaBook />,
    title: 'IoT for Sustainable Development (SDGs)',
    issuer: 'International Journal of Management Science and Engineering (IJMSE)',
    year: 'Published',
    description: 'Research on implementing IoT solutions to achieve Sustainable Development Goals in Pakistan.',
    badge: '★',
    featured: false,
  },
  {
    icon: <FaGraduationCap />,
    title: 'MS Data Science - 3.84 GPA',
    issuer: 'UET Lahore',
    year: '2025',
    description: "Completed Master's with specialization in ML, Deep Learning, and Statistical Analysis",
    badge: '3.84',
    featured: false,
  },
  {
    icon: <FaCertificate />,
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Coursera',
    year: 'Completed',
    description: 'Google Data Analytics professional certificate foundational course',
    badge: '✓',
    featured: false,
  },
  {
    icon: <FaGlobe />,
    title: 'The Fundamentals of Digital Marketing',
    issuer: 'Google',
    year: 'Completed',
    description: 'Google-certified digital marketing fundamentals covering SEO, analytics, and strategy',
    badge: '✓',
    featured: false,
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analytics with Tableau and Power BI',
    issuer: 'Hadi e-learning system',
    year: 'Completed',
    description: 'Professional training in data visualization and business intelligence using Tableau and Power BI',
    badge: '✓',
    featured: false,
  },
  {
    icon: <FaCertificate />,
    title: 'Freelancing',
    issuer: 'DigiSkills',
    year: 'Completed',
    description: 'Professional freelancing skills covering client management, bidding, and project delivery',
    badge: '✓',
    featured: false,
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Designing',
    issuer: 'DigiSkills',
    year: 'Completed',
    description: 'Graphic design fundamentals including visual communication, branding, and design tools',
    badge: '✓',
    featured: false,
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Financial Globalization, Capital flows and the Global Financial Cycle',
    issuer: 'ADB Institute',
    year: 'Completed',
    description: 'Advanced course on financial globalization, international capital flows, and the global financial cycle',
    badge: '✓',
    featured: false,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recognition
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications & Achievements
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className={`cert-card ${cert.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <span className="cert-year">{cert.year}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>
              <div className="cert-badge">{cert.badge}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;