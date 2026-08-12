
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [filter, setFilter] = useState('all');

  const posts = [
    { category: 'engineering', date: 'July 10, 2026', readTime: '8 Min Read', title: 'Solving Structural Shear Forces in Civil Projects', excerpt: 'A step-by-step tutorial on calculating shear stress distributions and bending moments in support beams under point load setups.' },
    { category: 'math', date: 'July 05, 2026', readTime: '5 Min Read', title: 'Understanding Enthalpy & Entropy in Chemistry', excerpt: 'How thermodynamic state changes influence chemical reactions. We simplify Gibbs free energy derivation formulas.' },
    { category: 'coding', date: 'June 28, 2026', readTime: '10 Min Read', title: 'Python Pointers: Recursion vs Dynamic Loops', excerpt: 'Optimize algorithm speeds. Check how recursion depth impacts computational stacks vs memoization parameters in Python.' },
    { category: 'study', date: 'June 20, 2026', readTime: '6 Min Read', title: 'How to Structure a Scientific Research Literature Scope', excerpt: 'A master class guide on organizing reference citations using LaTeX, Zotero database indexing, and avoiding outline errors.' },
  ];

  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>Blog</span>
              </div>
              <h1 data-aos="fade-up">Scholarly Insights & Resources</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Study smarter, not harder. Discover engineering tutorials, programming hints, and college writing guides.</p>
          </div>
      </header>

      <section className="section-padding">
          <div className="container">
              <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '40px' }}>
                  <div>
                      <div className="blog-tabs" data-aos="fade-up" style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                          <button className={`blog-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')} style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', background: filter === 'all' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'all' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'all' ? 'var(--primary)' : 'var(--border-color)'}`, fontWeight: 600, cursor: 'pointer' }}>All Articles</button>
                          <button className={`blog-tab ${filter === 'engineering' ? 'active' : ''}`} onClick={() => setFilter('engineering')} style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', background: filter === 'engineering' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'engineering' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'engineering' ? 'var(--primary)' : 'var(--border-color)'}`, fontWeight: 600, cursor: 'pointer' }}>Engineering</button>
                          <button className={`blog-tab ${filter === 'math' ? 'active' : ''}`} onClick={() => setFilter('math')} style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', background: filter === 'math' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'math' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'math' ? 'var(--primary)' : 'var(--border-color)'}`, fontWeight: 600, cursor: 'pointer' }}>Mathematics</button>
                          <button className={`blog-tab ${filter === 'coding' ? 'active' : ''}`} onClick={() => setFilter('coding')} style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', background: filter === 'coding' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'coding' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'coding' ? 'var(--primary)' : 'var(--border-color)'}`, fontWeight: 600, cursor: 'pointer' }}>Coding & CS</button>
                          <button className={`blog-tab ${filter === 'study' ? 'active' : ''}`} onClick={() => setFilter('study')} style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', background: filter === 'study' ? 'var(--primary)' : 'var(--bg-secondary)', color: filter === 'study' ? 'white' : 'var(--text-secondary)', border: `1px solid ${filter === 'study' ? 'var(--primary)' : 'var(--border-color)'}`, fontWeight: 600, cursor: 'pointer' }}>Study Tips</button>
                      </div>

                      <div className="grid grid-2">
                          {posts.filter(p => filter === 'all' || p.category === filter).map((post, idx) => (
                              <div key={idx} className="card-premium blog-card" data-aos="fade-up" data-aos-delay={idx * 50}>
                                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                                  </div>
                                  <h3 style={{ marginBottom: '12px' }}>{post.title}</h3>
                                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{post.excerpt}</p>
                                  <Link to="#" style={{ color: 'var(--primary)', fontWeight: 700 }}>Read Tutorial <i className="fa-solid fa-arrow-right-long"></i></Link>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div>
                      <div className="sidebar-widget" data-aos="fade-up" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '30px' }}>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>Search Articles</h4>
                          <div style={{ position: 'relative' }}>
                              <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                              <input type="text" placeholder="Type keywords..." style={{ width: '100%', padding: '12px 12px 12px 42px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                          </div>
                      </div>

                      <div className="sidebar-widget" data-aos="fade-up" data-aos-delay="100" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '30px' }}>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>Newsletter</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Get weekly study files and guide updates directly inside your mailbox.</p>
                          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                              <input type="email" placeholder="Your email address" className="newsletter-input" style={{ marginBottom: '12px', width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
                              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '10px' }}>Subscribe</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
