import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaChartArea, FaFlask, FaDatabase, FaTools } from 'react-icons/fa';

interface SkillItem {
  name: string;
  level: string;
  width: number;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: SkillItem[];
  tagSkills?: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <FaCode />,
    title: 'Programming & Scripting',
    skills: [
      { name: 'Python', level: 'Expert', width: 95 },
      { name: 'R', level: 'Advanced', width: 80 },
      { name: 'SQL', level: 'Expert', width: 92 },
      { name: 'JavaScript', level: 'Intermediate', width: 70 },
    ],
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    skills: [
      { name: 'scikit-learn', level: 'Expert', width: 93 },
      { name: 'TensorFlow', level: 'Advanced', width: 82 },
      { name: 'Feature Engineering', level: 'Expert', width: 90 },
      { name: 'Hyperparameter Tuning', level: 'Advanced', width: 85 },
    ],
  },
  {
    icon: <FaChartArea />,
    title: 'Data Visualization & BI',
    skills: [
      { name: 'Power BI', level: 'Expert', width: 90 },
      { name: 'Tableau', level: 'Advanced', width: 85 },
      { name: 'Matplotlib / Seaborn', level: 'Expert', width: 92 },
      { name: 'Plotly', level: 'Advanced', width: 80 },
    ],
  },
  {
    icon: <FaFlask />,
    title: 'Statistics & Analysis',
    skills: [
      { name: 'Statistical Modeling', level: 'Expert', width: 90 },
      { name: 'Hypothesis Testing', level: 'Expert', width: 88 },
      { name: 'A/B Testing', level: 'Advanced', width: 82 },
      { name: 'Time Series Analysis', level: 'Advanced', width: 85 },
    ],
  },
  {
    icon: <FaDatabase />,
    title: 'Database & Big Data',
    skills: [
      { name: 'MySQL', level: 'Expert', width: 90 },
      { name: 'PostgreSQL', level: 'Advanced', width: 82 },
      { name: 'Data Warehousing', level: 'Advanced', width: 78 },
      { name: 'Query Optimization', level: 'Advanced', width: 80 },
    ],
  },
  {
    icon: <FaTools />,
    title: 'Tools & Platforms',
    skills: [],
    tagSkills: ['Python', 'pandas', 'NumPy', 'Jupyter', 'Colab', 'Git/GitHub', 'Excel', 'VS Code', 'Anaconda', 'DAX'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I work with
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              {category.skills.length > 0 && (
                <div className="skill-items">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.width}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {category.tagSkills && (
                <div className="skill-tags-grid">
                  {category.tagSkills.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
