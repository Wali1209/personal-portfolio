import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 data-aos="fade-up">Skills</h2>
              <p data-aos="fade-up">
                As a passionate front-end developer with a focus on React, I
                have honed a variety of skills that enable me to create dynamic
                and engaging web applications. My expertise includes:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel skill-slider"
              >
                <div className="item" data-aos="fade-up">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={meter2} alt="Image" />
                  <h5>Sales and Marketing</h5>
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={meter2} alt="Image" />
                  <h5>Videos Editor</h5>
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={meter3} alt="Image" />
                  <h5>Communication Skill</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
