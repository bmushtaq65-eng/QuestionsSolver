
export default function HowItWorks() {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Workflow</span>
                <h2 data-aos="fade-up">How QuestionsSolver Works</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Get professional assistance in 4 simple and completely secure steps.</p>
            </div>

            <div className="timeline">
                <div className="timeline-item left" data-aos="fade-right">
                    <div className="timeline-content">
                        <div className="timeline-number">01</div>
                        <h3>Submit Your Requirement</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Share details of your assignment, project file or online tutoring topic via our contact form or directly on WhatsApp.</p>
                    </div>
                </div>

                <div className="timeline-item right" data-aos="fade-left">
                    <div className="timeline-content">
                        <div className="timeline-number">02</div>
                        <h3>Get an Instant Quote</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Our specialized subject team evaluates the scope and returns a transparent quote with absolute timeline guarantees.</p>
                    </div>
                </div>

                <div className="timeline-item left" data-aos="fade-right">
                    <div className="timeline-content">
                        <div className="timeline-number">03</div>
                        <h3>Mentor Matching</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>We match you with a vetted Master's or PhD scholar specializing in your precise topic area for dedicated solutions.</p>
                    </div>
                </div>

                <div className="timeline-item right" data-aos="fade-left">
                    <div className="timeline-content">
                        <div className="timeline-number">04</div>
                        <h3>Deliver & Excel</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>Receive complete step-by-step papers, system files, or codes ahead of your deadline. We offer free edits if needed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
