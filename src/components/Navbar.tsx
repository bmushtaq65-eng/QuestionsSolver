import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemDark ? 'light' : 'dark');
    }
  };

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--surface)', borderBottom: '1px solid var(--border)', height: 'var(--header-height)' }}>
        <div className="container flex justify-between items-center" style={{ height: '100%' }}>
          <Link to="/" className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.25rem' }}>
            <div style={{ background: 'var(--accent)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Q</div>
            <span>QuestionsSolver</span>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <ul className="flex items-center gap-6" style={{ margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: location.pathname === link.path ? 'var(--accent)' : 'var(--text)',
                      fontWeight: location.pathname === link.path ? 600 : 500,
                      fontSize: '0.95rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseOut={(e) => {
                      if (location.pathname !== link.path) {
                        e.currentTarget.style.color = 'var(--text)';
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} aria-label="Toggle theme" style={{ 
                color: 'var(--text)', 
                width: '40px', height: '40px', 
                borderRadius: '50%', background: 'var(--background)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)'
              }}>
                {theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
              <a href="https://wa.me/918085894563" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Get Help Now</a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} aria-label="Toggle theme" style={{ color: 'var(--text)' }}>
              {theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            <button onClick={() => setIsOpen(true)} style={{ color: 'var(--text)' }}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .desktop-nav { display: none !important; }
          }
          @media (min-width: 992px) {
            .mobile-toggle { display: none !important; }
          }
        `}</style>
      </nav>

      {/* Drawer Overlay */}
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="nav-drawer-header">
          <Link to="/" className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.25rem' }}>
            <div style={{ background: 'var(--accent)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Q</div>
            <span>QuestionsSolver</span>
          </Link>
          <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="drawer-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={location.pathname === link.path ? 'active' : ''}
              style={{ color: location.pathname === link.path ? 'var(--accent)' : 'var(--text)' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <a href="https://wa.me/918085894563" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
          Get Help Now
        </a>
      </div>
    </>
  );
}
