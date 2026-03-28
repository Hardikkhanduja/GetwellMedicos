import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const stats = [
  { value: '5000+', label: 'Medicines' },
  { value: '15+', label: 'Years' },
  { value: '100%', label: 'Genuine' },
];

const medicines = [
  'Paracetamol 500mg',
  'Metformin 850mg',
  'Cetirizine 10mg',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[100svh] md:min-h-screen flex flex-col md:flex-row items-center pt-20 pb-12 md:py-0"
      style={{ background: 'linear-gradient(135deg, #112240 0%, #1a3458 100%)' }}
    >
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full"
        style={{ border: '1px solid rgba(75,159,212,0.1)' }}
      />
      <span
        className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 rounded-full"
        style={{ border: '1px solid rgba(75,159,212,0.1)' }}
      />

      <Container className="relative w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-20">

          {/* Left column — full width mobile, 55% desktop */}
          <div className="w-full md:w-[55%]">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* Firm name */}
              <motion.div variants={itemVariants} className="mb-1">
                <span className="font-sans font-semibold text-lg sm:text-xl uppercase tracking-widest text-white">
                  Getwell Medicos
                </span>
              </motion.div>

              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#4b9fd4] flex-shrink-0" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#7bb8e0]">
                  Licensed Pharmacy · Booth No. 13, Sector 35C, Chandigarh
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl w-full leading-tight break-words text-white"
              >
                Your Health.<br />
                <span className="italic text-[#4b9fd4]">Our Priority.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="mt-4 md:mt-6 font-sans font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-full md:max-w-lg"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Genuine medicines, trusted care. Serving Chandigarh and
                delivering Pan-India via courier — with integrity and expertise.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+919872633001"
                  className="flex items-center justify-center rounded-md bg-[#4b9fd4] w-full sm:w-auto px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#3a8ec3] min-h-[52px]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8, flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Call Now
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center rounded-md border border-white/30 w-full sm:w-auto px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 min-h-[52px]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8, flexShrink: 0 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                </a>
              </motion.div>

              {/* Pan-India delivery badge */}
              <motion.div variants={itemVariants} className="mt-4 mb-2 flex items-center gap-2">
                <span className="text-[#7bb8e0] text-xs sm:text-sm">🚚 Pan-India courier delivery available</span>
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemVariants} className="mt-8 h-px w-full bg-white/10" />

              {/* Stats */}
              <motion.div variants={itemVariants} className="mt-6 grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-4 sm:gap-8">
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-[#4b9fd4] text-2xl sm:text-3xl md:text-4xl">
                        {value}
                      </span>
                      <span className="mt-1 font-sans text-xs sm:text-sm uppercase tracking-wider text-white/50">
                        {label}
                      </span>
                    </div>
                    {i < stats.length - 1 && <div className="h-8 w-px bg-white/15 flex-shrink-0" />}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right column — hidden on mobile, 45% desktop */}
          <div className="hidden md:flex md:w-[45%] justify-center items-center pr-8 lg:pr-16">
            <AnimateOnScroll direction="left" delay={0.2}>
              <div className="relative flex justify-center">
                <div
                  className="absolute rounded-full w-48 h-48 blur-3xl opacity-10 -z-10"
                  style={{ background: '#4b9fd4' }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(75,159,212,0.2)',
                    borderRadius: 16,
                    padding: 28,
                    rotate: '3deg',
                    width: 300,
                    marginRight: '2rem',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(75,159,212,0.15)',
                      color: '#7bb8e0',
                      borderRadius: 20,
                      padding: '4px 12px',
                      fontSize: 10,
                      fontWeight: 600,
                      display: 'inline-block',
                    }}
                  >
                    ✚ Prescription Ready
                  </span>

                  <div className="mt-4 flex flex-col gap-3">
                    {medicines.map((name) => (
                      <div key={name} className="flex items-center gap-3">
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                          style={{ background: '#112240' }}
                        >
                          <span style={{ fontSize: 10 }}>💊</span>
                        </div>
                        <span className="text-white flex-1" style={{ fontSize: 13 }}>
                          {name}
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            color: '#7bb8e0',
                            background: 'rgba(75,159,212,0.2)',
                            borderRadius: 4,
                            padding: '2px 6px',
                            fontWeight: 600,
                          }}
                        >
                          In Stock
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="my-4" style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />

                  <a
                    href="#prescription"
                    className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById('prescription-upload-trigger')?.click();
                      }, 600);
                    }}
                  >
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                      📋 Upload Prescription
                    </span>
                    <span style={{ color: '#4b9fd4', fontSize: 16 }}>→</span>
                  </a>
                </motion.div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </Container>
    </section>
  );
}
