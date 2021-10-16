import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">FARIS ABDUL RAHEEM </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am a Full Stack Developer working at Infosys .
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

            <li className="about-activity">
              <ImPointRight /> Netflix    
            </li>
            <li className="about-activity">
              <ImPointRight /> Meet up with friends
            </li>
           
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learn new things and improve yourself"{" "}
          </p>
          <footer className="blockquote-footer">Faris Abdul Raheem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
