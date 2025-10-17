import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = () => {
  return (
    <div id="contact_section">
      <div id="contact_section_container">
        <form action="">
          <h5>Keep in Touch</h5>

          <div className="form_group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your mail"
            />
          </div>

          <div className="form_group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone"
            />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>

          <button>
            <span>Request Quotation</span>
            <MdArrowOutward />
          </button>
        </form>

        <div id="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15084.114488590341!2d72.8500626466976!3d19.062479145363046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s404%2C%20Naman%20Centre%2C%20C%20-%2031%2F%20G%20Block%2C%20BKC%2C%20Bandra%20(East)%2C%20Mumbai%20-%20400051%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1760639309449!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
