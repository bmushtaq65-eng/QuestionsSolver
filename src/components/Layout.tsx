
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <a 
          href="https://t.me/Questionssolver" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#229ED9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(34, 158, 217, 0.4)', fontSize: '1.4rem', textDecoration: 'none', transition: 'transform 0.2s' }} 
          title="Join Telegram Group @Questionssolver" 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'} 
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a 
          href="https://wa.me/918085894563" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)', fontSize: '1.4rem', textDecoration: 'none', transition: 'transform 0.2s' }} 
          title="Chat on WhatsApp" 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'} 
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
