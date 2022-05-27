import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { GiTexas } from "react-icons/gi";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkt2a7g",
        "template_skygw2h",
        form.current,
        "h1ME8SQhjyuiPuHyY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <section id="contact">
      <div className="contact--container">
        <div className="top--container">
          <div>
            <h5>Let's get to know eachother</h5>
            <h1>Contact Me</h1>
          </div>
        </div>
        <div className="contact-bottom--container">
          <div className="contact-left--container"></div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="input-box">
              <textarea placeholder="Your Message" name="message" rows="5" />
            </div>
            <div>
              <input
                className="submit-btn"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
