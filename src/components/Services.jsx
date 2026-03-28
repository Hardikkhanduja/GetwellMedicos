import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const services = [
  { icon: '💊', name: 'Prescription Medicines', desc: 'All allopathic, generic & branded medicines' },
  { icon: '🩺', name: 'Medical Devices', desc: 'BP monitors, glucometers, thermometers & more' },
  { icon: '👶', name: 'Baby & Mother Care', desc: 'Nutrition, skincare & hygiene essentials' },
  { icon: '🛒', name: 'OTC Products', desc: 'Over-the-counter medicines & everyday health essentials' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20">
      <Container>
        {/* Header */}
        <AnimateOnScroll direction="up" delay={0}>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-deep">What We Offer</h2>
            <p className="mt-2 font-sans text-sm md:text-base text-muted">
              Everything you need, under one trusted roof
            </p>
            <div className="mt-3 h-0.5 w-7 bg-[#4b9fd4]" />
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {services.map(({ icon, name, desc }, i) => (
            <AnimateOnScroll key={name} direction="up" delay={i * 0.1}>
              <motion.div
                className="rounded-lg bg-white p-5 sm:p-6 md:p-8 cursor-pointer h-full"
                style={{
                  border: '1px solid #dde2ea',
                  borderLeft: '3px solid #4b9fd4',
                  transition: 'border-left-width 0.25s',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(10,22,40,0.12)', borderLeftWidth: '5px' }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl">{icon}</span>
                <p className="mt-3 font-sans font-bold text-navy-deep text-base sm:text-lg md:text-xl">
                  {name}
                </p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{desc}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
