import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Reader, I am <span className="purple">Jaskaran Deol </span>
            based out of  <span className="purple"> Toronto & Kitchener-Waterloo.</span>
            <br /> Experienced Senior Full Stack software Engineer specializing in the MERN stack. With a solid background in enterprise web app development, I have successfully delivered projects for renowned companies
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running Marathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Documents for fun
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Strategy 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build enterprise web applications that makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jaskaran Deol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
