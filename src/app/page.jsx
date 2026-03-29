import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import References from '@/components/References';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <References />
      <Contact />
    </>
  );
}
