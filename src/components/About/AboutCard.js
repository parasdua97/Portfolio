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
            <br />I am a front-end developer, currently working with Mobcoder.
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
