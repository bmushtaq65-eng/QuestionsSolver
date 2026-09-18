
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;
  const words = ['Assignments', 'Projects', 'Exam Prep', 'Numerical Problems'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <header className="section-padding" style={{ paddingTop: '160px', position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <span className="tag" style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-block', marginBottom: '20px' }}>
              ACADEMIC EXCELLENCE REIMAGINED
            </span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
              Master Your Courses in <br/>
              <span className="gradient-text" style={{ minWidth: '200px', display: 'inline-block' }}>{text}</span>
              <span className="typing-cursor">|</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '540px' }}>
              QuestionsSolver empowers students to excel with premium academic assistance, project consultations, and professional assignment mentorship.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary pulse-glow">
                Get Expert Help <ArrowRight size={18} />
              </Link>
              <a href="https://t.me/Questionssolver" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-brands fa-telegram" style={{ color: '#229ED9', fontSize: '1.2rem' }}></i> Join Telegram Group
              </a>
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-left" style={{ position: 'relative' }}>
            <svg viewBox="0 0 500 500" width="100%" height="auto" style={{ maxWidth: '450px', zIndex: 2 }}>
              <defs>
                <linearGradient id="svgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
                <linearGradient id="svgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="var(--accent)" />
                </linearGradient>
                <filter id="svgBlur">
                  <feGaussianBlur stdDeviation="15" />
                </filter>
              </defs>
              {/* Floating blurred bg glow */}
              <circle cx="250" cy="250" r="140" fill="url(#svgGrad2)" filter="url(#svgBlur)" opacity="0.3"/>
              {/* Main Glassmorphic Panel shape */}
              <rect x="70" y="80" width="360" height="340" rx="30" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" />
              {/* Inner Dashboard UI mimicry */}
              <rect x="100" y="110" width="300" height="40" rx="10" fill="var(--surface)" opacity="0.8" />
              <circle cx="120" cy="130" r="6" fill="#ff5f56" />
              <circle cx="140" cy="130" r="6" fill="#ffbd2e" />
              <circle cx="160" cy="130" r="6" fill="#27c93f" />
              
              <rect x="100" y="170" width="140" height="80" rx="10" fill="var(--surface)" opacity="0.9" />
              <rect x="115" y="185" width="80" height="10" rx="5" fill="var(--border)" />
              <rect x="115" y="210" width="110" height="8" rx="4" fill="var(--border)" opacity="0.5" />
              <rect x="115" y="225" width="90" height="8" rx="4" fill="var(--border)" opacity="0.5" />

              <rect x="260" y="170" width="140" height="80" rx="10" fill="var(--surface)" opacity="0.9" />
              <circle cx="330" cy="210" r="25" fill="url(#svgGrad1)" opacity="0.8" />
              
              <rect x="100" y="270" width="300" height="120" rx="10" fill="var(--surface)" opacity="0.9" />
              <rect x="120" y="290" width="120" height="12" rx="6" fill="var(--accent)" />
              <rect x="120" y="320" width="260" height="8" rx="4" fill="var(--border)" opacity="0.7" />
              <rect x="120" y="340" width="220" height="8" rx="4" fill="var(--border)" opacity="0.7" />
              <rect x="120" y="360" width="180" height="8" rx="4" fill="var(--border)" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
