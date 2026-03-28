import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const OWNER_WHATSAPP = '919872633001';

const steps = [
  { n: '1', label: 'Fill Details' },
  { n: '2', label: 'We Review' },
  { n: '3', label: 'We Call You' },
];

export default function Prescription() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleSendWhatsApp(e) {
    e.preventDefault();
    const customerName = name.trim() || 'Not provided';
    const customerPhone = phone.trim() || 'Not provided';

    const message = `Name: ${customerName}\nPhone: ${customerPhone}`;

    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section
      id="prescription"
      className="relative overflow-hidden py-14 sm:py-16 md:py-24 text-center"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(75,159,212,0.06) 0%, transparent 70%), #0a1628',
      }}
    >
      {/* Decorative Rx */}
      <span
        className="pointer-events-none absolute top-0 right-4 select-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 120,
          color: 'rgba(75,159,212,0.04)',
          fontWeight: 700,
          lineHeight: 1,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        Rx
      </span>

      {/* Blurred blue circle */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 300, height: 300,
          background: 'rgba(75,159,212,0.05)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          bottom: -100, left: -100, zIndex: 0,
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative mx-auto max-w-full sm:max-w-xl md:max-w-2xl" style={{ zIndex: 1 }}>

          {/* Eyebrow */}
          <AnimateOnScroll direction="up" delay={0}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#4b9fd4]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#7bb8e0]">
                Quick &amp; Easy
              </span>
              <span className="h-px w-8 bg-[#4b9fd4]" />
            </div>
          </AnimateOnScroll>

          {/* Heading */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Send Your Prescription
            </h2>
          </AnimateOnScroll>

          {/* Body */}
          <AnimateOnScroll direction="up" delay={0.2}>
            <p
              className="mt-3 font-sans font-light leading-relaxed text-sm sm:text-base"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Share your name and phone number — we'll reach out to you on WhatsApp and guide you through the rest.
            </p>
          </AnimateOnScroll>

          {/* 3-step process */}
          <AnimateOnScroll direction="up" delay={0.25}>
            <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4">
              {steps.map((step, i) => (
                <div key={step.n} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 28, height: 28,
                        borderRadius: '50%',
                        border: '1px solid rgba(75,159,212,0.4)',
                        color: '#4b9fd4',
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {step.n}
                    </div>
                    <span className="uppercase tracking-widest text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="mb-4" style={{ color: 'rgba(75,159,212,0.4)', fontSize: 14 }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Name + Phone inputs */}
          <AnimateOnScroll direction="up" delay={0.3}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg py-3 px-4 text-white text-base placeholder:text-white/30 focus:outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(75,159,212,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg py-3 px-4 text-white text-base placeholder:text-white/30 focus:outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(75,159,212,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            </div>
          </AnimateOnScroll>

          {/* WhatsApp button */}
          <AnimateOnScroll direction="up" delay={0.35}>
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md py-4 font-sans text-base font-bold text-white min-h-[52px] cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="white" style={{ flexShrink: 0 }}>
                <path d="M16 2.667A13.333 13.333 0 002.667 16c0 2.347.614 4.614 1.68 6.587L2.667 29.333l6.92-1.76A13.267 13.267 0 0016 29.333 13.333 13.333 0 0029.333 16 13.333 13.333 0 0016 2.667zm0 24.267a11.013 11.013 0 01-5.613-1.534l-.4-.24-4.08 1.04 1.08-3.946-.267-.414A10.973 10.973 0 015.027 16C5.027 9.92 9.92 5.027 16 5.027S26.973 9.92 26.973 16 22.08 26.934 16 26.934zm6.027-8.214c-.333-.167-1.96-.967-2.267-1.08-.306-.107-.52-.16-.746.16-.227.32-.867 1.08-1.067 1.306-.2.214-.4.24-.733.08a9.207 9.207 0 01-2.707-1.666 10.1 10.1 0 01-1.867-2.32c-.2-.334-.02-.52.147-.68.16-.147.333-.387.5-.574.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.574-.08-.16-.746-1.8-1.013-2.466-.267-.64-.547-.56-.747-.56-.2-.014-.413-.014-.627-.014a1.2 1.2 0 00-.88.414c-.306.333-1.16 1.133-1.16 2.773s1.187 3.213 1.347 3.44c.16.213 2.333 3.56 5.653 4.993.787.347 1.4.547 1.88.694.787.253 1.507.213 2.067.133.627-.093 1.96-.8 2.24-1.573.28-.76.28-1.414.2-1.56-.094-.134-.307-.214-.64-.374z" />
              </svg>
              Send on WhatsApp
            </button>
            <p className="mt-2 text-center font-sans text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              WhatsApp will open — please attach your prescription photo before sending.
            </p>
          </AnimateOnScroll>

        </div>
      </Container>
    </section>
  );
}
