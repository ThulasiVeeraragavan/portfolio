import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/2-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <b>Passionate Programmer & Tech Enthusiast</b> 👨‍💻
              <br />
              <br />
              I found my muse in the world of programming, where every line of code is a brushstroke on the canvas of innovation. I am fluent in classics like 
              <i>
                <b className="purple"> C++, Java, and Rust. </b>
              </i>
              <br />
              <br />
              My fields of interest lie in building new &nbsp;
              <i>
                <b className="purple">🌐 Web Technologies and Products</b> and also in areas related to 
                <b className="purple"> 📊 Big Data.</b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my creativity into developing products with <b className="purple">Rust 🦀 </b> and 
              <i>
                <b className="purple">Modern Rust Libraries and Frameworks</b>
              </i> like 
              <i>
                <b className="purple"> 🚀 Actix-web.</b>
              </i>
              <br />
              <br />
              I believe that programming is not just a skill; it’s a passionate pursuit of knowledge and innovation. Let's build something extraordinary together! 💡✨
            </p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ThulasiVeeraragavan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/veera__ragavan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thulasiveeraragavan-l-b7934024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/veera._.ragavan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
