import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="#25D366">
    <path d="M16 2.667A13.333 13.333 0 002.667 16c0 2.347.614 4.614 1.68 6.587L2.667 29.333l6.92-1.76A13.267 13.267 0 0016 29.333 13.333 13.333 0 0029.333 16 13.333 13.333 0 0016 2.667zm0 24.267a11.013 11.013 0 01-5.613-1.534l-.4-.24-4.08 1.04 1.08-3.946-.267-.414A10.973 10.973 0 015.027 16C5.027 9.92 9.92 5.027 16 5.027S26.973 9.92 26.973 16 22.08 26.934 16 26.934zm6.027-8.214c-.333-.167-1.96-.967-2.267-1.08-.306-.107-.52-.16-.746.16-.227.32-.867 1.08-1.067 1.306-.2.214-.4.24-.733.08a9.207 9.207 0 01-2.707-1.666 10.1 10.1 0 01-1.867-2.32c-.2-.334-.02-.52.147-.68.16-.147.333-.387.5-.574.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.574-.08-.16-.746-1.8-1.013-2.466-.267-.64-.547-.56-.747-.56-.2-.014-.413-.014-.627-.014a1.2 1.2 0 00-.88.414c-.306.333-1.16 1.133-1.16 2.773s1.187 3.213 1.347 3.44c.16.213 2.333 3.56 5.653 4.993.787.347 1.4.547 1.88.694.787.253 1.507.213 2.067.133.627-.093 1.96-.8 2.24-1.573.28-.76.28-1.414.2-1.56-.094-.134-.307-.214-.64-.374z" />
  </svg>
);

const actions = [
  { icon: <WhatsAppIcon />, label: 'WhatsApp', href: 'https://wa.me/919872633001', external: true },
  { icon: '📋', label: 'Upload Prescription', href: '#prescription', external: false },
  { icon: '🕐', label: 'Store Timings', href: '#contact', external: false },
];

const delays = [0, 0.15, 0.3];

export default function QuickActions() {
  return (
    <div style={{ backgroundColor: '#dde2ea' }}>
      <Container className="!px-0 lg:!px-0">
        <div className="grid grid-cols-3" style={{ gap: '1px' }}>
          {actions.map(({ icon, label, href, external }, i) => (
            <AnimateOnScroll key={label} direction="up" delay={delays[i]}>
              <motion.div
                className="group"
                whileHover={{ backgroundColor: '#ffffff', y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex flex-col items-center justify-center gap-2 bg-off-white py-5 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6"
                  onClick={label === 'Upload Prescription' ? (e) => {
                    e.preventDefault();
                    document.getElementById('prescription-upload-trigger')?.click();
                    document.querySelector('#prescription')?.scrollIntoView({ behavior: 'smooth' });
                  } : undefined}
                >
                  <span
                    className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: '#e8f3fb' }}
                  >
                    {typeof icon === 'string' ? <span className="text-xl md:text-2xl">{icon}</span> : icon}
                  </span>
                  <span className="text-center font-sans font-bold uppercase tracking-widest text-[#112240] text-[10px] sm:text-xs md:text-sm leading-tight">
                    {label}
                  </span>
                </a>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
