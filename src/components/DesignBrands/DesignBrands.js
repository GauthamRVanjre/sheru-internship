import React from "react";
import "./DesignBrands.css";

const DesignBrands = () => {
  return (
    <>
      <section className="design-brands-section">
        <div className="container">
          <div className="design-brands-content">
            <h3 className="content-heading">We Design Brands.</h3>
            <p className="content-paragraph">
              A simple look is all you need to crush your competition
            </p>
          </div>
          <p>-</p>

          <div className="row">
            <div className="cols col-sm-12 col-md-6 col-lg-2">Lexavenis</div>
            <div className="cols col-sm-12 col-md-6 col-lg-2">avecsimple</div>
            <div className="cols col-sm-12 col-md-6 col-lg-2">whitespace</div>
            <div className="cols col-sm-12 col-md-6 col-lg-2">minimalism</div>
            <div className="cols col-sm-12 col-md-6 col-lg-2">barcelona33</div>
            <div className="cols col-sm-12 col-md-6 col-lg-2">
              smoothVANILLA
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignBrands;
