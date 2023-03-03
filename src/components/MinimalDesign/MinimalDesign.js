import React from "react";
import "./MinimalDesign.css";

const MinimalDesign = () => {
  return (
    <section className="minimal-design">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="minimal-design-content">
              <h2 className="content-heading">We crush Minimal Design.</h2>
              <p className="content-paragraph">
                Monochrome is a creative agency based in Chicago. We developed
                the Genesis framework and build mobile-optimized themes for
                wordpress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalDesign;
