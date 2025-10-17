import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const router = useRouter();

  // Initial fade-in on first load
  useEffect(() => {
    gsap.fromTo(
      layoutRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleStart = () => {
      // Fade out current content
      gsap.to(layoutRef.current, {
        autoAlpha: 0,
        y: -10,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };

    const handleComplete = () => {
      // Wait 1 second before bringing new content
      gsap.delayedCall(.6, () => {
        gsap.fromTo(
          layoutRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
        );
      });
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <div
      ref={layoutRef}
      style={{
        opacity: 0,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
