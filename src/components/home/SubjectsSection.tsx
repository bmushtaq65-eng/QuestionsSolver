
import { Link } from 'react-router-dom';

export default function SubjectsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Academic Scope</span>
                <h2 data-aos="fade-up">Featured Subjects</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We handle complex problem solving and curriculum syllabus guidance across engineering, basic sciences, and mathematics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: '40px' }}>
                <div className="card-premium text-center" data-aos="zoom-in" data-aos-delay="100">
                    <i className="fa-solid fa-compass-drafting" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '16px' }}></i>
                    <h4>Civil Engineering</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Structural, geotech & fluid mechanics</p>
                </div>

                <div className="card-premium text-center" data-aos="zoom-in" data-aos-delay="200">
                    <i className="fa-solid fa-laptop-code" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '16px' }}></i>
                    <h4>Computer Science</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Algorithms, databases & networks</p>
                </div>

                <div className="card-premium text-center" data-aos="zoom-in" data-aos-delay="300">
                    <i className="fa-solid fa-square-root-variable" style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '16px' }}></i>
                    <h4>Mathematics</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Calculus, statistics & linear algebra</p>
                </div>

                <div className="card-premium text-center" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-solid fa-atom" style={{ fontSize: '2.5rem', color: '#10B981', marginBottom: '16px' }}></i>
                    <h4>Physics & Chemistry</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Thermodynamics & organic structures</p>
                </div>
            </div>

            <div className="text-center" data-aos="fade-up">
                <Link to="/subjects" className="btn btn-primary">Browse All Subjects <i className="fa-solid fa-cubes"></i></Link>
            </div>
        </div>
    </section>
  );
}
