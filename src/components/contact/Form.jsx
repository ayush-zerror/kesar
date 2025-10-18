import React from "react";
import Button from "../common/Button";
import { MdArrowOutward } from "react-icons/md";

const Form = () => {
  return (
    <form action="">
      <h5>Keep in Touch</h5>

      <div className="form_group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
      </div>

      <div className="form_group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your mail" />
      </div>

      <div className="form_group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Your Phone" />
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

      <Button title={"Submit"} color={"blue"} icon={<MdArrowOutward />}  width={"full"}/>
    </form>
  );
};

export default Form;
