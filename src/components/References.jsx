import styles from './References.module.css';
import { UserCircle } from 'lucide-react';

export default function References() {
  const references = [
    {
      name: "Mr. Prasad Waduge",
      position: "CEO and Co-Founder",
      company: "Institute of Software Engineering (IJSE)",
      email: "prasad@ijse.lk",
      phone: "+94 77 2252985"
    },
    {
      name: "Mr. Yasendra Darshana",
      position: "Manager - Academic affairs",
      company: "Institute of Software Engineering (IJSE)",
      email: "yasendra@ijse.lk",
      phone: "+94 71 0794716"
    },
    {
      name: "Mr. Kavindu Hasantha",
      position: "Software Engineer",
      company: "Affno Asia Pacific",
      email: "kavinduhasantha.uk@gmail.com",
      phone: "+94 79 230479"
    }
  ];

  return (
    <section className={`section ${styles.references}`} id="references">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="title">Professional <span className="gradient-text">References</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.refGrid}>
          {references.map((ref, index) => (
            <div key={index} className={styles.refCard}>
              <div className={styles.header}>
                <UserCircle className={styles.avatar} size={48} />
                <div>
                  <h3 className={styles.name}>{ref.name}</h3>
                  <p className={styles.position}>{ref.position}</p>
                  <p className={styles.company}>{ref.company}</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.label}>Email:</span>
                  <a href={`mailto:${ref.email}`} className={styles.value}>{ref.email}</a>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.label}>Phone:</span>
                  <a href={`tel:${ref.phone}`} className={styles.value}>{ref.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
