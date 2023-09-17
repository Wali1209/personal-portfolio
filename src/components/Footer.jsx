import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} data-aos="fade-right">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col
            size={12}
            md={6}
            className="text-center text-sm-end"
            data-aos="fade-left"
          >
            <div className="social-icon">
              <a
                href="https://twitter.com/MWali1209"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://web.facebook.com/mdwali.hashmi.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/wali.1209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
