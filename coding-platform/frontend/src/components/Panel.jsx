const Panel = ({ title, children, className = '' }) => (
  <section className={`panel ${className}`}>
    <header>{title}</header>
    <pre>{children || 'No data yet.'}</pre>
  </section>
);

export default Panel;
