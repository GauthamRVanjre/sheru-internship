import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="experience-section-content">
          <h3 className="content-heading">We Build Experience</h3>
          <p className="content-paragraph">
            A minimalist approach is the only way to design a website
          </p>
        </div>

        <p className="hyphen-para">-</p>

        <div className="row">
          <div className="cols col-sm-12 col-md-6 col-lg-4">
            <h5>Design</h5>
            <p>
              With an emphasis on typography, white space and mobile design,
              your website will look breathtaking
            </p>
            <button className="btn btn-dark">Learn more</button>
          </div>
          <div className=" cols col-sm-12 col-md-6 col-lg-4">
            <h5>Content</h5>
            <p>
              Our team will teach you the art of weiting audience-focused
              content that will help you achieve success
            </p>
            <button className="btn btn-dark">Learn more</button>
          </div>
          <div className="cols col-lg-4 col-sm-12 col-md-6">
            <h5>Strategy</h5>
            <p>
              We help creative entrepreneurs build their digital business by
              focussing on three elements of a sucessful online platform
            </p>
            <button className="btn btn-dark">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
