import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "emailjs-com";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending....");
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        window.alert("Email Sent!");
        setButtonText("Send");
      },
      (error) => {
        window.alert("Not able to send!");
        setButtonText("Send");
      }
    );
    e.target.reset();
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} data-aos="fade-up">
            <img className="contact-img" src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    name="first_name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lasttName}
                    placeholder="Last Name"
                    name="last_name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    name="user_email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    name="user_phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
