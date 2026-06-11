import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar, FaCogs, FaSearch, FaDatabase, FaUsers, FaFlask, FaFileAlt, FaRocket, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'IT Analyst & Data Analyst',
    company: 'Nextpak Agile Solutions, Rawalpindi',
    duration: 'July 2024 – Present',
    icon: <FaBriefcase />,
    highlights: [
      { icon: <FaCogs />, text: 'Gather business requirements and translate them into data-driven solutions and system specifications.' },
      { icon: <FaSearch />, text: 'Analyze organizational data to identify trends, inefficiencies, and opportunities for process improvement.' },
      { icon: <FaChartBar />, text: 'Develop interactive dashboards and KPI reports using Power BI and SQL to support decision-making.' },
      { icon: <FaDatabase />, text: 'Perform data extraction, transformation, and analysis using SQL and Excel while ensuring data quality.' },
      { icon: <FaFlask />, text: 'Conduct Exploratory Data Analysis (EDA) to uncover actionable insights and business trends.' },
      { icon: <FaUsers />, text: 'Collaborate with stakeholders, developers, and business teams to deliver effective analytical solutions.' },
    ],
    techTags: ['Power BI', 'SQL', 'Excel', 'EDA', 'KPI Reporting', 'Data Analysis'],
  },
  {
    title: 'Freelance Data Analyst & Business Intelligence Consultant',
    company: 'Self-Employed | Remote',
    duration: 'August 2023 – Present',
    icon: <FaLaptopCode />,
    highlights: [
      { icon: <FaRocket />, text: 'Delivered 50+ data analytics and business intelligence projects for international clients across multiple industries.' },
      { icon: <FaChartBar />, text: 'Built interactive dashboards and automated reporting solutions using Power BI, Tableau, and SQL.' },
      { icon: <FaSearch />, text: 'Performed EDA, statistical analysis, and data visualization on datasets ranging from thousands to millions of records.' },
      { icon: <FaDatabase />, text: 'Designed and optimized SQL queries for data extraction, transformation, and reporting.' },
      { icon: <FaFlask />, text: 'Conducted hypothesis testing and A/B testing to support business decision-making and performance improvement.' },
      { icon: <FaFileAlt />, text: 'Managed end-to-end project delivery, ensuring high client satisfaction and on-time completion.' },
    ],
    techTags: ['Power BI', 'Tableau', 'SQL', 'Python', 'Statistical Analysis', 'A/B Testing'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Career journey
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="experience-header">
                <div className="experience-icon">{exp.icon}</div>
                <div className="experience-meta">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration"><i className="fas fa-calendar-alt"></i> {exp.duration}</p>
                </div>
              </div>

              <div className="experience-body">
                <div className="experience-highlights">
                  {exp.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      className="highlight-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="highlight-icon">{item.icon}</div>
                      <p>{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="experience-tech">
                {exp.techTags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
