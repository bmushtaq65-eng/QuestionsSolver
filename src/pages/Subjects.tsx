
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Subjects() {
  const [filter, setFilter] = useState('all');

  const subjects = [
    { category: 'engineering', title: 'Civil Engineering', icon: 'fa-compass-drafting', color: 'var(--primary)', desc: 'AutoCAD structures, structural columns, soil foundations, fluid dynamics, environmental water systems.' },
    { category: 'engineering', title: 'Mechanical Engineering', icon: 'fa-gears', color: 'var(--secondary)', desc: 'SolidWorks, finite element analysis (FEA), thermodynamics cycles, fluid machinery, structural dynamics.' },
    { category: 'science', title: 'Computer Science', icon: 'fa-laptop-code', color: 'var(--accent)', desc: 'Database normalization, network topology configurations, object oriented programming theory, system design.' },
    { category: 'general', title: 'Mathematics & Calculus', icon: 'fa-square-root-variable', color: '#10B981', desc: 'Differential equations, integrations, matrix transformations, statistics probability models, discrete proofs.' },
    { category: 'science', title: 'Physics', icon: 'fa-atom', color: 'var(--primary)', desc: 'Classical mechanics, electrodynamics, optics wave theories, thermal statistics equations, quantum laws.' },
    { category: 'science', title: 'Chemistry', icon: 'fa-flask', color: 'var(--secondary)', desc: 'Organic compound synthesis pathways, balancing stoichiometric chemical setups, gas states, thermodynamics.' },
    { category: 'science', title: 'Python Coding', icon: 'fa-python fa-brands', color: 'var(--accent)', desc: 'Data science libraries (Pandas, NumPy), scripts, Django server setups, algorithms Big-O verification.' },
    { category: 'science', title: 'Java & C++ Coding', icon: 'fa-java fa-brands', color: '#EF4444', desc: 'Object oriented class models, multithreading logic, memory management pointers, GUI applications.' },
    { category: 'engineering', title: 'Electrical Engineering', icon: 'fa-microchip', color: 'var(--primary)', desc: 'AC/DC circuit analyses, Kirchhoff laws, semiconductor modeling, signal system processing, MATLAB scripts.' },
    { category: 'engineering', title: 'Aerospace Engineering', icon: 'fa-plane-up', color: 'var(--secondary)', desc: 'Aerodynamics flows, lift and drag equations, flight control simulations, rocket thrust parameters.' },
    { category: 'general', title: 'Resume & Cover Letter', icon: 'fa-file-invoice', color: 'var(--accent)', desc: 'ATS parser optimizations, cover letters, career profiles, technical skills organization.' },
    { category: 'general', title: 'Research & LaTeX', icon: 'fa-magnifying-glass-chart', color: '#10B981', desc: 'Formatting files in LaTeX, structuring literature scopes, formatting referencing (IEEE, APA, MLA).' }
  ];

  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>Subjects</span>
              </div>
              <h1 data-aos="fade-up">Explore Our Subject Expertise</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Live search our complete coverage of engineering, technology, mathematics, and science structures.</p>
          </div>
      </header>

      <section className="section-padding">
          <div className="container">
              <div className="search-container-wrap" data-aos="fade-up" style={{ maxWidth: '500px', margin: '0 auto 50px', position: 'relative' }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                  <input type="text" className="search-bar-input" placeholder="Search subjects e.g. calculus, CAD, Python..." style={{ width: '100%', padding: '16px 20px 16px 50px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
              </div>

              <div className="filter-tabs" data-aos="fade-up" data-aos-delay="50" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                  <button className={`subject-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')} style={{ padding: '10px 24px', fontWeight: 600, borderRadius: 'var(--radius-full)', background: filter === 'all' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'all' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'all' ? 'var(--primary)' : 'var(--border-color)'}`, cursor: 'pointer' }}>All Subjects</button>
                  <button className={`subject-tab ${filter === 'engineering' ? 'active' : ''}`} onClick={() => setFilter('engineering')} style={{ padding: '10px 24px', fontWeight: 600, borderRadius: 'var(--radius-full)', background: filter === 'engineering' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'engineering' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'engineering' ? 'var(--primary)' : 'var(--border-color)'}`, cursor: 'pointer' }}>Engineering</button>
                  <button className={`subject-tab ${filter === 'science' ? 'active' : ''}`} onClick={() => setFilter('science')} style={{ padding: '10px 24px', fontWeight: 600, borderRadius: 'var(--radius-full)', background: filter === 'science' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'science' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'science' ? 'var(--primary)' : 'var(--border-color)'}`, cursor: 'pointer' }}>Computer & Science</button>
                  <button className={`subject-tab ${filter === 'general' ? 'active' : ''}`} onClick={() => setFilter('general')} style={{ padding: '10px 24px', fontWeight: 600, borderRadius: 'var(--radius-full)', background: filter === 'general' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'general' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'general' ? 'var(--primary)' : 'var(--border-color)'}`, cursor: 'pointer' }}>General & Professional</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {subjects.filter(s => filter === 'all' || s.category === filter).map((s, idx) => (
                      <div key={idx} className="card-premium text-center" data-aos="zoom-in" data-aos-delay={idx * 50}>
                          <i className={`fa-solid ${s.icon}`} style={{ fontSize: '2.5rem', color: s.color, marginBottom: '16px' }}></i>
                          <h4>{s.title}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>{s.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
