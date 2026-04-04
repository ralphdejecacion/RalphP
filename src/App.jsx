import React from 'react';
import './App.css';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-logo">MYPORFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <button className="nav-btn-connect">CONNECT</button>
      </nav>
      <section id="home" className="hero-section section-padding bg-white">
        <div className="hero-content">
          <div className="badge">
            <span className="dot"></span> Hi, Im
          </div>
          <h1 className="hero-title">
            RALPH MICHEAL <span className="text-accent">DEJECACION</span>
          </h1>
          <h2>UI/UX DESIGNER</h2>
          <p className="hero-desc">
           I'm focusing on the intersection of clarity and editorial impact.
          </p>
          <a href="#projects" className="link-underline">VIEW SELECTED WORK</a>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80" alt="Hero 3D Character" className="hero-image" />
          <div className="floating-card">
            <h2>01</h2>
            <p>SELECTED WORKS 2024</p>
          </div>
        </div>
      </section>
      <section id="about" className="about-section section-padding bg-light">
        <div className="about-content">
          <span className="section-subtitle">ABOUT ME</span>
          <h2 className="section-title">UI/UX DESIGNER</h2>
          <div className="about-text">
            <p>With over eight years of experience in the editorial and digital landscape, my journey has been defined by a relentless pursuit of "The Essential." I believe that every pixel should serve a purpose and every void should invite contemplation.</p>
            <p>Starting in print media before transitioning to high-end digital experiences, I've learned that the strongest designs are those that facilitate seamless human interaction without shouting for attention.</p>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" alt="Profile Illustration" className="about-image" />
        </div>
      </section>
      <section id="skills" className="skills-section section-padding bg-white">
        <div className="skills-header text-left">
          <span className="section-subtitle">SKILLS</span>
          <h2 className="section-title">Skills were I do good.</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
      
            <h3 className="skill-title">INTERFACE DESIGN</h3>
            <p className="skill-desc">System-oriented UI design focusing on scalability, accessibility, and pixel-perfect execution across platforms.</p>
          </div>
          <div className="skill-card">
    
            <h3 className="skill-title">ART DIRECTION</h3>
            <p className="skill-desc">Drafting cohesive visual identities that bridge the gap between business goals and artistic expression.</p>
          </div>
          <div className="skill-card">
      
            <h3 className="skill-title">PROTOTYPING</h3>
            <p className="skill-desc">Developing high-fidelity interactive prototypes to validate user flows and sophisticated micro-interactions.</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section section-padding bg-light">
        <div className="projects-header">
          <div>
            <span className="section-subtitle">PROJECTS</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
        
        </div>

        <div className="project-list">
          <div className="project-row">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Monolith App" />
            </div>
            <div className="project-info">
              <span className="project-meta">CONCEPT DESIGN / 2024</span>
              <h3 className="project-title">Monolith App Interface</h3>
              <p className="project-desc">A radical redesign of a financial management tool, stripping away complexity to reveal a serene, data-focused experience.</p>
              <a href="#" className="link-underline">Explore Project</a>
            </div>
          </div>

          <div className="project-row reversed">
            <div className="project-info">
              <span className="project-meta">IDENTITY / 2023</span>
              <h3 className="project-title">Aurora Wellness</h3>
              <p className="project-desc">Digital presence for a premium wellness retreat, utilizing immersive imagery and typographic rhythm to induce calm.</p>
              <a href="#" className="link-underline">Explore Project</a>
            </div>
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Aurora Wellness" />
            </div>
          </div>
          <div className="project-row">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" alt="The Curator Store" />
            </div>
            <div className="project-info">
              <span className="project-meta">E-COMMERCE / 2023</span>
              <h3 className="project-title">The Curator Store</h3>
              <p className="project-desc">An editorial-first e-commerce experience that treats products like museum artifacts, emphasizing story over price tags.</p>
              <a href="#" className="link-underline">Explore Project</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section section-padding bg-white">
        <div className="contact-container">
          <div className="contact-info">
            <span className="section-subtitle">CONNECT</span>
            <h2 className="section-title">Ready to start your next project?</h2>
            
            <div className="contact-details">
              <div className="contact-block">
                <span className="meta-label">ELECTRONIC MAIL</span>
                <a href="https://dejecacionralph@gmail.com" className="contact-email">dejecacionralph@gmail.com</a>
              </div>
              <div className="contact-block">
                <span className="meta-label">DIGITAL PRESENCE</span>
                <div className="social-links">
                  <a href="#">LINKEDIN</a>
                  <a href="#">BEHANCE</a>
                  <a href="#">TWITTER / X</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label>NAME</label>
                <input type="text" placeholder="Your full name" required/>
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>INQUIRY DETAILS</label>
                <textarea placeholder="Describe your project goals" rows="4"></textarea>
              </div>
              <button type="submit" className="btn-submit">INITIALIZE CONTACT</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer bg-light">
        <div className="footer-content">
          <p>© 2026 RALPH MICHEAL DEJECACION. PORTFOLIO.</p>
          <div className="footer-links">
            <a href="#">GitHub</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}