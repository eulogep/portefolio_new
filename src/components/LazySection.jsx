import { useEffect, useRef, useState } from 'react';

const LazyMount = ({ children, rootMargin = '200px 0px' }) => {
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
            window.dispatchEvent(new CustomEvent('lazy-section-mounted'));
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (isVisible) return children;
  return <div ref={ref} />;
};

export default LazyMount;
