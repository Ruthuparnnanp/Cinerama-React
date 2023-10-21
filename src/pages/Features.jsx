import React from "react";
import "./Features.css";

function Features() {
  return (
    <>
      <div className="feature-wrapper">
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>

        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>

        <div class="cardss">
          <div class="superr">
            <h3>Supervisor</h3>
            <p>Monitors activity to identify project roadblocks</p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/15RhtPW4/icon-supervisor.png"
              alt=""
            />
          </div>

          <div class="teamm">
            <h3>Team Builder</h3>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/NMvZww9s/icon-team-builder.png"
              alt=""
            />
          </div>

          <div class="karmaa">
            <h3>Karma</h3>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/Njyn90RG/icon-karma.png"
              alt=""
            />
          </div>

          <div class="calcc">
            <h3>Calculator</h3>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/MHPsXkTj/icon-calculator.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
