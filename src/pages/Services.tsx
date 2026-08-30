
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>Services</span>
              </div>
              <h1 data-aos="fade-up">Premium Academic & Writing Support</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Browse our core services. Select a service to read detailed outlines and book instant help.</p>
          </div>
      </header>

      <section className="section-padding">
          <div className="container">
              <div className="grid grid-3">
                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="50">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-book-bookmark"></i>
                      </div>
                      <h3>Assignment Help</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Detailed, plagiarism-free, and well-researched papers custom-built to match your university rubric standards.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Assignment%20Help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="100">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-house-laptop"></i>
                      </div>
                      <h3>Homework Help</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Daily problem set answers, mathematical derivations, lab reports, and textbook solutions with explanations.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Homework%20Help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="150">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-chalkboard-user"></i>
                      </div>
                      <h3>Online Tutoring</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Interactive 1-on-1 virtual board sessions covering difficult mathematical proofs, code flow, and physics laws.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Online%20Tutoring" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="200">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--secondary)' }}>
                          <i className="fa-solid fa-compass-drafting"></i>
                      </div>
                      <h3>Civil Engineering</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Structural analysis, geotech modeling, fluid hydraulics, AutoCAD mapping, and concrete designs.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Civil%20Engineering%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="250">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--secondary)' }}>
                          <i className="fa-solid fa-gears"></i>
                      </div>
                      <h3>Mechanical Engineering</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Thermodynamics, heat transfer equations, CAD/SolidWorks design, and stress analysis simulations.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Mechanical%20Engineering%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="300">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
                          <i className="fa-solid fa-laptop-code"></i>
                      </div>
                      <h3>Computer Science</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Data structures, database system normalization, computer network configuration, and AI algorithms.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Computer%20Science%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="350">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-square-root-variable"></i>
                      </div>
                      <h3>Mathematics</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Calculus (I-IV), statistics probability modeling, linear algebra vector matrices, and discrete math.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Mathematics%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="400">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-atom"></i>
                      </div>
                      <h3>Physics</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Classical kinematics dynamics, electromagnetic field theory, quantum mechanics, and circuit analysis.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Physics%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="450">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-flask"></i>
                      </div>
                      <h3>Chemistry</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Organic structures synthesis, thermodynamics kinetics, balancing chemical equations, and biochemistry.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Chemistry%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="500">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
                          <i className="fa-solid fa-code"></i>
                      </div>
                      <h3>Programming</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Code writing, bug fixing, and script explanations in Python, Java, C++, JavaScript, MATLAB, and R.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Programming%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="550">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-magnifying-glass-chart"></i>
                      </div>
                      <h3>Research Assistance</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Literature review structures, LaTeX document setups, statistics analysis SPSS support, and citation formats.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Research%20Assistance" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>

                  <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="700">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-clock-rotate-left"></i>
                      </div>
                      <h3>Exam Preparation</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Custom mock test sheets, step-by-step past paper reviews, and key formula guides to ensure high scores.</p>
                      <a href="https://wa.me/916005168080?text=Hi,%20I%20need%20Exam%20Prep%20help" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: '20px', width: '100%' }}>Order on WhatsApp</a>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
