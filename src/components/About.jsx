import styles from './About.module.css';
import { User, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="title">About <span className="gradient-text">Me</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <p className={styles.bio}>
              I am Sewmini Pramodya Rupasinghe, a highly motivated Associate Software Engineer based in Mathugama.
              With a solid foundation in Java and rapid adaptation to full-stack PHP frameworks (Laravel & CodeIgniter),
              I have hands-on experience in building scalable enterprise solutions like HRM & Payroll systems.
              <br /><br />
              My passion lies in backend architecture, frontend aesthetic design, and integrating modern technologies
              like AI/ML (Python) for automated processes.
            </p>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <User className={styles.icon} />
                <div>
                  <span className={styles.label}>Name</span>
                  <span className={styles.value}>Sewmini Pramodya</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <BookOpen className={styles.icon} />
                <div>
                  <span className={styles.label}>Education</span>
                  <span className={styles.value}>BSc(Hons) Software Engineering</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <MapPin className={styles.icon} />
                <div>
                  <span className={styles.label}>Location</span>
                  <span className={styles.value}>Mathugama, Sri Lanka</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Calendar className={styles.icon} />
                <div>
                  <span className={styles.label}>Experience</span>
                  <span className={styles.value}>2+ Years</span>
                </div>
              </div>
            </div>

            <div className={styles.educationSection}>
              <h3 className={styles.subHeading}>Education Timeline</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>BSc(Hons) Software Engineering</h4>
                    <p>Cardiff Metropolitan University (via ICBT Campus)</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Graduate Diploma in Software Engineering (GDSE)</h4>
                    <p>Institute of Software Engineering (IJSE), Panadura</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>G.C.E. Ordinary Level Examination (2020)</h4>
                    <p>C.W.W Kannangara Central College, Mathugama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
