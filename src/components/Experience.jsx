import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      period: "04/2025 – 08/2025",
      title: "Full Stack Software Developer",
      company: "ERP Lanka (Pvt) Ltd",
      description: "Mastered CodeIgniter framework to develop and maintain an ERP Management System Web Application. Implemented a Sales Dashboard and automated PDF generation/delivery via email and WhatsApp. Extracted insights using tools like DBeaver and VS Code."
    },
    {
      period: "08/2023 – 04/2025",
      title: "Associate & Intern Software Engineer",
      company: "Somro BPO Services (Pvt) Ltd",
      description: "Led full-stack PHP Laravel development for three core enterprise systems, including HRM & Payroll and Academic Institution Management. Automated fingerprint machine data processing for attendance forms."
    }
  ];

  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`title ${styles.whiteText}`}>Professional <span className="gradient-text">Experience</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>{exp.period}</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <h4 className={styles.companyName}>{exp.company}</h4>
                <p className={styles.jobDescription}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
