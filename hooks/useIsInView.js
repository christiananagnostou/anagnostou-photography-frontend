import { useState, useEffect } from "react";

export const useIsInView = (ref, rootMargin = "0px", threshold = 0) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isInView;
};