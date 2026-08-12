
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
            <div className="contact-cta" data-aos="fade-up">
                <div className="contact-cta-content">
                    <h2>Ready to Elevate Your Academic Grades?</h2>
                    <p>Get in touch with an expert now. Share your requirements and we will respond with details and price structures within minutes.</p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary">Fill Query Form</Link>
                        <a href="https://wa.me/918085894563" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366' }}>
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
                {/* Dynamic premium inline SVG icon illustrative backdrop */}
                <svg className="contact-cta-illustration" viewBox="0 0 200 200">
                    <defs>
                        <linearGradient id="gradTimeline" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563EB" opacity="0.1" />
                            <stop offset="100%" stopColor="#7C3AED" opacity="0.4" />
                        </linearGradient>
                    </defs>
                    <polygon points="100,20 180,80 180,160 100,195 20,160 20,80" fill="url(#gradTimeline)"/>
                    <circle cx="100" cy="100" r="40" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="10 5" opacity="0.8"/>
                    <path d="M 80 100 L 95 115 L 125 85" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
            </div>
        </div>
    </section>
  );
}
