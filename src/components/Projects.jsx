import styles from './Projects.module.css';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Sinhala Multimodal Learning App",
      description: "A full-stack mobile learning assistant using React Native and Node.js. Integrates advanced AI/ML with three fine-tuned models: CNN for OCR, STT (Transformer), and TTS (Tacotron) for Sinhala.",
      tech: ["React Native", "Node.js", "Express", "MySQL", "Python", "AI/ML"],
      github: "https://github.com/Sewmini2004/AI-Powered-Sinhala-Voice-Based-Multimodal-Learning-Assistant-App-for-Students",
    },
    {
      title: "Construction Web Application",
      description: "Developed a full-stack web application for the construction industry using React for the front-end and PHP Laravel with MySQL for the back-end.",
      tech: ["React", "PHP", "Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Sewmini2004/Construction_WebSite",
    },
    {
      title: "Hospital Management System",
      description: "Modern full-stack application with a Java 17 Spring Boot API, React frontend with Tailwind CSS, MongoDB, and JWT security.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Java 17", "Spring Boot", "MongoDB"],
      github: "https://github.com/Sewmini2004/hospital-management-system",
    },
    {
      title: "Travel Management API (Microservices)",
      description: "Implemented using Microservice Architecture with Java 17, Spring Boot 3, and Spring Cloud. Includes JWT security and cross-database handling (MySQL, MongoDB).",
      tech: ["Java 17", "Spring Boot", "Microservices", "Hibernate", "MongoDB"],
      github: "https://github.com/Sewmini2004/Travel_Management_System_API",
    },
    {
      title: "POS System Using PHP CodeIgniter",
      description: "Point-of-Sale system utilizing PHP CodeIgniter, MySQL, and a Bootstrap/jQuery frontend for structured PHP web development.",
      tech: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Bootstrap"],
      github: "https://github.com/Sewmini2004/POS_System_Using_PHP_Codeigniter",
    },
    {
      title: "Bank Management System (Layered)",
      description: "Standalone app using Java 8, Layered Architecture, JDBC, JavaFX, and Jasper Reports for intuitive UI and reporting.",
      tech: ["Java", "JDBC", "JavaFX", "Jasper Reports", "MySQL"],
      github: "https://github.com/Sewmini2004/BankManagementSystemLayered",
    },
    {
      title: "Hostel Management System (Standalone)",
      description: "Developed a standalone management application using Java 11, Hibernate Native for persistence with MySQL, and JavaFX for the GUI. Integrated Jasper Reports for data visualization.",
      tech: ["Java 11", "Hibernate", "MySQL", "JavaFX", "Jasper Reports"],
      github: "https://github.com/Sewmini2004",
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="title">Featured <span className="gradient-text">Projects</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techPill}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectActions}>
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.actionBtn}>
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
