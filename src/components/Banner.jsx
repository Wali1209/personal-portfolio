import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import person from "../assets/img/wali.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {
  const [numLoop, setNumLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const rotateWord = [
    "Web Developer",
    "Front-End Developer",
    "React Developer",
  ];

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = numLoop % rotateWord.length;
    let fullText = rotateWord[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setNumLoop(numLoop + 1);
      setDelta(600);
    }
  };
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hey! I'm Wali `} <span>a {text}</span>
              </h1>
              <p>
                I'm a dedicated front-end developer specializing in creating
                modern, user-centric web applications using the power of React
                and the art of design.
                <br />
                <br />I have the unique ability to translate creative concepts
                into functional and interactive websites.
                <br />
                <br />
                Connect with me if you share the same passion for the
                intersection of design and development as I do.
              </p>
              <HashLink to="#connect">
                <button
                  onClick={() => {
                    console.log("banner clicked");
                  }}
                >
                  Let's Connect
                  <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>

            <Col xs={12} md={6} lg={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={person} alt="portfolio Picture" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};

export default Banner;
