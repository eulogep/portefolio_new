import { useEffect, useRef, useState } from 'react';

const LazySection = ({ id, children, rootMargin = '200px 0px', className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <section id={id} ref={ref} className={className} aria-labelledby={`${id}-heading`}>
      {isVisible ? children : null}
    </section>
  );
};

export default LazySection;
