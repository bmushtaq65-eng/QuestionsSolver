
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [level, setLevel] = useState('college');
  const [pages, setPages] = useState(1);
  const [urgency, setUrgency] = useState('7d');
  const [price, setPrice] = useState(17.99);

  useEffect(() => {
    let basePrice = 12.99;
    if (level === 'college') basePrice = 17.99;
    if (level === 'university') basePrice = 22.99;
    if (level === 'phd') basePrice = 29.99;
    
    let multiplier = 1;
    if (urgency === '3d') multiplier = 1.25;
    if (urgency === '24h') multiplier = 1.5;
    if (urgency === '12h') multiplier = 2.0;
    if (urgency === '6h') multiplier = 2.5;

    const total = basePrice * pages * multiplier;
    setPrice(total);
  }, [level, pages, urgency]);

  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>Pricing</span>
              </div>
              <h1 data-aos="fade-up">Transparent Tuition Cost Structures</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Calculate custom quotes based on academic level and urgency, or browse standard bundles.</p>
          </div>
      </header>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
              <div className="section-header">
                  <span className="tag">Calculator</span>
                  <h2>Instant Cost Estimator</h2>
                  <p>Adjust the slider and selection boxes below to preview custom writing and academic tutoring quotes instantly.</p>
              </div>

              <div className="calculator-card glass-panel" data-aos="fade-up" style={{ maxWidth: '650px', margin: '0 auto', padding: '40px' }}>
                  <form id="pricing-calculator-form" onSubmit={e => e.preventDefault()}>
                      <div className="calc-group" style={{ marginBottom: '24px' }}>
                          <label className="calc-label" htmlFor="calc-level" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Academic Level</label>
                          <select id="calc-level" className="calc-select" style={{ width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} value={level} onChange={e => setLevel(e.target.value)}>
                              <option value="highschool">High School</option>
                              <option value="college">College (Undergraduate)</option>
                              <option value="university">University (Graduate)</option>
                              <option value="phd">PhD Scholar</option>
                          </select>
                      </div>

                      <div className="calc-group" style={{ marginBottom: '24px' }}>
                          <label className="calc-label" htmlFor="calc-pages" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              Volume / Pages
                              <span style={{ color: 'var(--primary)', fontSize: '1.15rem' }}><b>{pages}</b> <span>Page{pages > 1 ? 's' : ''}</span></span>
                          </label>
                          <input type="range" id="calc-pages" className="calc-slider" style={{ width: '100%', height: '8px', borderRadius: 'var(--radius-full)', background: 'var(--border-color)', outline: 'none' }} min="1" max="50" value={pages} onChange={e => setPages(parseInt(e.target.value))} />
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              <span>1 Page (approx 275 words)</span>
                              <span>50 Pages</span>
                          </div>
                      </div>

                      <div className="calc-group" style={{ marginBottom: '24px' }}>
                          <label className="calc-label" htmlFor="calc-urgency" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Urgency / Delivery Deadline</label>
                          <select id="calc-urgency" className="calc-select" style={{ width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} value={urgency} onChange={e => setUrgency(e.target.value)}>
                              <option value="7d">7 Days Standard</option>
                              <option value="3d">3 Days Express</option>
                              <option value="24h">24 Hours Urgent</option>
                              <option value="12h">12 Hours Hyper-Urgent</option>
                              <option value="6h">6 Hours Emergency</option>
                          </select>
                      </div>

                      <div className="calc-output-box" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.06) 100%)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', marginTop: '30px' }}>
                          <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Estimated Investment</h4>
                          <div className="calc-price" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.75rem', fontWeight: 900, color: 'var(--primary)', marginTop: '8px' }}>${price.toFixed(2)}</div>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px', marginBottom: 0 }}>*Estimates excludes custom programming codes or CAD file complexities. Final pricing confirmed on WhatsApp review.</p>
                      </div>
                      
                      <div className="text-center" style={{ marginTop: '30px' }}>
                          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Book tutoring at this quote <i className="fa-solid fa-calendar-check"></i></Link>
                      </div>
                  </form>
              </div>
          </div>
      </section>

      <section className="section-padding">
          <div className="container">
              <div className="section-header">
                  <span className="tag">Packages</span>
                  <h2>Tutoring & Mentorship Tiers</h2>
                  <p>Select from our structured academic tiers tailored for various curriculum milestones.</p>
              </div>

              <div className="grid grid-3">
                  <div className="card-premium pricing-tier" data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <span className="tag" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--primary)' }}>High School</span>
                          <div className="pricing-tier-price" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '20px 0', fontFamily: "'Outfit', sans-serif" }}>$12.99 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ page</span></div>
                          <ul className="footer-links" style={{ marginBottom: '30px', gap: '16px' }}>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Algebra, physics & essay guides</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Turnitin plagiarism logs</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> 7-day standard delivery</li>
                              <li><i className="fa-solid fa-circle-xmark" style={{ color: 'var(--danger)', marginRight: '8px' }}></i> CAD / mechanical simulations</li>
                          </ul>
                      </div>
                      <a href="https://wa.me/918085894563?text=Hi,%20I'm%20interested%20in%20the%20High%20School%20package" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</a>
                  </div>

                  <div className="card-premium pricing-tier" style={{ borderColor: 'var(--primary)', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} data-aos="fade-up" data-aos-delay="200">
                      <div>
                          <span className="tag" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: 'white' }}>College/University</span>
                          <div className="pricing-tier-price" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '20px 0', fontFamily: "'Outfit', sans-serif" }}>$17.99 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ page</span></div>
                          <ul className="footer-links" style={{ marginBottom: '30px', gap: '16px' }}>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Engineering & Programming support</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Detailed line comments & LaTeX structure</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> 3-day turnaround available</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Free step-by-step revision edits</li>
                          </ul>
                      </div>
                      <a href="https://wa.me/918085894563?text=Hi,%20I'm%20interested%20in%20the%20College%20package" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Get Started <i className="fa-solid fa-rocket"></i></a>
                  </div>

                  <div className="card-premium pricing-tier" data-aos="fade-up" data-aos-delay="300" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <span className="tag" style={{ background: 'rgba(124,58,237,0.1)', color: 'var(--secondary)' }}>Postgraduate / PhD</span>
                          <div className="pricing-tier-price" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '20px 0', fontFamily: "'Outfit', sans-serif" }}>$29.99 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ page</span></div>
                          <ul className="footer-links" style={{ marginBottom: '30px', gap: '16px' }}>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Literature reviews & SPSS charts</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Expert academic consultations</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> 24-hour express timelines</li>
                              <li><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', marginRight: '8px' }}></i> Direct academic call support</li>
                          </ul>
                      </div>
                      <a href="https://wa.me/918085894563?text=Hi,%20I'm%20interested%20in%20the%20PhD%20package" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</a>
                  </div>
              </div>
          </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container text-center">
              <h4 style={{ textTransform: 'uppercase', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '40px' }}>Our Safety & Quality Seals</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                      <i className="fa-solid fa-shield-halved" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                      <span>SSL Secure Checkout</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                      <i className="fa-solid fa-circle-check" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                      <span>Zero Plagiarism Seal</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                      <i className="fa-solid fa-thumbs-up" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                      <span>Free Unlimited Edits</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
