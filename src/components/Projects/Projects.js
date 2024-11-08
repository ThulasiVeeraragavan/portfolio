import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/19.jpg";
import chatify from "../../Assets/Projects/18.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/17.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WebSocket Server Development in Rust"
              description="Designed and implemented a WebSocket server in Rust, enabling real-time data communication by sending byte arrays. Integrated with Microsoft SQL Server (MSSQL) to retrieve and manage data efficiently, ensuring seamless data flow between the server and clients. Leveraged asynchronous programming to enhance performance and scalability, resulting in a robust and responsive application."
              ghLink="https://github.com/ThulasiVeeraragavan/WebSocket"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-Time Dart Game Score Detection System"
              description="Developed a real-time scoring system for dart games using Python and OpenCV, leveraging computer vision techniques to detect dart hits and calculate scores based on dartboard zones (bullseye, double, triple). Integrated Hough Circle Transform for dartboard recognition and built an interactive GUI to adjust scoring ratios and game modes."
              ghLink="https://github.com/ThulasiVeeraragavan/Dartgame_visual"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Web Server"
              description="web Server build with Rust, Actix-web, and HTML. Have features which allows you to leverage Rust's performance and safety features on the server-side while using HTML to create the user interface and content for web applications."
              ghLink="https://github.com/ThulasiVeeraragavan/rust_webserver"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
