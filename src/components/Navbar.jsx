import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from './Container';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleLinkClick(href) {
    setActiveLink(href);
    setMenuOpen(false);
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full overflow-hidden transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0a1628]/90' : 'bg-[#112240]'
      }`}
      style={{ borderBottom: '1px solid rgba(75,159,212,0.2)' }}
    >
      <Container>
        <div className="flex h-16 md:h-auto md:py-5 items-center justify-between w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 min-w-0">
            <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-[#4b9fd4] font-bold text-white text-base leading-none">
              ✚
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-white font-semibold text-sm sm:text-base truncate">
                Getwell Medicos
              </span>
              <span className="hidden sm:block text-[#7bb8e0] uppercase tracking-widest" style={{ fontSize: 8 }}>
                Sector 35C · Chandigarh
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className="text-sm transition-colors hover:text-[#4b9fd4]"
                  style={{ color: activeLink === href ? '#4b9fd4' : 'rgba(255,255,255,0.55)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex-shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px] text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{ fontSize: 20 }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col w-full"
            style={{
              backgroundColor: '#0a1628',
              borderBottom: '1px solid rgba(75,159,212,0.15)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(({ label, href }) => (
              <li key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className="block w-full text-sm transition-colors hover:text-[#4b9fd4] py-4 px-5"
                  style={{ color: activeLink === href ? '#4b9fd4' : 'rgba(255,255,255,0.85)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
