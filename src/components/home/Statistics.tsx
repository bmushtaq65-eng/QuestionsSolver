
import { useEffect } from 'react';

export default function Statistics() {
  useEffect(() => {
    // Simple counter animation logic
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = +(counter.getAttribute('data-target') || 0);
      const isDecimal = counter.hasAttribute('data-decimal');
      const isPlus = counter.hasAttribute('data-plus') && counter.getAttribute('data-plus') !== 'false';
      const isPercent = counter.hasAttribute('data-percent');
      
      let count = 0;
      const speed = 200; // lower is faster
      const inc = target / speed;

      const updateCount = () => {
        count += inc;
        if (count < target) {
          const display = isDecimal ? count.toFixed(1) : Math.ceil(count);
          counter.innerHTML = `${display}${isPercent ? '%' : ''}${isPlus ? '+' : ''}`;
          setTimeout(updateCount, 10);
        } else {
          counter.innerHTML = `${isDecimal ? target.toFixed(1) : target}${isPercent ? '%' : ''}${isPlus ? '+' : ''}`;
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.disconnect();
        }
      });
      observer.observe(counter);
    });
  }, []);

  return (
    <section className="section-padding stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-number" data-target="5000" data-plus="true">0</div>
                    <div className="stat-label">Happy Students</div>
                </div>
                <div class="stat-item">
                    <div className="stat-number" data-target="99.8" data-decimal="true" data-percent="true">0</div>
                    <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="150" data-plus="true">0</div>
                    <div className="stat-label">Vetted Subject Mentors</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="4.9" data-decimal="true" data-plus="false">0</div>
                    <div className="stat-label">Google Rating</div>
                </div>
            </div>
        </div>
    </section>
  );
}
