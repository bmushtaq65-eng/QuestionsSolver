
import { Link } from 'react-router-dom';
import FAQComponent from '../components/home/FAQ';

export default function FAQPage() {
  return (
    <>
      <header className="page-header">
          <div className="container page-header-content">
              <div className="breadcrumbs">
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>FAQ</span>
              </div>
              <h1 data-aos="fade-up">Frequently Asked Questions</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '12px' }} data-aos="fade-up" data-aos-delay="100">Find quick answers regarding our service structures, deliveries, subject coverage, and pricing tools.</p>
          </div>
      </header>
      <FAQComponent />
    </>
  );
}
