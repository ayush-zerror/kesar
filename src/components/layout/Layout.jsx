import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const router = useRouter();

  // When route changes, this ensures new children are detected
  useEffect(() => {
    if (children === displayedChildren) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // After fade out, swap content
        setDisplayedChildren(children);

        // Fade in new content
        gsap.fromTo(
          layoutRef.current,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      },
    });

    // Fade out old content
    tl.to(layoutRef.current, {
      autoAlpha: 0,
      y: -40,
      duration: 0.6,
      ease: "power2.inOut",
    });

    // Wait a bit before swapping children
    tl.to({}, { duration: 0.2 });

  }, [children, displayedChildren]);

  // Initial entry animation on mount
  useEffect(() => {
    gsap.fromTo(
      layoutRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={layoutRef}
      style={{
        opacity: 0,
        willChange: "opacity, transform",
      }}
    >
      {displayedChildren}
    </div>
  );
};

export default Layout;
