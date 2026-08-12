
import { Target, FileText, Clock, HelpCircle, GraduationCap, Link2, BookOpen, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const practiceFeatures = [
  { title: 'Topic Practice', icon: <BookOpen size={20} /> },
  { title: 'Previous-Year Questions', icon: <FileText size={20} /> },
  { title: 'Timed Tests', icon: <Clock size={20} /> },
  { title: 'UPSC-style MCQs', icon: <Layers size={20} /> },
  { title: 'Engineering MCQs', icon: <Target size={20} /> },
  { title: 'Assertion & Reason', icon: <HelpCircle size={20} /> },
  { title: 'Match the Following', icon: <Link2 size={20} /> },
  { title: 'Multiple-correct questions', icon: <GraduationCap size={20} /> }
];

export default function PracticeTests() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Practice Smarter, Not Harder</h2>
            <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Our adaptive practice engine helps you focus on your weak areas with a vast repository of questions across various formats and difficulty levels.
            </p>
            
            <Link to="/practice" className="btn btn-primary" style={{ marginBottom: '2rem' }}>
              Start Practicing Now
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practiceFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 card" style={{ padding: '1rem 1.5rem' }}>
                <div style={{ color: 'var(--accent)' }}>
                  {feature.icon}
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
