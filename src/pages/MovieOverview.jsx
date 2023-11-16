import React, { useEffect, useState } from "react";
import "./MovieOverview.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function MovieOverview() {
  const { id } = useParams();
  const [castData, setCastData] = useState([]);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const genress = movie?.genres?.map((el) => el.name).slice(0, 3);
  const forGettingParticularMovie =
    "https://api.themoviedb.org/3/movie/939335/credits?api_key=323e3fe5a8237f5319c4b400fb4bd2d9";

  const backgroundImage =
    (movie?.backdrop_path &&
      `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`) ||
    `https://image.tmdb.org/t/p/w500/${movie?.belongs_to_collection?.backdrop_path}`;

  const getCast = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`
    );
    const data = await res.json();
    const realdata = data?.cast;
    realdata.length = 6;
    setCastData(realdata);
    setLoading(false);
  };

  const getMovie = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`
    );
    const data = await res.json();
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    getCast();
  }, [id]);

  return (
   <>
      <div className="d-flex w-100 mgb justify-content-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-card ">
          <div className="containerrr shadow">
            <div className="div-with-imag">
              <img
                src={
                  (movie?.poster_path &&
                    `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`) ||
                  `https://image.tmdb.org/t/p/w500/${movie?.belongs_to_collection?.poster_path}`
                }
                alt="No cover Images sorry"
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
                    <span style={{padding:'6px'}}>{movie?.release_date}</span>
                  </div>

                  <div className="title2">
                    {movie?.belongs_to_collection?.name}
                  </div>
<span>{movie?.vote_average?.toFixed(1)} / 10</span>
                  <fieldset className="rating">
                    
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
                    
                  </fieldset>

                  <span className="likes">{movie?.vote_count} likes</span>
                </div>
                <p className="oky" style={{ marginTop: "5rem" }}>
                  {movie?.overview}
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
      )}

    </div>
    <div className="back mx-auto" style={{display:"flex",justifyContent:'end',maxWidth:"58%"}}>
    <button onClick={()=>navigate(-1)} className="btn btn-dark "><i className="fa-solid fa-arrow-left me-2"></i>Back</button>
    </div>
   </>
  );
}

export default MovieOverview;
