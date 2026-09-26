import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import CodeAnimation from './CodeAnimation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Hi, I'm <span className="bold-name">{personalInfo.name}</span>
        </h1>
        <h2 className="glitch-text" data-text={personalInfo.title}>
          {personalInfo.title}
        </h2>
        <p>
          I engineer high-concurrency transactional systems and modern web applications with 
          Spring Boot, React, and Redis. Passionate about competitive programming and scalable architectures.
        </p>
        <div className="cta-buttons">
          <a 
            href={personalInfo.resumePath}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>
        <div className="social-links">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="social-btn"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="code-animation-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <CodeAnimation />
      </motion.div>
    </section>
  );
};

export default Hero;
