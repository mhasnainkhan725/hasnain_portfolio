import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaExternalLinkAlt, FaTree, FaHeartbeat, FaUsersCog, FaChartLine, FaBolt, FaChartPie, FaGamepad, FaGlobe, FaTimes } from 'react-icons/fa';
import A_png from '../assets/A.png';
import B_png from '../assets/B.png';
import C_png from '../assets/C.png';
import D_png from '../assets/D.png';
import E_png from '../assets/E.png';
import Picture1_png from '../assets/Picture1.png';
import Picture2_png from '../assets/Picture2.png';
import ecoDrivePdf from '../assets/Eco_Drive_Motors Report.pdf';
import F_png from '../assets/F.png';
import G_png from '../assets/G.png';
import H_png from '../assets/H.png';
import I_png from '../assets/I.png';
import J_png from '../assets/J.png';
import thesisPdf from '../assets/MPHILL THESIS (HASNAIN ABBAS  2023-MSDS-15).pdf';
import netflix1_png from '../assets/1.png';
import netflix2_png from '../assets/2.png';
import netflix3_png from '../assets/3.png';
import netflix4_png from '../assets/4.png';
import netflix5_png from '../assets/5.png';
import netflix6_png from '../assets/6.png';
import netflixPdf from '../assets/Netflix Global Content.pdf';
import retail11_png from '../assets/11.png';
import retail12_png from '../assets/12.png';
import retail13_png from '../assets/13.png';
import retail14_png from '../assets/14.png';
import retail15_png from '../assets/15.png';
import retail16_png from '../assets/16.png';
import retailPdf from '../assets/Exploring Retail Trends.pdf';
import cross21_png from '../assets/21.png';
import cross22_png from '../assets/22.png';
import cross23_png from '../assets/23.png';
import cross24_png from '../assets/24.png';
import crossPdf from '../assets/Analysis of Healthcare, Employment, and Educational Data.pdf';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
  icon: React.ReactNode;
  iconBg: string;
  previewDetails: string[];
  demoUrl: string;
  problemContext?: string;
  contribution?: string;
  keyInsights?: { metric: string; finding: string }[];
  recommendations?: string[];
  businessImpact?: string;
  images?: string[];
  pdfUrl?: string;
}

