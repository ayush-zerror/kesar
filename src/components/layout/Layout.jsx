import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const router = useRouter();
  const isTransitioning = useRef(false);

  // Prevent auto scroll
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Fade-out on route change start
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

  // Fade-in after children update, with small delay
  useEffect(() => {
    if (!isTransitioning.current) return;

    // Wait a bit before swapping children
    const timer = setTimeout(() => {
      setDisplayedChildren(children);

      gsap.fromTo(
        layoutRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            isTransitioning.current = false;
          },
        }
      );
    }, 200); // <-- small gap (fade-out fully visible before fade-in)

    return () => clearTimeout(timer);
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
