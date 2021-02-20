import { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { fromImageToUrl } from "../utils/urls";
import { useIsInView } from "../hooks";

/**
 * Uses useIsInView() custom hook to make a div that fades and scales in and out upon entering and exiting viewport
 * @param {string} margin
 * @param {integer} threshhold
 */

export const InViewImage = ({
  children,
  image,
  href,
  imageStyles = null,
  margin = "0px",
  threshold = 0,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef();
  const isInView = useIsInView(ref, margin, threshold);

  useEffect(() => {
    ref.current.style.transition = "all .5s ease";
    if (isInView) {
      ref.current.style.opacity = 1;
      ref.current.style.transform = "scale(1)";
    } else {
      ref.current.style.opacity = 0;
      ref.current.style.transform = "scale(.95)";
    }
  }, [isInView]);

  useEffect(() => {
    if (ref.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <Link href={href}>
      <a style={imageLoaded ? { display: "block" } : { display: "none" }}>
        <img
          src={fromImageToUrl(image)}
          onLoad={() => setImageLoaded(true)}
          className={imageStyles}
          ref={ref}
        />
        {children}
      </a>
    </Link>
  );
};
