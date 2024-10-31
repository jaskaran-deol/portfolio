import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent Products<strong className="purple"> as Engineer </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the entreprise digital web based products that i engineered recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sonnet Swift Mobile Application"
              demoLink="https://www.sonnet.ca/shift"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sonnet Claims Web Application"
              demoLink="https://www.sonnet.ca/claims"
              //description="Developed and delivered company's first web app for self serve for Fist Notice of Loss for auto & property using React, Express, GraphQL, DynamoDB to serve Sonnet customers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Postmedia Hub Web Application"
              demoLink="https://www.postmediasolutions.com/the-postmedia-hub/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Manulife Investments"
              demoLink="https://portal.manulife.ca/manulifeinvestments"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Manulife Securities"
              demoLink="https://portal.manulife.ca/manulifesecurities"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Manulife Vitality"
              demoLink="https://portal.manulife.ca/manulifevitality"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
