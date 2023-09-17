import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AgeCalculator.png";
import projImg2 from "../assets/img/NewsHomePage.png";
import projImg3 from "../assets/img/NotificationPage.png";
import projImg4 from "../assets/img/QRCode.png";
import projImg5 from "../assets/img/RatingComponent.png";
import projImg6 from "../assets/img/ResultSummary.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Age Calculator",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg1,
      projectURL: "https://wali1209.github.io/age-calculator-js/",
    },
    {
      title: "News Homepage",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg2,
      projectURL: "https://wali1209.github.io/news-homepage-main/",
    },
    {
      title: "Notification Page",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg3,
      projectURL: "https://wali1209.github.io/notification-page-main/",
    },
    {
      title: "QR Code",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg4,
      projectURL: "https://wali1209.github.io/qr-code-component-main/",
    },
    {
      title: "Rating US",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg5,
      projectURL:
        "https://wali1209.github.io/interactive-rating-component-main/",
    },
    {
      title: "Result Summary",
      description: "FrontEnd Mentor challenge",
      imgUrl: projImg6,
      projectURL: "https://wali1209.github.io/results-summary-component-main/",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2 data-aos="fade-up">Projects</h2>
            <p data-aos="fade-up">
              Dive into a collection of my works, including projects from
              Frontend Mentor challenges, where I've honed my skills in creative
              problem-solving. <br />
              These challenges have been instrumental in refining my skills,
              allowing me to transform concepts into polished realities
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
                data-aos="fade-up"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="slideInUp">
                <Tab.Pane
                  eventKey="first"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <Row>
                    {projects.map((project, index) => {
                      if (index < 3)
                        return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      if (index >= 3)
                        return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h1 className="empty-tab">
                    Stay tuned for more exciting projects coming soon!
                  </h1>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
