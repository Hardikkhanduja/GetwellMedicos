import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </motion.div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919872633001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          zIndex: 999,
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 2.667A13.333 13.333 0 002.667 16c0 2.347.614 4.614 1.68 6.587L2.667 29.333l6.92-1.76A13.267 13.267 0 0016 29.333 13.333 13.333 0 0029.333 16 13.333 13.333 0 0016 2.667zm0 24.267a11.013 11.013 0 01-5.613-1.534l-.4-.24-4.08 1.04 1.08-3.946-.267-.414A10.973 10.973 0 015.027 16C5.027 9.92 9.92 5.027 16 5.027S26.973 9.92 26.973 16 22.08 26.934 16 26.934zm6.027-8.214c-.333-.167-1.96-.967-2.267-1.08-.306-.107-.52-.16-.746.16-.227.32-.867 1.08-1.067 1.306-.2.214-.4.24-.733.08a9.207 9.207 0 01-2.707-1.666 10.1 10.1 0 01-1.867-2.32c-.2-.334-.02-.52.147-.68.16-.147.333-.387.5-.574.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.574-.08-.16-.746-1.8-1.013-2.466-.267-.64-.547-.56-.747-.56-.2-.014-.413-.014-.627-.014a1.2 1.2 0 00-.88.414c-.306.333-1.16 1.133-1.16 2.773s1.187 3.213 1.347 3.44c.16.213 2.333 3.56 5.653 4.993.787.347 1.4.547 1.88.694.787.253 1.507.213 2.067.133.627-.093 1.96-.8 2.24-1.573.28-.76.28-1.414.2-1.56-.094-.134-.307-.214-.64-.374z" />
        </svg>
      </a>
    </BrowserRouter>
  );
}
