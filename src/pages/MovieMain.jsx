import React from "react";
import "./MovieMain.css";
import "./MoviesReal.css";
import "./MovieCard.css";

import { Link } from "react-router-dom";

function MovieMain() {
  const logoImgSrc = "https://i.imgur.com/AYldSBG.png";

  return (
    <>
      <div className="movies-wrapper">
        <div className="movies-sidebar">
          <Link className="logo-link">
            <img
              height="150px"
              src="https://i.imgur.com/AYldSBG.png"
              alt="logo"
              className="logo-image"
            />
          </Link>

          {/*----------------------------- categories ------------------------- */}
          <Link
            className="category-link current"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>
          <Link
            className="category-link cu"
            href="#"
            onclick="sortMovies('popularity')"
          >
            <div className="genre">Popular</div>
          </Link>

          {/* ---------------------------------------- */}

          <div className="search">
            <form className="search-form">
              <button type="submit" className="search-button">
                <i className="fa fa-search"></i>
              </button>
              <input
                id="search"
                type="search"
                placeholder="&nbsp; Search for a movie..."
                className="search-input"
                value=""
              />
            </form>
          </div>
        </div>
        {/* -----------------------------movie container------------------------------ */}

        <div className="movies-container">
          <section className="section-1">
            <div className="roww">
              <figure className="figuree">
                <img
                  src="https://images.pexels.com/photos/2825578/pexels-photo-2825578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="ok"
                />
                <figcaption>
                  <h3 className="hthree">Buy Now</h3>
                </figcaption>
                <Link></Link>
              </figure>
              <figure className="figuree">
                <img
                  src="https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="ok"
                />
                <figcaption>
                  <h3 className="hthree">Read More</h3>
                </figcaption>
                <Link></Link>
              </figure>
              <figure className="figuree">
                <img
                  src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="ok"
                />
                <figcaption>
                  <h3 className="hthree">Join Us</h3>
                </figcaption>
                <Link></Link>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MovieMain;
