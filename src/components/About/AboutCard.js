import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paras Dua </span>
            from <span className="purple"> Jalandhar, India.</span>
            <br />
            I'm a dedicated and detail-oriented Frontend Engineer with 5 years
            of professional experience in developing responsive, user friendly
            web interfaces. With a solid foundation in HTML, CSS and JavaScript,
            coupled with expertise in modern frontend libraries/frameworks like
            React and Next.js. I have successfully delivered numerous projects
            that enhance user experience and drive business growth.
            <br />
            <br />
            Throughout my career, I have honed my skills in collaborating
            closely with UX/UI designers, backend developers and stakeholders to
            create seamless, intuitive web applications. My proficiency in
            utilizing tools such as Webpack and Git, combined with a deeb
            understanding of RESTful APIs and GraphQL, has enabled me to build
            scalable and maintainable codebases.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies and reading comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Paras</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
