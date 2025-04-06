import React from "react";
import "./About.scss";
import { aboutImage } from "../../../assets";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="heading">
          About <span>Starlite Global International Trading Limited</span>
        </h1>

        <div className="content">
          <div className="text">
            <p className="intro">
              <strong><em>Starlite Global International Trading Limited – is one of the leading shipping and logistics companies in Singapore.</em></strong>
            </p>

            <p>
              Starlite Global International Trading Limited moves business and industry through innovation, inspiration, and foresight. Starlite Global International Trading Limited has become one of the most diversified and highly regarded businesses in the East and South Asia region and beyond. Since its inception, it has always put the interests of customers first, constantly improving services, striving for quality, and actively building a trusted brand.
            </p>

            <p>
              Our expertise in the industry extends across various modes of SEA, AIR, and ROAD transport—providing comprehensive logistics solutions from Asia to the Middle East, Africa, Europe, Mediterranean, and other emerging markets, supported by our global carrier and airline partners.
            </p>
          </div>

          <div className="image">
            <img src={aboutImage} alt="About Starlite Global International Trading Limited" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
