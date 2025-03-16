import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thulasi Veeraragavan </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a junior software engineer at Gi Tech.
            <br />
            I have completed Bachelor of Engineering (B.E) in Electronics and Communication Engineering at Anna University
            Tiruchirappalli.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Build boldly, make waves,<br />
            and leave your signature on solutions that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Thulasi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
