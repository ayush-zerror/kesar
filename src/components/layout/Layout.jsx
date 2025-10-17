import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // On page mount (initial fade-in)
    gsap.fromTo(
      layoutRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const handleStart = () => {
      gsap.to(layoutRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut",
      });
    };

    const handleComplete = () => {
      gsap.fromTo(
        layoutRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <div ref={layoutRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default Layout;
