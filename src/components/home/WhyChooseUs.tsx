
export default function WhyChooseUs() {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Why Choose Us</span>
                <h2 data-aos="fade-up">Unrivaled Standards of Quality</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We differ from typical homework platforms through strict expert vetting, zero plagiarism assurance, and dedicated responsive learning channels.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="feature-card glass-panel" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-icon-wrapper flex-center">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>PhD & Masters Scholars</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>All advisors are subject experts holding advanced postgraduate degrees with proven academic track records.</p>
                </div>

                <div className="feature-card glass-panel" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-icon-wrapper flex-center" style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--secondary)' }}>
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>24/7 Rapid Turnaround</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Urgent project deadlines handled with meticulous accuracy. Day or night, we are online to assist.</p>
                </div>

                <div className="feature-card glass-panel" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-icon-wrapper flex-center" style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
                        <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>100% Confidentiality</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Your privacy, study files, personal identity, and assignments are encrypted and protected under strict safety policies.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
