import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/images.jpeg";
import projImg2 from "../assets/img/lawyer1.jpeg";
import projImg3 from "../assets/img/lawyer2.jpeg";
import projImg4 from "../assets/img/lawyer3.jpeg";

import mob1 from "../assets/img/Doct1.webp";
import mob2 from "../assets/img/doct2.jpg";
import mob3 from "../assets/img/doct3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Laura Wilson",
      description: "Harvard student with 10 years experience",
      imgUrl: projImg1,
    },
    {
      title: "michel white",
      description: "Harvard student with 10 years experience",
      imgUrl: projImg2,
    },
    
    {
      title: "sarah delrey",
      description: "Harvard student with 10 years experience",
      imgUrl: projImg4,
    },
    
  ];
  const projects2 = [
    {
      title: "Bella Hadid",
      description: "Medical student whith A degree",
      imgUrl: mob1,
    },
    {
      title: "Jenifer Lopez",
      description: "Medical student whith A degree",
      imgUrl: mob2,
    },
    {
      title: " anna marie",
      description: "Medical student whith A degree",
      imgUrl: mob3,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> ther are the workers we have chose wisley </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">lawyers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Doctors</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ingeniors</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>hello</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}alt = ""></img>
    </section>
  )
}
