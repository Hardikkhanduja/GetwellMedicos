import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const cards = [
  { icon: '📍', label: 'ADDRESS', value: 'Booth No. 13, Sector 35C, Chandigarh' },
  { icon: '📞', label: 'PHONE', value: '+91 98726 33001' },
  { icon: '🕐', label: 'WORKING HOURS', value: '9:00 AM – 9:00 PM · Mon–Sat', value2: '10:00 AM – 2:00 PM · Sunday' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#112240' }}>
      <Container>
        {/* Header */}
        <AnimateOnScroll direction="up" delay={0}>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Find Us</h2>
            <p className="mt-2 font-sans text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
              We're always here for you
            </p>
            <div className="mt-3 h-0.5 w-7 bg-[#4b9fd4]" />
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-3 md:max-w-2xl">
          {cards.map(({ icon, label, value, value2 }, i) => (
            <AnimateOnScroll key={label} direction="up" delay={0.1 + i * 0.1}>
              <motion.div
                className="flex items-center"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  padding: '14px 16px',
                  gap: 14,
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.09)' }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon box */}
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(75,159,212,0.12)',
                    borderRadius: 6,
                    fontSize: 16,
                  }}
                >
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <p
                    className="font-sans font-semibold uppercase tracking-widest text-[#7bb8e0] text-[10px] sm:text-xs"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    {label}
                  </p>
                  <p className="mt-0.5 font-sans font-medium text-white text-sm sm:text-base md:text-lg">
                    {value}
                  </p>
                  {value2 && (
                    <p className="font-sans font-medium text-white/70 text-xs sm:text-sm">
                      {value2}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Map */}
        <AnimateOnScroll direction="up" delay={0.4}>
          <div className="mt-6 w-full overflow-hidden rounded-xl">
            <iframe
              title="Getwell Medicos Location"
              src="https://maps.google.com/maps?q=Getwell+Medicos+Booth+No+13+Sector+35C+Chandigarh&output=embed"
              width="100%"
              style={{ border: 'none', display: 'block' }}
              className="h-[200px] sm:h-56 md:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
