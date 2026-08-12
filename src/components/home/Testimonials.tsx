
import { useEffect } from 'react';

export default function Testimonials() {
  useEffect(() => {
    // We assume Swiper is loaded globally via CDN in index.html for this replication
    if (window.Swiper) {
      new window.Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }
      });
    }
  }, []);

  return (
    <section className="section-padding testimonials-section">
        <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                <span className="tag" style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Student Reviews</span>
                <h2 data-aos="fade-up">What Our Students Say</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Over 5,000 students from top universities globally have achieved exceptional outcomes through our mentoring services.</p>
            </div>

            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="testimonial-quote">"The mechanical engineering structural report support I received was outstanding. Clear calculations, correct finite element mesh references, and finished 2 days before the deadline."</p>
                            <div className="testimonial-user">
                                <div className="testimonial-avatar flex-center" style={{ color: 'white', fontWeight: 700, background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>AH</div>
                                <div className="testimonial-info">
                                    <h4>Alex H.</h4>
                                    <p>University of Toronto (Mechanical Eng.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="testimonial-quote">"Physics thermodynamics calculations were stressing me out. The tutor walked me through the enthalpy and entropy formulas in simple terms. I got an A in my midterms!"</p>
                            <div className="testimonial-user">
                                <div className="testimonial-avatar flex-center" style={{ color: 'white', fontWeight: 700, background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}>SC</div>
                                <div className="testimonial-info">
                                    <h4>Sarah C.</h4>
                                    <p>King's College London (Physics)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p className="testimonial-quote">"Outstanding programming support. The tutor solved my recursive dynamic algorithms in Python and explained the big-O time complexity step-by-step. Absolutely recommend."</p>
                            <div className="testimonial-user">
                                <div className="testimonial-avatar flex-center" style={{ color: 'white', fontWeight: 700, background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}>RK</div>
                                <div className="testimonial-info">
                                    <h4>Rohan K.</h4>
                                    <p>NUS Singapore (Computer Science)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>
  );
}
