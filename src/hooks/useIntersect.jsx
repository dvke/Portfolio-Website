import { useState, useRef, useEffect } from "react";

const useIntersect = (margin) => {
  // reference to elements
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    observer.observe(ref.current);

    // clean-up
    return () => {
      observer.unobserve(ref.current);
    };
  }, [margin]);

  return { ref, isIntersecting };
};

export default useIntersect;
