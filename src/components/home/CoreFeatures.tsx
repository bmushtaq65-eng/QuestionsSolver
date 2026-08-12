
import { Link } from 'react-router-dom';

export default function CoreFeatures() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Expert Mentorship</span>
                <h2 data-aos="fade-up">Academic Support Tailored For You</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We provide comprehensive curriculum alignment, top engineering guidance, and professional resume write-ups to boost your learning path.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Homework/Assignment Help */}
                <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 24px 0' }}>
                        <i className="fa-solid fa-book-open"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>Assignment & Homework Help</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>Step-by-step assistance across mathematics, physics, computing, and humanities, formatted to rubrics.</p>
                    <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>

                {/* Engineering Guidance */}
                <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 24px 0', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--secondary)' }}>
                        <i className="fa-solid fa-gears"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>Engineering Consultations</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>In-depth subject solutions in Civil & Mechanical engineering, electronics, system design, and analysis tools.</p>
                    <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>

                {/* Online Tutoring */}
                <div className="card-premium card-shine" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-icon-wrapper flex-center" style={{ margin: '0 0 24px 0', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>1-on-1 Online Tutoring</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>Interactive online whiteboards and personalized sessions to simplify tough topics in science and coding.</p>
                    <Link to="/services" style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
            
            <div className="text-center" style={{ marginTop: '50px' }} data-aos="fade-up">
                <Link to="/services" className="btn btn-secondary">View All Services <i className="fa-solid fa-list-check"></i></Link>
            </div>
        </div>
    </section>
  );
}
