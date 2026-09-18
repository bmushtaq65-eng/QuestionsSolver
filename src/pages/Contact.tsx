
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>Contact</span>
              </div>
              <h1 data-aos="fade-up">Get in Touch with Our Team</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Send us your coursework syllabus, question papers, or codes. Quick support is always active.</p>
          </div>
      </header>

      <section className="section-padding">
          <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '50px' }}>
                  <div data-aos="fade-right">
                      <h2 style={{ marginBottom: '24px' }}>Direct Support Desk</h2>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Whether you have a midnight calculus deadline or need ongoing tutoring in mechanical beam stresses, we are here. Drop us a line and we will match you with a scholar in minutes.</p>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '30px' }}>
                          <div className="flex-center" style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'rgba(37,211,102,0.1)', color: '#25D366', fontSize: '1.25rem', flexShrink: 0 }}>
                              <i className="fa-brands fa-whatsapp"></i>
                          </div>
                          <div>
                              <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', marginBottom: '6px' }}>Chat on WhatsApp</h5>
                              <a href="https://wa.me/918085894563" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px', textDecoration: 'none', display: 'block' }}>+91 8085 894 563</a>
                              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Average response time: 2 Minutes</p>
                          </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '30px' }}>
                          <div className="flex-center" style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'rgba(34, 158, 217, 0.1)', color: '#229ED9', fontSize: '1.25rem', flexShrink: 0 }}>
                              <i className="fa-brands fa-telegram"></i>
                          </div>
                          <div>
                              <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', marginBottom: '6px' }}>Chat on Telegram</h5>
                              <a href="https://t.me/+918085894563" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px', textDecoration: 'none', display: 'block' }}>+91 8085 894 563</a>
                              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instant messaging & group support</p>
                          </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '30px' }}>
                          <div className="flex-center" style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', fontSize: '1.25rem', flexShrink: 0 }}>
                              <i className="fa-regular fa-envelope"></i>
                          </div>
                          <div>
                              <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', marginBottom: '6px' }}>Email Address</h5>
                              <a href="mailto:QUESTIONSSOLVER500@GMAIL.COM" style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px', textDecoration: 'none', display: 'block' }}>QUESTIONSSOLVER500@GMAIL.COM</a>
                              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Response within 15 Minutes</p>
                          </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '30px' }}>
                          <div className="flex-center" style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'rgba(124,58,237,0.1)', color: 'var(--secondary)', fontSize: '1.25rem', flexShrink: 0 }}>
                              <i className="fa-regular fa-clock"></i>
                          </div>
                          <div>
                              <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', marginBottom: '6px' }}>Office Hours</h5>
                              <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>24 / 7 / 365 Support Desk</p>
                              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Always active, weekends & holidays included</p>
                          </div>
                      </div>

                  </div>

                  <div className="card-premium glass-panel" data-aos="fade-left">
                      <h3 style={{ marginBottom: '20px' }}>Send a Secure Query</h3>
                      <form id="contact-form" onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const name = formData.get('name');
                          const email = formData.get('email');
                          const phone = formData.get('phone');
                          const subject = formData.get('subject_discipline');
                          const message = formData.get('message');
                          
                          const text = `*New Assignment Query*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
                          const encodedText = encodeURIComponent(text);
                          window.open(`https://wa.me/918085894563?text=${encodedText}`, '_blank');
                      }}>
                          <div style={{ marginBottom: '20px' }}>
                              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif" }} htmlFor="form-name">Your Full Name</label>
                              <input type="text" name="name" id="form-name" style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} placeholder="John Doe" required />
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif" }} htmlFor="form-email">Email Address</label>
                              <input type="email" name="email" id="form-email" style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} placeholder="john@example.com" required />
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif" }} htmlFor="form-phone">Contact Number (WhatsApp Preferred)</label>
                              <input type="tel" name="phone" id="form-phone" style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} placeholder="+1 (555) 000-0000" required />
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif" }} htmlFor="form-subject">Subject Area / Discipline</label>
                              <input type="text" name="subject_discipline" id="form-subject" style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} placeholder="e.g. Civil Eng - Structural Bending Stress" required />
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif" }} htmlFor="form-message">Assignment Details & Urgency</label>
                              <textarea name="message" id="form-message" style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} rows={5} placeholder="Specify project outlines, deadline, syllabus constraints..." required></textarea>
                          </div>

                          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Send Assignment Query <i className="fa-solid fa-paper-plane"></i></button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
