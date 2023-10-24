import React, { useEffect, useState } from "react";
import "./MovieMain.css";
import "./MoviesReal.css";
import "./MovieCard.css";

import { Link } from "react-router-dom";
import Loader from "./Loader";
import MovieOverview from "./MovieOverview";

function MovieMain() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&page=3";
  const discoverUrl = `http://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`;
  const imgUrl = `https://image.tmdb.org/t/p/w500`;
  const queryUrl = `http://www.omdbapi.com/?apikey=f84fc31d&s=inception`; // use key=f84fc31d
  const onSearch = `http://www.omdbapi.com/?apikey=f84fc31d&i=tt3731562`; //particular search using imdb id
  const onSerach =
    "https://api.themoviedb.org/3/movie/299054?api_key=323e3fe5a8237f5319c4b400fb4bd2d9"; // particular search using movies id

  const demoKeyfromYoutube = "bcc4ff10c2939665232d75d8bf0ec093";

  const forGettingParticularMovie =
    "https://api.themoviedb.org/3/movie/299054/credits?api_key=323e3fe5a8237f5319c4b400fb4bd2d9";

  const dramaUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=18&page=1";
  const fantasyUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=14&page=1";
  const netflixUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_networks=213&page=1";
  const adventureUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=12&page=1";
  const actionUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=28&page=1";
  const loveUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=10749&page=1";
  const thrillerUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=53&page=1";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [genreId, setGenreId] = useState(80);
  const [prevId, setPrevId] = useState(80);

  const [loading, setLoading] = useState(false);

  // ---------------------------------------
  const getMovie = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&with_genres=${genreId}&page=${page}`
    );
    const newMovies = await res.json();
    if (page === 1 || prevId !== genreId) {
      setMovies(newMovies.results);
    } else {
      setMovies((prevMovies) => [...prevMovies, ...newMovies.results]);
    }
    setLoading(false);
    setPrevId(genreId);
  };

  function incrementPage() {
    setPage((p) => p + 1);
  }

  useEffect(() => {
    getMovie();
  }, [page, genreId]);

  // ----------------search------------------------
  const getSearch = async () => {
    if (query === "") return;
    await fetch(`http://www.omdbapi.com/?apikey=f84fc31d&s=inception`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };

  const handleClick = async () => {
    getSearch();
  };

  // ----------------------------------------------

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
            onClick={() => setGenreId(80)}
          >
            <div className="genre">Crime</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(12)}>
            <div className="genre">Adventure</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(9648)}>
            <div className="genre">Mystery</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(53)}>
            <div className="genre">Thriller</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(27)}>
            <div className="genre">Horror</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(10749)}>
            <div className="genre">Romance</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(14)}>
            <div className="genre">Fantasy</div>
          </Link>
          <Link className="category-link cu" onClick={() => setGenreId(16)}>
            <div className="genre">Animation</div>
          </Link>

          {/* ---------------------------------------- */}

          <div className="search">
            <form className="search-form">
              <button
                onClick={handleClick}
                type="button"
                className="search-button"
              >
                <i className="fa fa-search"></i>
              </button>
              <input
                onChange={(e) => setQuery(e.target.value)}
                id="search"
                type="search"
                placeholder="&nbsp; Search for a movie..."
                className="search-input"
                value={query}
              />
            </form>
          </div>
        </div>
        {/* -----------------------------movie container------------------------------ */}

        <div className="movies-container">
          <section className="section-1">
            <div className="roww">
              {loading ? (
                <Loader />
              ) : movies?.length > 0 ? (
                movies?.map((movie) => (
                  <figure className="figuree rounded">
                    <img
                      src={
                        (movie?.Poster && movie?.Poster) ||
                        `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                      }
                      alt="ok"
                    />
                    <figcaption>
                      <Link to={`/overview/${movie?.id}`}>
                        <button
                          onClick={() => console.log("ood myre")}
                          class="btnViewMore hthree"
                        >
                          View More
                        </button>
                      </Link>
                    </figcaption>
                  </figure>
                ))
              ) : (
                <p className="fs-2 text-danger">Nothing to display</p>
              )}
            </div>
          </section>

          <div className="d-flex justify-content-center w-100">
            <button onClick={incrementPage} class="Btnn">
              More
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="100"
                height="100"
              >
                <path d="M480 224H288V32C288 14.3 273.7 0 256 0S224 14.3 224 32v192H32C14.3 224 0 238.3 0 256s14.3 32 32 32h192v192C224 497.7 238.3 512 256 512s32-14.3 32-32V288h192C497.7 288 512 273.7 512 256s-14.3-32-32-32z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieMain;
