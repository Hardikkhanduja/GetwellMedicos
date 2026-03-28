import Container from './Container';

export default function Footer() {
  return (
    <footer
      className="py-8 md:py-10 text-center"
      style={{
        backgroundColor: '#0a1628',
        borderTop: '1px solid rgba(75,159,212,0.15)',
      }}
    >
      <Container>
        <div style={{ width: 40, height: 1, background: '#4b9fd4', margin: '0 auto 12px' }} />

        <p className="font-sans font-semibold uppercase tracking-widest text-xs sm:text-sm" style={{ color: '#4b9fd4' }}>
          Getwell Medicos
        </p>

        <p className="mt-1 font-sans text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          © 2026 · Booth No. 13, Sector 35C, Chandigarh · All Rights Reserved
        </p>

        <p className="mt-3 font-sans text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          Licensed Pharmacy · All medicines are genuine &amp; verified
        </p>
      </Container>
    </footer>
  );
}
