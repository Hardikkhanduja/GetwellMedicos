import AnimateOnScroll from './AnimateOnScroll';
import Container from './Container';

const categories = [
  'Antibiotics', 'Diabetes', 'Cardiac',
  'Vitamins', 'Pain Relief', 'Skin Care',
  'Respiratory', 'Eye & ENT', 'Surgical',
  'Nutraceuticals', 'Oncology',
];

export default function Categories() {
  return (
    <section id="categories" style={{ backgroundColor: '#f4f7fa' }} className="py-12 sm:py-16 md:py-20">
      <Container>
        {/* Header */}
        <AnimateOnScroll direction="up" delay={0}>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-deep">Medicine Categories</h2>
            <p className="mt-2 font-sans text-sm md:text-base text-muted">
              A glimpse of what we stock
            </p>
            <div className="mt-3 h-0.5 w-7 bg-[#4b9fd4]" />
          </div>
        </AnimateOnScroll>

        {/* Pills Grid */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="text-center transition-all duration-200 hover:bg-[#4b9fd4] hover:text-white hover:border-[#4b9fd4] cursor-pointer"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dde2ea',
                  borderRadius: '5px',
                  padding: '12px 8px',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  color: '#112240',
                }}
              >
                <span className="text-xs sm:text-sm">{cat}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
