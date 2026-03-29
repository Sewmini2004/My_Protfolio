"use client";

import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`title ${styles.whiteText}`}>Get In <span className="gradient-text">Touch</span></h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's talk about your next project!</h3>
            <p className={styles.infoDesc}>
              Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. 
              I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:sewminipremodya98@gmail.com" className={styles.infoValue}>sewminipremodya98@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href="tel:+94705254934" className={styles.infoValue}>+94 70 525 4934</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Address</span>
                  <span className={styles.infoValue}>No 37/12 Maddegedara Road, Mathugama</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/Sewmini2004" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sewmini-pramodya-34043a217/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send me a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can I help you?" className={styles.input}></textarea>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Sewmini Pramodya. Built with Next.js & Vanilla CSS.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className={styles.scrollTopBtn}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </footer>
    </section>
  );
}
