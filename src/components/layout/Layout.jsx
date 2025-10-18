import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const router = useRouter();
  const isTransitioning = useRef(false);

  // Prevent Next.js auto scroll
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Fade out on route change start
  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      gsap.to(layoutRef.current, {
        autoAlpha: 0,
        y: -40,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.events]);

  // Detect children change (new route) and fade in with small delay
  useEffect(() => {
    if (!isTransitioning.current) return;

    // Swap to new children
    setDisplayedChildren(children);

    // Small delay before fade-in
    gsap.fromTo(
      layoutRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2, // <-- small gap between fade-out and fade-in
        onComplete: () => {
          isTransitioning.current = false;
        },
      }
    );
  }, [children]);

  // Initial page load animation
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