const projects: Project[] = [
  {
    id: 'cross-domain-analytics',
    title: 'Cross-Domain Analytics: Unpacking Healthcare Utilization, Salary Geography, Trial Biases, and Economic Indicators',
    subtitle: 'Data Analyst & Data Scientist',
    description: 'Visualized four independent datasets to uncover patterns, biases, and actionable truths in healthcare, education, clinical trials, and economics.',
    category: 'stats',
    tags: ['Statistical Testing', 'Data Visualization', 'Python'],
    techStack: ['Python', 'Matplotlib', 'Seaborn', 'Statistical Testing'],
    icon: <FaGlobe />,
    iconBg: 'web-bg',
    previewDetails: [
      'Analyzed hospital bed occupancy',
      'Evaluated global graduate salaries',
      'Assessed clinical trial bias',
      'Correlated economic indicators'
    ],
    demoUrl: '#',
    problemContext: "Four independent datasets across critical sectors required visualization-driven insights: hospital bed occupancy (5,840 records), global graduate salaries (111 graduates, 5 majors, multiple regions), clinical trial bias (249 participants, 47% completion), and economic correlation (27 US cities). The goal was to move beyond raw numbers to uncover patterns, biases, and actionable truths.",
    contribution: "Designed box plots, scatter plots, and histograms; performed statistical significance testing (p-values, correlation, R²); identified three major research biases (selection, survivor, Simpson’s paradox); delivered practical recommendations for hospital management, career planning, research quality, and economic policy.",
    keyInsights: [
      { metric: "Hospital Bed Occupancy", finding: "Weekends are 5.14% higher than weekdays (80.11% vs 74.97%, p < 0.001) – statistically significant & operationally critical" },
      { metric: "Graduate Salaries", finding: "Information Systems highest pay; Accounting lowest. North America & Europe > Africa & South America" },
      { metric: "Clinical Trial Bias", finding: "Only 47% completion rate → severe survivor bias. Reported 3.2 kg/m² BMI reduction likely overestimated" },
      { metric: "Unemployment vs Loan Delinquency", finding: "Weak correlation (r = 0.357, R² = 0.1277, p = 0.067 not significant) – other factors matter more" },
      { metric: "Cross-Domain Insight", finding: "Statistical significance ≠ practical importance. Visualization reveals what numbers hide" }
    ],
    recommendations: [
      "Healthcare: Add 5% weekend capacity (beds + staff) and implement flexible staffing models",
      "Career & Education: Prioritize Information Systems or Finance majors; target North America or Europe",
      "Clinical Research Quality: Always report dropout rates and test for Simpson’s paradox",
      "Economic Policy: Use composite indicators instead of relying solely on unemployment for loan default prediction"
    ],
    businessImpact: "“Statistical significance doesn't always mean practical importance. Visualization reveals patterns not obvious in raw data. Bias analysis is essential for valid conclusions.”",
    images: [cross21_png, cross22_png, cross23_png, cross24_png],
    pdfUrl: crossPdf,
  },
  {
    id: 'walmart-retail',
    title: 'Beyond the Holiday Spike: A Data-Driven Retail Strategy for Walmart-Style Superstores',
    subtitle: 'Data Analyst & Data Scientist',
    description: 'Analyzed 600,000+ sales records across 45 stores to uncover seasonal patterns, departmental performance concentration, and economic sensitivity.',
    category: 'stats',
    tags: ['Time Series', 'Retail Analytics', 'Python'],
    techStack: ['Python', 'Time-Series', 'Correlation', 'Distribution Fitting'],
    icon: <FaChartLine />,
    iconBg: 'forecast-bg',
    previewDetails: [
      'Designed six complementary visualizations',
      'Analyzed 600,000+ weekly sales records',
      'Uncovered temporal and macroeconomic drivers',
      'Distribution fitting with histograms & box plots'
    ],
    demoUrl: '#',
    problemContext: "A large retail chain (600,000+ sales records across 45 stores, 99 departments, weekly time-series over 3 years) needed to understand seasonal patterns, departmental performance concentration, and economic sensitivity to optimize inventory, staffing, and strategic focus.",
    contribution: "Designed six complementary visualizations (line chart, bar chart, scatter plot, correlation heatmap, box plot, histogram) to uncover temporal, hierarchical, and macroeconomic drivers of sales performance.",
    keyInsights: [
      { metric: "Seasonal Impact", finding: "Holiday periods drive 60–100% sales boost (peak >8M vs baseline 4–5M)" },
      { metric: "Departmental Concentration", finding: "Top 3 departments (92, 95, 38) generate 40% of total revenue – high concentration risk" },
      { metric: "Economic Sensitivity", finding: "Fuel price vs sales correlation = -0.12 (negligible). Walmart is recession-resilient" },
      { metric: "Performance Variability", finding: "Most departments: $50K–$100K/week. Top outliers: $400K–$700K/week (rare but profitable)" },
      { metric: "Distribution Shape", finding: "Right-skewed long tail – many mid-tier departments have significant upside potential" }
    ],
    recommendations: [
      "Seasonal Inventory Optimization – Pre-position stock for 60–100% holiday multipliers; align staffing & marketing",
      "Middle-Tier Department Focus – 96 departments have 20–30% improvement potential → $2–4B additional revenue",
      "Replicate Top-Performer Excellence – Study departments 92, 95, 38; transfer operational practices to others",
      "Leverage Economic Resilience – Prioritize internal operations (not macro fears) as competitive advantage",
      "Predictive Inventory Management – Use seasonal cyclicality to automate reorder points"
    ],
    businessImpact: "“Predictive inventory management capabilities, strategic resource allocation optimization, competitive advantage through advanced analytics.”",
    images: [retail11_png, retail12_png, retail13_png, retail14_png, retail15_png, retail16_png],
    pdfUrl: retailPdf,
  },
  {
    id: 'netflix-unscripted',
    title: 'Netflix Unscripted: A Data Visualization Deep Dive into Global Content Strategy',
    subtitle: 'Data Analyst & Data Scientist',
    description: 'Designed advanced visualizations to analyze Netflix\'s global acquisition and production strategy across 8,800+ titles spanning 96 years.',
    category: 'viz',
    tags: ['Python', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    techStack: ['Python', 'Kaggle Dataset', 'Correlation', 'Distribution'],
    icon: <FaChartLine />,
    iconBg: 'stroke-bg',
    previewDetails: [
      'Designed six advanced visualizations',
      'Analyzed 8,800+ titles across 112 countries',
      'Identified three distinct strategic phases',
      'Geographic and temporal trend analysis'
    ],
    demoUrl: '#',
    problemContext: "Netflix operates in over 112 countries with 8,800+ titles spanning 42 genres and 96 years. The goal was to uncover how content trends (temporal, geographic, duration, ratings) shape Netflix's global acquisition and production strategy.",
    contribution: "Designed six advanced visualizations (line chart, bar chart, scatter plot, box plot, heatmap, histogram) to answer four strategic sub-questions. Identified three distinct strategic phases and actionable insights for content investment.",
    keyInsights: [
      { metric: "Temporal Strategy", finding: "Three phases: Establishment (2008–14), Aggressive Expansion (2015–19: ~2,000 titles in 2019), Quality Optimization (2020–21)" },
      { metric: "Geographic Concentration", finding: "US dominates (35% of all titles), India second (12%). Top 15 countries = 75% of content" },
      { metric: "Duration vs. Year", finding: "Moderate negative correlation (-0.21) – newer content is shorter (mobile viewing habits)" },
      { metric: "Duration by Rating", finding: "TV-MA has widest range & most outliers; family content is tightly distributed" },
      { metric: "Overall Length Pattern", finding: "Right-skewed distribution, peak at 90–100 minutes (standard feature film)" }
    ],
    recommendations: [
      "Prioritize shorter-form content for mobile-first audiences (confirmed by -0.21 correlation)",
      "Double down on top 15 production countries – they already deliver 75% of value",
      "Use TV-MA flexibility to experiment with non-standard runtimes for adult audiences",
      "Shift from volume to premium quality – post-2020 trend supports higher ROI per title",
      "Build interactive dashboards for real-time acquisition decisions (future opportunity)"
    ],
    businessImpact: "“Data-driven content acquisition, mobile-first content strategy, strategic market targeting, investment optimization.”",
    images: [netflix1_png, netflix2_png, netflix3_png, netflix4_png, netflix5_png, netflix6_png],
    pdfUrl: netflixPdf,
  },
  {
    id: 'eco-drive',
    title: 'Bridging the EV Gap: Roadmap to UK’s 2030 Ban for Eco Drive Motors',
    subtitle: 'Data Analyst & Data Scientist',
    description: 'Designed interactive Power BI dashboards to analyze sales, sustainability, and pricing to navigate the UK’s 2030 ICE ban.',
    category: 'viz',
    tags: ['Power BI', 'KPI Dashboards', 'TCO Analysis'],
    techStack: ['Power BI', 'Customer Segmentation', 'TCO Analysis'],
    icon: <FaChartPie />,
    iconBg: 'sales-bg',
    previewDetails: [
      'Power BI dashboards for sales & sustainability',
      'Customer Segmentation & TCO Analysis',
      'Phased ICE Decline Plan formulation',
    ],
    demoUrl: '#',
    problemContext: 'Eco Drive Motors (UK) must transition from petrol/diesel to electric vehicles (EVs) ahead of the government’s 2030 ban on new ICE vehicles. The company needed to understand its current position, revenue dynamics, and customer behavior to pivot profitably.',
    contribution: 'Designed two interactive Power BI dashboards to analyze sales, sustainability progress, pricing, and customer loyalty. Defined and tracked 4 strategic KPIs.',
    keyInsights: [
      { metric: 'EV Market Share', finding: 'Only 18.45% of sales (Q4 2023) – far below 2030 readiness' },
      { metric: 'Sales Mix', finding: 'Petrol dominates at 61.69%, Diesel at 19.86%' },
      { metric: 'Revenue per Unit', finding: 'EVs have the highest avg. selling price (£32.54K overall)' },
      { metric: 'Customer Concentration', finding: 'Top 10 customers bought 8,942 units – significant loyalty & risk' },
      { metric: 'Sustainability Paradox', finding: 'EV volume is lowest, but revenue per EV is highest' },
    ],
    recommendations: [
      'Fleet-First EV Program – Convert top 10 B2B clients to EVs with TCO-based deals',
      'Targeted EV Incentives – Subsidized charging, warranties, finance (no direct price cuts)',
      'Phased ICE Decline Plan – Align inventory & marketing with declining petrol/diesel',
      'Enhanced TCO Dashboard – Add maintenance + resale value to boost EV value proposition'
    ],
    businessImpact: '“The Power BI dashboards transformed raw sales data into a clear strategic map… aligning profitability with regulatory mandates.”',
    images: [Picture1_png, Picture2_png],
    pdfUrl: ecoDrivePdf,
  },
  {
    id: 'thesis',
    title: 'Environmental Flood Prediction Model',
    subtitle: 'Environmental Data Science',
    description: 'Advanced ML regression & classification models predicting flood risks from deforestation and CO₂ emissions. Achieved 92% accuracy using Random Forest & XGBoost with geospatial visualizations.',
    category: 'ml',
    tags: ['ML', 'Thesis'],
    techStack: ['Python', 'XGBoost', 'Random Forest', 'Geopandas'],
    icon: <FaTree />,
    iconBg: 'tree-bg',
    previewDetails: [
      'Master\'s Thesis Research Project',
      '92% prediction accuracy achieved',
      'Ensemble methods: Random Forest + XGBoost',
      'Geospatial visualizations & interactive dashboards',
      'Policy recommendations for flood risk mitigation',
      'Feature engineering on environmental factors',
    ],
    demoUrl: '#',
    images: [A_png, B_png, C_png, D_png, E_png, F_png, G_png, H_png, I_png, J_png],
    pdfUrl: thesisPdf,
  },
  {
    id: 'stroke',
    title: 'Brain Stroke Prediction System',
    subtitle: 'Healthcare ML',
    description: 'Built classification models (Logistic Regression, Random Forest, SVM) to predict stroke risk with 89% accuracy using clinical patient data.',
    category: 'ml',
    tags: ['ML', 'Classification'],
    techStack: ['Python', 'scikit-learn', 'SVM', 'Pandas'],
    icon: <FaHeartbeat />,
    iconBg: 'stroke-bg',
    previewDetails: [
      'Healthcare prediction system',
      '89% classification accuracy',
      'Multiple models: LR, RF, SVM',
      'Clinical patient data analysis',
      'Feature importance analysis',
      'Model comparison & evaluation',
    ],
    demoUrl: '#',
  },
  {
    id: 'churn',
    title: 'Customer Churn Analysis',
    subtitle: 'Business Analytics',
    description: 'Performed EDA and built predictive models to identify at-risk customers, reducing churn by 15% through data-driven retention strategies.',
    category: 'ml',
    tags: ['ML', 'Analytics'],
    techStack: ['Python', 'scikit-learn', 'EDA', 'Visualization'],
    icon: <FaUsersCog />,
    iconBg: 'churn-bg',
    previewDetails: [
      'Customer retention analytics',
      '15% churn reduction achieved',
      'Exploratory data analysis',
      'Predictive churn modeling',
      'Segmentation analysis',
      'Retention strategy recommendations',
    ],
    demoUrl: '#',
  },
  {
    id: 'forecast',
    title: 'Sales Forecasting',
    subtitle: 'Time Series',
    description: 'Developed time series models (ARIMA, Prophet) for quarterly sales prediction achieving MAPE < 8% with seasonal decomposition analysis.',
    category: 'stats',
    tags: ['Time Series', 'Forecasting'],
    techStack: ['Python', 'ARIMA', 'Prophet', 'Statsmodels'],
    icon: <FaChartLine />,
    iconBg: 'forecast-bg',
    previewDetails: [
      'Quarterly sales prediction',
      'MAPE < 8% accuracy',
      'ARIMA & Prophet models',
      'Seasonal decomposition analysis',
      'Trend & seasonality components',
      'Business forecasting dashboard',
    ],
    demoUrl: '#',
  },
  {
    id: 'energy',
    title: 'Energy Consumption Dashboard',
    subtitle: 'Business Intelligence',
    description: 'Interactive Power BI dashboard analyzing energy patterns, identifying 20% cost-saving opportunities through SQL extraction and DAX calculations.',
    category: 'viz',
    tags: ['Power BI', 'Dashboard'],
    techStack: ['Power BI', 'SQL', 'DAX', 'Excel'],
    icon: <FaBolt />,
    iconBg: 'energy-bg',
    previewDetails: [
      'Interactive Power BI dashboard',
      '20% cost-saving opportunities identified',
      'SQL data extraction & transformation',
      'DAX calculated measures',
      'Energy consumption pattern analysis',
      'Executive-level reporting',
    ],
    demoUrl: '#',
  },
  {
    id: 'sales',
    title: 'Sales Performance Analytics',
    subtitle: 'KPI Tracking',
    description: 'Created Tableau dashboards for KPI tracking, regional performance analysis, and executive reporting with drill-down capabilities.',
    category: 'viz',
    tags: ['Tableau', 'Analytics'],
    techStack: ['Tableau', 'SQL', 'Excel', 'Visualization'],
    icon: <FaChartPie />,
    iconBg: 'sales-bg',
    previewDetails: [
      'Tableau dashboard suite',
      'KPI tracking & monitoring',
      'Regional performance analysis',
      'Drill-down capabilities',
      'Executive reporting views',
      'Real-time data connections',
    ],
    demoUrl: '#',
  },
  {
    id: 'gaming',
    title: 'Youth Gaming Behavior Study',
    subtitle: 'Research Study',
    description: 'Conducted hypothesis testing, ANOVA, and regression analysis on 500+ survey responses to identify gaming addiction patterns.',
    category: 'stats',
    tags: ['Statistics', 'Research'],
    techStack: ['R', 'Python', 'ANOVA', 'Regression'],
    icon: <FaGamepad />,
    iconBg: 'gaming-bg',
    previewDetails: [
      '500+ survey responses analyzed',
      'Hypothesis testing & ANOVA',
      'Regression analysis',
      'Gaming addiction pattern identification',
      'Statistical significance testing',
      'Research paper presentation',
    ],
    demoUrl: '#',
  },
  {
    id: 'webapps',
    title: 'Data-Driven Web Applications',
    subtitle: 'Web Development',
    description: 'Weather Broadcasting App, Country Guide with real-time APIs, QR Code Generator, Text-to-Voice Converter, Quiz App with analytics.',
    category: 'web',
    tags: ['Web', 'API'],
    techStack: ['JavaScript', 'APIs', 'HTML/CSS', 'Bootstrap'],
    icon: <FaGlobe />,
    iconBg: 'web-bg',
    previewDetails: [
      'Weather Broadcasting App',
      'Country Guide with real-time APIs',
      'QR Code Generator',
      'Text-to-Voice Converter',
      'Quiz Application with analytics',
      'Online Search Engine',
    ],
    demoUrl: '#',
  },
];

const filterCategories = [
  { key: 'all', label: 'All' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'viz', label: 'Visualization' },
  { key: 'stats', label: 'Statistics' },
  { key: 'web', label: 'Web Apps' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recent work
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="section-line"></div>
        </div>

        <div className="project-filters">
          {filterCategories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className={`project-placeholder ${project.iconBg}`}>
                    {project.icon}
                    <div className="project-placeholder-overlay">
                      <span>{project.subtitle}</span>
                    </div>
                  </div>
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button
                        className="project-btn preview-btn"
                        onClick={() => setPreviewProject(project)}
                      >
                        <FaEye /> Preview
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`project-tag ${project.category}`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="projects-more">
          <p>More projects coming soon...</p>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setPreviewProject(null)}>
                <FaTimes />
              </button>
              <div className="modal-body">
                <div className={`modal-icon ${previewProject.iconBg}`}>
                  {previewProject.icon}
                </div>
                <h2>{previewProject.title}</h2>
                <p className="modal-subtitle">{previewProject.subtitle}</p>
                <p className="modal-desc">{previewProject.description}</p>
                <div className="modal-details">
                  <h4>Key Highlights</h4>
                  <ul>
                    {previewProject.previewDetails.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                {previewProject.problemContext && (
                  <div className="modal-details">
                    <h4>Problem Context</h4>
                    <p className="modal-desc" style={{textAlign: 'left', marginBottom: '16px'}}>{previewProject.problemContext}</p>
                  </div>
                )}
                {previewProject.contribution && (
                  <div className="modal-details">
                    <h4>My Contribution</h4>
                    <p className="modal-desc" style={{textAlign: 'left', marginBottom: '16px'}}>{previewProject.contribution}</p>
                  </div>
                )}
                {previewProject.keyInsights && (
                  <div className="modal-details">
                    <h4>Key Insights</h4>
                    <div style={{overflowX: 'auto'}}>
                      <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginBottom: '16px'}}>
                        <thead>
                          <tr style={{borderBottom: '1px solid var(--border-color)'}}>
                            <th style={{padding: '10px 8px', color: 'var(--accent-light)', whiteSpace: 'nowrap'}}>Metric</th>
                            <th style={{padding: '10px 8px', color: 'var(--accent-light)'}}>Finding</th>
                          </tr>
                        </thead>
                        <tbody>
                          {previewProject.keyInsights.map((insight, i) => (
                            <tr key={i} style={{borderBottom: '1px solid var(--border-color)'}}>
                              <td style={{padding: '10px 8px', color: 'var(--text-secondary)', whiteSpace: 'nowrap'}}><strong>{insight.metric}</strong></td>
                              <td style={{padding: '10px 8px', color: 'var(--text-secondary)'}}>{insight.finding}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {previewProject.recommendations && (
                  <div className="modal-details">
                    <h4>Strategic Recommendations</h4>
                    <ul>
                      {previewProject.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {previewProject.businessImpact && (
                  <div className="modal-details">
                    <h4>Business Impact</h4>
                    <p className="modal-desc" style={{textAlign: 'left', fontStyle: 'italic', marginBottom: '16px', borderLeft: '4px solid var(--accent)', paddingLeft: '12px'}}>{previewProject.businessImpact}</p>
                  </div>
                )}
                {previewProject.images && previewProject.images.length > 0 && (
                  <div className="modal-details">
                    <h4>Dashboards / Previews</h4>
                    {previewProject.images.map((img, i) => (
                      <img key={i} src={img} alt={`Preview ${i+1}`} style={{width: '100%', borderRadius: '8px', marginBottom: '16px', border: '1px solid var(--border-color)'}} />
                    ))}
                  </div>
                )}
                <div className="modal-tech">
                  <h4>Technologies</h4>
                  <div className="modal-tech-tags">
                    {previewProject.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-actions">
                  {previewProject.pdfUrl && (
                    <a href={previewProject.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <FaExternalLinkAlt /> View Full Report
                    </a>
                  )}
                  <button className="btn btn-primary" onClick={() => setPreviewProject(null)}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
