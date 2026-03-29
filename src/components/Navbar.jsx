import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <a href="#home">SEWMINI<span className={styles.dot}>.</span></a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className={styles.contactBtn}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
