import styles from './Skills.module.css';

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "PHP", "JavaScript", "TypeScript", "Node.js", "Python", "R", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Laravel", "CodeIgniter", "Spring Boot", "React", "React Native", "Tailwind CSS", "Bootstrap", "Express JS"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "AWS", "Jenkins", "Jenkins", "Docker"]
    },
    {
      title: "Architecture & Other",
      skills: ["Microservices", "RESTful APIs", "Layered Architecture", "Jasper Report"]
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="title">Professional <span className="gradient-text">Skills</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={styles.skillBadge}>
                    <div className={styles.skillDot}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
