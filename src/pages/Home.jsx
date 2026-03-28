import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import Services from '../components/Services';
import Categories from '../components/Categories';
import Prescription from '../components/Prescription';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickActions />
      <Services />
      <Categories />
      <Prescription />
      <About />
      <Contact />
    </main>
  );
}
