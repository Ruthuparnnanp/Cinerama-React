import React, { useEffect, useState } from "react";
import "./MovieOverview.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieOverview() {
  const { id } = useParams();
  const [castData, setCastData] = useState([]);
  const [movie, setMovie] = useState([]);

  const genress = movie?.genres?.map((el) => el.name).splice(0, 4);
  const forGettingParticularMovie =
    "https://api.themoviedb.org/3/movie/939335/credits?api_key=323e3fe5a8237f5319c4b400fb4bd2d9";

  const backgroundImage =
    (movie?.backdrop_path &&
      `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`) ||
    `https://image.tmdb.org/t/p/w500/${movie?.belongs_to_collection?.poster_path}`;

  const getCast = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`
    );
    const data = await res.json();
    const realdata = data?.cast;
    realdata.length = 6;
    setCastData(realdata);
  };

  const getMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`
    );
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
    getCast();
  }, [id]);

  return (
    <div className="d-flex w-100 justify-content-center">
      <div className="movie-card ">
        <div className="containerrr shadow">
          <div className="div-with-imag">
            <img
              src={
                (movie?.poster_path &&
                  `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`) ||
                `https://image.tmdb.org/t/p/w500/${movie?.belongs_to_collection?.backdrop_path}`
              }
              alt="cover"
              className="cover rounded"
            />
          </div>

          <div
            className="hero"
            style={{
              background: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat !important",
            }}
          ></div>

          <div className="description">
            <div className="mt-4  column1">
              {genress?.map((el) => (
                <span className="tag">{el}</span>
              ))}
            </div>

            <div className="column2">
              <div className="details">
                <div className="title1">
                  {movie?.original_title}
                  <span>PG-13</span>
                </div>

                <div className="title2">
                  {movie?.belongs_to_collection?.name}
                </div>

                <fieldset className="rating">
                  <input type="radio" id="star5" name="rating" value="5" />
                  <label
                    className="full"
                    for="star5"
                    title="Awesome - 5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    value="4 and a half"
                  />
                  <label
                    className="half"
                    for="star4half"
                    title="Pretty good - 4.5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    checked
                  />
                  <label
                    className="full"
                    for="star4"
                    title="Pretty good - 4 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    value="3 and a half"
                  />
                  <label
                    className="half"
                    for="star3half"
                    title="Meh - 3.5 stars"
                  ></label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label
                    className="full"
                    for="star3"
                    title="Meh - 3 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    value="2 and a half"
                  />
                  <label
                    className="half"
                    for="star2half"
                    title="Kinda bad - 2.5 stars"
                  ></label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label
                    className="full"
                    for="star2"
                    title="Kinda bad - 2 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    value="1 and a half"
                  />
                  <label
                    className="half"
                    for="star1half"
                    title="Meh - 1.5 stars"
                  ></label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label
                    className="full"
                    for="star1"
                    title="Sucks big time - 1 star"
                  ></label>
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    value="half"
                  />
                  <label
                    className="half"
                    for="starhalf"
                    title="Sucks big time - 0.5 stars"
                  ></label>
                </fieldset>

                <span className="likes">109 likes</span>
              </div>
              <p className="oky" style={{ marginTop: "5rem" }}>
                Bilbo Baggins is swept into a quest to reclaim the lost Dwarf
                Kingdom of Erebor from the fearsome dragon Smaug. Approached out
                of the blue by the wizard Gandalf the Grey, Bilbo finds himself
                joining a company of thirteen dwarves led by the legendary
                warrior, Thorin Oakenshield. Their journey will take them into
                the Wild; through... <Link>read more</Link>
              </p>

              <div className="avatars">
                {castData?.map((el) => (
                  <img
                    className="profileSmall"
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieOverview;
