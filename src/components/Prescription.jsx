import { useState, useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const OWNER_WHATSAPP = '919872633001';
const API_URL = 'https://YOUR-RENDER-URL.onrender.com/api/prescription';

const steps = [
  { n: '1', label: 'Fill Details' },
  { n: '2', label: 'We Review' },
  { n: '3', label: 'We Call You' },
];

export default function Prescription() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: '' }
  const fileInputRef = useRef(null);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name and phone number.' });
      return;
    }
    if (!file) {
      setStatus({ type: 'error', message: 'Please upload your prescription photo.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('phone', phone.trim());
    formData.append('prescription', file);

    try {
      const response = await fetch(API_URL, { method: 'POST', body: formData });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: '✅ Prescription sent! We will call you back shortly.' });
        setName('');
        setPhone('');
        setFile(null);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please send your prescription on WhatsApp instead.' });
    } finally {
      setLoading(false);
    }
  };

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
              Upload your prescription and share your details — we'll review it and call you back shortly.
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
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(75,159,212,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg py-3 px-4 text-white text-base placeholder:text-white/30 focus:outline-none transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(75,159,212,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            </div>
          </AnimateOnScroll>

          {/* File upload */}
          <AnimateOnScroll direction="up" delay={0.32}>
            <div
              className="mt-3 w-full rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px dashed ${file ? 'rgba(74,222,128,0.5)' : 'rgba(255,255,255,0.15)'}`,
                padding: '20px 16px',
                minHeight: 80,
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              {file ? (
                <p style={{ color: '#4ade80', fontSize: 13, fontWeight: 500 }}>
                  ✅ {file.name}
                </p>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="rgba(75,159,212,0.6)" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                    Drop your prescription here or <span style={{ color: '#4b9fd4' }}>browse</span>
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>JPG, PNG or PDF · max 5MB</p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/jpg,application/pdf"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0] || null)}
              />
            </div>
          </AnimateOnScroll>

          {/* Submit button */}
          <AnimateOnScroll direction="up" delay={0.35}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md py-4 font-sans text-base font-bold text-white min-h-[52px] cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#4b9fd4' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit Prescription'
              )}
            </button>

            {/* Status message */}
            {status && (
              <p style={{
                marginTop: '12px',
                textAlign: 'center',
                fontSize: '13px',
                color: status.type === 'success' ? '#4ade80' : '#f87171',
                fontWeight: '500',
              }}>
                {status.message}
              </p>
            )}

            {/* WhatsApp fallback */}
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px' }}>
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7bb8e0', textDecoration: 'underline' }}
              >
                Prefer WhatsApp? Send directly →
              </a>
            </p>
          </AnimateOnScroll>

        </div>
      </Container>
    </section>
  );
}
