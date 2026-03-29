import styles from './Hero.module.css';
import { Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <span className={`${styles.badge} animate-fade-in-up`}>Available for Work</span>
          <h1 className={`${styles.title} animate-fade-in-up delay-100`}>
            Hi, I'm <span className="gradient-text">Sewmini</span>
            <br />
            Pramodya
          </h1>
          <h2 className={`${styles.subtitle} animate-fade-in-up delay-200`}>
            Associate Software Engineer
          </h2>
          <p className={`${styles.description} animate-fade-in-up delay-300`}>
            A Motivated Full Stack Software Developer with 1.8 years of experience. I specialize in designing and deploying scalable systems, rapidly adapting from Java foundations to PHP Full-Stack development to build beautiful, functional web applications.
          </p>
          <div className={`${styles.actions} animate-fade-in-up delay-400`}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Hire Me
            </a>
            <a href="/Sewmini_Pramodya_CV.pdf" download="Sewmini_Pramodya_CV.pdf" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Download CV <Download size={20} />
            </a>
          </div>
        </div>
        <div className={`${styles.imageWrapper} animate-fade-in-up delay-300`}>
          <div className={styles.imagePlaceholder}>
            <img 
              src="/profile.png" 
              alt="Sewmini Pramodya" 
              className={styles.profileImage}
            />
            {/* Abstract Background Decoration behind image */}
            <div className={styles.abstractBlob}></div>
            <div className={styles.abstractBlob2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
