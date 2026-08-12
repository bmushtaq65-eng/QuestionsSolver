
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>About Us</span>
              </div>
              <h1 data-aos="fade-up">Empowering Students Through Expert Learning</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Meet the dedicated mentors, specialists, and scholars working together to redefine standard homework tutoring globally.</p>
          </div>
      </header>

      <section className="section-padding">
          <div className="container">
              <div className="grid grid-2" style={{ alignItems: 'center' }}>
                  <div data-aos="fade-right">
                      <h2 style={{ marginBottom: '20px' }}>Our Journey & Philosophy</h2>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>QuestionsSolver was established with a singular mission: to bridge the gap between complex academic curriculums and high-quality student understanding. Traditional educational structures often struggle to cater to personalized queries. We solve this by offering interactive, custom guidance that aligns with students' specific syllabus constraints.</p>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>We believe learning should not be stressful. By matching students with postgraduate experts holding Master's or PhD degrees in STEM, engineering, humanities, and business, we ensure that every query is backed by profound academic integrity.</p>
                      <div className="grid grid-2" style={{ gap: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', fontSize: '1.25rem' }}></i>
                              <span style={{ fontWeight: 700 }}>100% Vetted Tutors</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', fontSize: '1.25rem' }}></i>
                              <span style={{ fontWeight: 700 }}>24/7 Service Desk</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex-center" data-aos="fade-left">
                      <svg viewBox="0 0 400 400" width="100%" height="auto" style={{ maxWidth: '380px' }}>
                          <defs>
                              <linearGradient id="gradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#7C3AED" />
                                  <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                          </defs>
                          <circle cx="200" cy="200" r="140" fill="url(#gradAbout)" opacity="0.1"/>
                          <rect x="60" y="60" width="280" height="280" rx="20" fill="none" stroke="url(#gradAbout)" strokeWidth="4" opacity="0.6" strokeDasharray="15 5"/>
                          <circle cx="200" cy="200" r="70" fill="none" stroke="var(--primary)" strokeWidth="2"/>
                          <circle cx="200" cy="200" r="15" fill="var(--primary)"/>
                          <g transform="translate(180, 240)" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}>
                              <rect x="0" y="0" width="160" height="100" rx="15" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="1"/>
                              <text x="80" y="45" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="28px" fill="var(--primary)" textAnchor="middle">99.8%</text>
                              <text x="80" y="75" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12px" fill="var(--text-secondary)" textAnchor="middle">Student Satisfaction</text>
                          </g>
                      </svg>
                  </div>
              </div>
          </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
              <div className="section-header">
                  <span className="tag">Core Values</span>
                  <h2>What Guides Our Work</h2>
                  <p>These values define how we approach academic problem-solving, interactions, and security configurations.</p>
              </div>

              <div className="grid grid-3">
                  <div className="card-premium" data-aos="fade-up" data-aos-delay="100">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0' }}>
                          <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <h3>Academic Integrity</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>We offer clear explanations, conceptual clarity, and original documentation. We reject copy-paste or AI plagiarisms.</p>
                  </div>

                  <div className="card-premium" data-aos="fade-up" data-aos-delay="200">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--secondary)' }}>
                          <i className="fa-solid fa-lock"></i>
                      </div>
                      <h3>Student Safety</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Absolute data privacy. Student names, email logs, and university details are never shared with external agencies.</p>
                  </div>

                  <div className="card-premium" data-aos="fade-up" data-aos-delay="300">
                      <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 20px 0', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
                          <i className="fa-solid fa-wand-magic-sparkles"></i>
                      </div>
                      <h3>Precision & Clarity</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>We don't just supply answers. We supply detailed, comment-backed, step-by-step reasoning that supports the student's exam preparation.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="section-padding">
          <div className="container">
              <div className="section-header">
                  <span className="tag">Timeline</span>
                  <h2>Our Milestone Achievements</h2>
                  <p>Tracing our path from a local university homework support desk to a premium global educational brand.</p>
              </div>

              <div className="timeline">
                  <div className="timeline-item left" data-aos="fade-right">
                      <div className="timeline-content">
                          <div className="timeline-number">2021</div>
                          <h3>The Foundation</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Started as a small peer-to-peer tutoring network supporting engineering students with computational modeling tasks.</p>
                      </div>
                  </div>

                  <div className="timeline-item right" data-aos="fade-left">
                      <div className="timeline-content">
                          <div className="timeline-number">2023</div>
                          <h3>Digital Expansion</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Launched our first messaging desk, matching students with over 50 PhD mentors in basic sciences and statistics.</p>
                      </div>
                  </div>

                  <div className="timeline-item left" data-aos="fade-right">
                      <div className="timeline-content">
                          <div className="timeline-number">2025</div>
                          <h3>Global Outpost</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Expanded services to cover US, UK, Canada, and Singapore universities, reaching 4,000+ completed assignments annually.</p>
                      </div>
                  </div>

                  <div className="timeline-item right" data-aos="fade-left">
                      <div className="timeline-content">
                          <div className="timeline-number">2026</div>
                          <h3>Web Redesign</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Introduced a premium glassmorphic portal, dynamic estimator tool, and real-time WhatsApp tutoring channels.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
