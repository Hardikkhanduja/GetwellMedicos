const Container = ({ children, className = '' }) => (
  <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;
