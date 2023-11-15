import React from "react";
import "./Features.css";

function Features() {
  return (
    <>
      <div className="feature-wrapper">
        <h1>Explore the Excellence</h1>
        <h1>That Redefine Your Movie Watching Experience</h1>

        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>

        <div class="cardss">
          <div class="superr">
            <h3>Searching</h3>
            <p>Easily navigate through our extensive movie database using our intuitive search feature. </p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/15RhtPW4/icon-supervisor.png"
              alt=""
            />
          </div>

          <div class="teamm">
            <h3>Seamless Browsing</h3>
            <p>
            Dive into a seamless movie-browsing experience as you surf through our carefully organized collection.
            </p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/NMvZww9s/icon-team-builder.png"
              alt=""
            />
          </div>

          <div class="karmaa">
            <h3>User-Friendly</h3>
            <p>Enjoy a sleek and user-friendly interface that enhances your overall interaction with the website. </p>
            <img
              className="feature-img"
              src="https://i.postimg.cc/Njyn90RG/icon-karma.png"
              alt=""
            />
          </div>

          <div class="calcc">
            <h3>Endless Variety</h3>
            <p>
            Immerse yourself in an infinite array of movies covering every genre, era, and theme imaginable.
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
