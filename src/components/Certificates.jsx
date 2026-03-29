import styles from './Certificates.module.css';
import { Award, BookCheck } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Amazon Q Developer Fundamentals",
      issuer: "AWS Certification",
      icon: <Award className={styles.icon} size={32} />
    },
    {
      title: "Diploma in English",
      issuer: "British Way English Academy",
      icon: <BookCheck className={styles.icon} size={32} />
    }
  ];

  return (
    <section className={`section ${styles.certificates}`} id="certificates">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="title">Licenses & <span className="gradient-text">Certifications</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.certGrid}>
          {certificates.map((cert, index) => (
            <div key={index} className={styles.certCard}>
              <div className={styles.iconWrapper}>
                {cert.icon}
              </div>
              <div className={styles.certContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
