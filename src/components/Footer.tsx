
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div>
                    <Link to="/" className="logo-wrap footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '1rem' }}>
                        <div className="logo-icon flex-center" style={{ background: 'var(--accent)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontWeight: 800 }}>Q</div>
                        <span className="logo-text" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)' }}>QuestionsSolver</span>
                    </Link>
                    <p className="footer-desc" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>Empowering students through high-quality, academic mentorship and tutoring. Your gateway to higher grades and deep understanding.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <i className="fa-solid fa-location-dot" style={{ marginTop: '4px', color: '#10B981' }}></i> 
                            <span>Ward No. 33 Mahaveer Puram Colony<br />Datia, Madhya Pradesh</span>
                        </div>
                        <a href="mailto:QUESTIONSSOLVER500@GMAIL.COM" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><i className="fa-regular fa-envelope" style={{ color: 'var(--primary)' }}></i> QUESTIONSSOLVER500@GMAIL.COM</a>
                        <a href="https://wa.me/916005168080" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> +91 6005 168 080</a>
                    </div>
                    <div className="social-links" style={{ display: 'flex', gap: '10px' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link flex-center" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link flex-center" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link flex-center" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link flex-center" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <div>
                    <h4 className="footer-heading" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Links</h4>
                    <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/services" className="footer-link">Our Services</Link></li>
                        <li><Link to="/subjects" className="footer-link">Subjects Grid</Link></li>
                        <li><Link to="/blog" className="footer-link">Academic Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-heading" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Support</h4>
                    <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/faq" className="footer-link">Help & FAQs</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact Support</Link></li>
                        <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4 className="footer-heading" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Stay Updated</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Subscribe to our newsletter for study guides, academic tips, and discount offers.</p>
                    <form className="newsletter-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={(e) => e.preventDefault()}>
                        <div className="newsletter-input-group">
                            <input type="email" placeholder="Your email address" className="newsletter-input" required style={{ width: '100%', padding: '10px 15px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)' }} />
                        </div>
                        <button type="submit" className="btn btn-primary newsletter-btn" style={{ width: '100%' }}>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>&copy; 2026 QuestionsSolver. All rights reserved.</p>
                <div className="footer-bottom-links" style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/privacy" className="footer-bottom-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Privacy Policy</Link>
                    <Link to="/terms" className="footer-bottom-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
