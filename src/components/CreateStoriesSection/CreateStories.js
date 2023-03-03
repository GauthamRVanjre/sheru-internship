import React from "react";
import "./CreateStories.css";
import communication from "../../assets/communication.jpg";
import creative from "../../assets/creative.jpg";
import resistance from "../../assets/resistance.jpg";
import heights from "../../assets/heights.jpg";

const CreateStories = () => {
  return (
    <>
      <section className="create-stories-section">
        <div className="container">
          <div className="create-stories-content">
            <h3 className="content-heading">We Create Stories.</h3>
            <p className="content-paragraph">
              A simple look is all you need to crush your competition
            </p>
          </div>

          <div className="create-stories-cards">
            <div className="row">
              <div className="columns">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={creative} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Overcoming creative block</h5>
                    <p class="card-text">Brian Gardner - May 1, 2017</p>
                  </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                  <img src={communication} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Why communication is Key</h5>
                    <p class="card-text">Brian Gardner - May 1, 2017</p>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={resistance} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">The path of least resistance</h5>
                    <p class="card-text">Brian Gardner - May 1, 2017</p>
                  </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                  <img src={heights} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">How to reach new heights</h5>
                    <p class="card-text">Brian Gardner - May 1, 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateStories;
