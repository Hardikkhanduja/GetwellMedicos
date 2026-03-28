import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const badges = ['✓ Licensed', '✓ Genuine Stock', '✓ Expert Staff'];

export default function About() {
  return (
    <section id="about" className="bg-white py-12 sm:py-16 md:py-20">
      <Container>
        {/* Header */}
        <AnimateOnScroll direction="up" delay={0}>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-deep">About Getwell Medicos</h2>
            <p className="mt-2 font-sans text-sm md:text-base text-muted">
              Trusted by Chandigarh families
            </p>
            <div className="mt-3 h-0.5 w-7 bg-[#4b9fd4]" />
          </div>
        </AnimateOnScroll>

        {/* Card */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-start"
            style={{
              background: '#f4f7fa',
              border: '1px solid #dde2ea',
              borderRadius: 8,
              padding: 20,
            }}
            whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(10,22,40,0.08)' }}
            transition={{ duration: 0.25 }}
          >
            {/* Icon box */}
            <div
              className="flex shrink-0 items-center justify-center self-start mx-auto sm:mx-0"
              style={{
                width: 48,
                height: 48,
                background: '#112240',
                borderRadius: 8,
                fontSize: 22,
              }}
            >
              🏥
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-serif text-navy-deep text-base sm:text-lg md:text-xl">
                Licensed &amp; Verified Pharmacy
              </h3>
              <p className="mt-2 font-sans font-light leading-relaxed text-muted text-sm md:text-base">
                Located at Booth No. 13, Sector 35C, Chandigarh, Getwell Medicos
                has been a trusted name for genuine medicines and quality
                healthcare products for over a decade.
              </p>

              {/* Trust badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="text-[10px] sm:text-xs py-1.5 px-3"
                    style={{
                      background: '#e8f3fb',
                      color: '#1a3458',
                      borderRadius: 4,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
