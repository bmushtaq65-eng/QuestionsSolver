
import Hero from '../components/home/Hero';
import CoreFeatures from '../components/home/CoreFeatures';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Statistics from '../components/home/Statistics';
import SubjectsSection from '../components/home/SubjectsSection';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import StudentProofs from '../components/home/StudentProofs';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreFeatures />
      <WhyChooseUs />
      <Statistics />
      <SubjectsSection />
      <HowItWorks />
      <Testimonials />
      <StudentProofs />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
