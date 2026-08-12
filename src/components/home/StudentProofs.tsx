
export default function StudentProofs() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Verified Results</span>
                <h2 data-aos="fade-up">Real Student Proofs</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Don't just take our word for it. See the actual grades, scores, and feedback our students share with us after their submissions.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                <div data-aos="fade-up" data-aos-delay="50" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="/proof1.jpg" alt="Student Grade Proof 49/50" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--surface)', objectFit: 'cover' }} />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="/proof2.jpg" alt="Student Grade Proof 88" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--surface)', objectFit: 'cover' }} />
                </div>
                <div data-aos="fade-up" data-aos-delay="150" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="/proof3.jpg" alt="Student Grade Proof 19.5/20" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--surface)', objectFit: 'cover' }} />
                </div>
                <div data-aos="fade-up" data-aos-delay="200" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src="/proof4.jpg" alt="Student Grade Proof A" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--surface)', objectFit: 'cover' }} />
                </div>
            </div>
            
            <div className="text-center" style={{ marginTop: '3rem' }} data-aos="fade-up" data-aos-delay="300">
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>*Screenshots shared with student permission. Personal information has been redacted for privacy.</p>
            </div>
        </div>
    </section>
  );
}
