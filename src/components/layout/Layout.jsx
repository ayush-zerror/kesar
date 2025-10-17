import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const router = useRouter();
  const tl = useRef(gsap.timeline({ paused: true }));

  // Initial mount fade-in
  useEffect(() => {
    gsap.fromTo(
      layoutRef.current,
      { opacity: 0, y: 30, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
      }
    );
  }, []);

  // Smooth page transitions between routes
  useEffect(() => {
    const handleStart = () => {
      tl.current = gsap
        .timeline()
        .to(layoutRef.current, {
          opacity: 0,
          y: -20,
          filter: "blur(8px)",
          duration: 0.8,
          ease: "power4.inOut",
        });
    };

    const handleComplete = () => {
      gsap.fromTo(
        layoutRef.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
        }
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
    <div
      ref={layoutRef}
      style={{
        opacity: 0,
        transition: "opacity 0.6s ease",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
