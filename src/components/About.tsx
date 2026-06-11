import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaProjectDiagram, FaGraduationCap, FaTrophy, FaGlobe, FaMapMarkerAlt, FaEnvelope, FaPhone, FaAward, FaBrain, FaChartBar, FaCode } from 'react-icons/fa';

const Counter = ({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(decimals)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

const highlights = [
  { icon: <FaBrain />, label: 'Predictive Modeling' },
  { icon: <FaChartBar />, label: 'Data Visualization' },
  { icon: <FaCode />, label: 'ML Pipelines' },
  { icon: <FaProjectDiagram />, label: 'BI Dashboards' },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get to know me
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Data Science professional with <strong>2+ years</strong> of hands-on freelance experience delivering
                data-driven solutions to international clients. <strong>MS in Data Science (3.84 GPA)</strong> with
                specialized expertise in predictive modeling, data visualization, and statistical analysis.
              </p>
              <p>
                Proven track record of building ML models, creating interactive dashboards, and solving complex
                business problems through Python, SQL, and BI tools. <strong>Gold medalist in Computer Science</strong>
                seeking to transition from education into a full-time Data Analyst/Data Scientist role where I can
                leverage analytical skills and technical expertise to drive business insights and strategic decision-making.
              </p>
            </motion.div>

            <motion.div
              className="about-highlights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {highlights.map((h, i) => (
                <div key={i} className="about-highlight-item">
                  <div className="ahi-icon">{h.icon}</div>
                  <span>{h.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <div className="stat-icon"><FaProjectDiagram /></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={50} suffix="+" /></span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGraduationCap /></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={3.84} decimals={2} /></span>
                  <span className="stat-label">MS GPA</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTrophy /></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={1} /></span>
                  <span className="stat-label">Gold Medal</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={5} suffix="+" /></span>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-details"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="detail-item"><FaMapMarkerAlt /><span>Rawalpindi, Pakistan</span></div>
              <div className="detail-item"><FaEnvelope /><span>mhasnainkhan725@gmail.com</span></div>
              <div className="detail-item"><FaPhone /><span>+92 308 1837095</span></div>
              <div className="detail-item"><FaAward /><span>Gold Medalist - BS CS</span></div>
            </motion.div>
          </div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025</span>
                <h4>MS Data Science</h4>
                <p>UET Lahore — CGPA: 3.84/4.00</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2022</span>
                <h4>BS Computer Science</h4>
                <p>University of Lahore — Gold Medalist, CGPA: 3.64/4.00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;