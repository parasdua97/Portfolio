import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid.png";
import emotion from "../../Assets/Projects/emotion.png";
import stolt from "../../Assets/Projects/stolt.png";
import savage from "../../Assets/Projects/savage.png";
import arpong from "../../Assets/Projects/arPong.png";
import medpiper from "../../Assets/Projects/medpiper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={savage}
              isBlog={false}
              title="Savage"
              description="Savage is a product focusing on women's health. This project is built with React.js, TypeScript and Tailwind Css. I've also made significant contributions in the admin panel for Savage that is used by their experts and coaches."
              demoLink="https://www.savage.club/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medpiper}
              isBlog={false}
              title="Medpiper"
              description="Medpiper is a product driven by team of doctors, engineers, health coaches, operators and designers all working towards a holistic healthcare experience. This product is built with Next.js and Material UI."
              demoLink="https://medpiper.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stolt}
              isBlog={false}
              title="Stolt-Nielsen"
              description="Stolt-Nielsen Limited provides transportation and storage for liquids, notably specialty and bulk liquid chemicals. It also has an aquaculture division that grows turbot and other fish and fish products. This project is built with React.js"
              demoLink="https://www.stolt-nielsen.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="A web app that shows number of covid patients in different geographical locations."
              ghLink="https://github.com/Danknight97/Covid-Tracker"
              demoLink="https://covid19statswebsite.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arpong}
              isBlog={false}
              title="AR Pong"
              description="This is an android game developed in Unity Game Engine using C# and Vuforia api for implementing augmented reality with a marker based environment for the pong game"
              ghLink="https://github.com/Danknight97/AR-Pong"
              demoLink="https://play.google.com/store/apps/details?id=black_muffin.muffin&hl=en&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Recognizer"
              description="This is an android application developed in android studio using Java and Microsoft cognitive services. I developed this project when I was in college."
              ghLink="https://github.com/Danknight97/EmotionRecognizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
