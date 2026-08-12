
import { Link } from 'react-router-dom';
import { Upload, Wand2 } from 'lucide-react';

export default function SolverPreview() {
  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2>Experience the Power of QuestionsSolver</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Try our interactive solver engine for an instant, step-by-step breakdown.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '0', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: 'var(--primary-light)', padding: '1rem 1.5rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="flex items-center gap-2">
              <Wand2 size={20} className="text-accent" />
              <span style={{ fontWeight: 600 }}>QuestionsSolver Engine v2</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
          </div>
          
          {/* Body */}
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Question</div>
              <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1.05rem' }}>
                "Calculate the bending moment at point B for the simply supported beam with a uniformly distributed load of 5kN/m over its entire 10m length."
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Solution Breakdown</div>
              <div className="flex-col gap-4">
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>1</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Step 1: Identify reactions</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>First, we need to find the reactions at supports A and C before calculating the moment at B.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>2</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Step 2: Calculate support reactions</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Since the load is uniformly distributed and the beam is symmetric, R_A = R_C = (w * L) / 2 = (5 * 10) / 2 = 25 kN.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', opacity: 0.5 }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--border)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>...</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>View full solution to continue</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
              <Link to="/solver" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                <Upload size={20} /> Try Question Solver Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
