import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import Button from "./Button";

const RequestForm = ({ open, setOpen }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, {
        duration: 0.4,
        autoAlpha: 1,
        display: "flex",
      });
      gsap.fromTo(
        containerRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(containerRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        duration: 0.4,
        autoAlpha: 0,
        onComplete: () => {
          overlayRef.current.style.display = "none";
        },
      });
    }
  }, [open]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setOpen(false);
    }
  };

  return (
    <div
      id="request_form"
      ref={overlayRef}
      style={{ display: "none", opacity: 0 }}
      onClick={handleOverlayClick}
    >
      <div id="request_form_container" ref={containerRef}>
        <h2>Request Quotation</h2>
        <p>
          Please fill the details below for further communication.
          <br /> Our team will get back to you soon.
        </p>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your mail" />

          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Your Phone" />

          <label htmlFor="product">Select Product</label>
          <textarea id="product" placeholder="Your Message" rows="4"></textarea>

          <Button title={"Submit"} color={"blue"} icon={<MdArrowOutward />} width={"full"}/>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
