
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Common Queries</span>
                <h2 data-aos="fade-up">Frequently Asked Questions</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Have questions about delivery, revisions, or our security systems? Find answers below.</p>
            </div>

            <div className="faq-list" style={{ marginBottom: '40px' }}>
                <div data-aos="fade-up">
                    <div className={`faq-item ${openIndex === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                        <div className="faq-question">
                            <span>How are task quotes calculated?</span>
                            <div className="faq-icon flex-center">
                                <i className={`fa-solid ${openIndex === 0 ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                        </div>
                        <div className="faq-answer" style={{ maxHeight: openIndex === 0 ? '200px' : '0' }}>
                            <div className="faq-answer-content">
                            Pricing is determined based on the complexity of the subject matter (e.g. general math vs. PhD level mechanical engineering), the number of pages/problem complexity, and the deadline window. Please contact us on WhatsApp to get an instant quote.
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up">
                    <div className={`faq-item ${openIndex === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                        <div className="faq-question">
                            <span>Do you offer custom code and software files?</span>
                            <div className="faq-icon flex-center">
                                <i className={`fa-solid ${openIndex === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                        </div>
                        <div className="faq-answer" style={{ maxHeight: openIndex === 1 ? '200px' : '0' }}>
                            <div className="faq-answer-content">
                                Yes, our computer science and programming experts cover Python, C++, Java, MATLAB, and web development. Code files come with clear line comments and instructions on running them.
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up">
                    <div className={`faq-item ${openIndex === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                        <div className="faq-question">
                            <span>How can I track my homework or tutoring session?</span>
                            <div className="faq-icon flex-center">
                                <i className={`fa-solid ${openIndex === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                        </div>
                        <div className="faq-answer" style={{ maxHeight: openIndex === 2 ? '200px' : '0' }}>
                            <div className="faq-answer-content">
                                Once your request is approved, you will be in direct contact with your dedicated support agent via WhatsApp or Email. You can request drafts and adjustments anytime.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center" data-aos="fade-up">
                <Link to="/faq" className="btn btn-secondary">Read Full FAQ List <i className="fa-solid fa-circle-question"></i></Link>
            </div>
        </div>
    </section>
  );
}
