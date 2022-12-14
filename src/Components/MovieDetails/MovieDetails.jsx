import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../Loader/Loader";

export default function MovieDetails() {
  let { id, media_type } = useParams();
  console.log(media_type);
  const [movieDetails, setMovieDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMovieDetails(id, mediaType) {
    let { data } = await axios.get(`
  https://api.themoviedb.org/3/${mediaType}/${id}?api_key=44ee5523e457e74020effc2bddc4592e`);
    setMovieDetails(data);
    setLoading(false);
    console.log(data);
  }
  async function getSimilar(id, mediaType) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=44ee5523e457e74020effc2bddc4592e&language=en-US`);
    setSimilar(data.results);
    setLoading(false);

    console.log(data.results);
  }
  // function similarDetails() {
  //   navigate(`/moviedetails/${id}/${media_type}`);
  // }
  useEffect(() => {
    getMovieDetails(id, media_type);
    getSimilar(id, media_type);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {movieDetails.title ? movieDetails.title : movieDetails.name}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="row py-5 my-5">
            <div className="col-md-3">
              {movieDetails.poster_path ? (
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path
                  }
                  alt=""
                  className="w-100"
                />
              ) : (
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500" +
                    movieDetails.profile_path
                  }
                  alt=""
                  className="w-100"
                />
              )}
            </div>
            <div className="col-md-9">
              <h2>
                {movieDetails.title}
                {movieDetails.name}
              </h2>
              <p className="text-muted">
                {movieDetails.overview}
                {movieDetails.biography}
              </p>
              {movieDetails.genres?.map((gern) => (
                <span className="p-2 vote m-2 rounded-2">{gern.name} </span>
              ))}

              <ul className="list-unstyled my-3">
                {movieDetails.vote_average > 0 && (
                  <li className="p-2">
                    vote average : {movieDetails.vote_average?.toFixed(1)}
                  </li>
                )}
                {movieDetails.vote_count && (
                  <li className="p-2">
                    vote count : {movieDetails.vote_count?.toFixed(1)}
                  </li>
                )}
                {movieDetails.popularity && (
                  <li className="p-2">
                    popularity: {movieDetails.popularity?.toFixed(1)}
                  </li>
                )}
                {movieDetails.release_date && (
                  <li className="p-2">
                    release date : {movieDetails.release_date}
                  </li>
                )}
                {movieDetails.birthday && (
                  <li className="p-2">
                    {" "}
                    release date : {movieDetails.birthday}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="row ">
            <h1 className="fw-bolder  py-3">
              {similar.length > 0 ? "Similars" : ""}
            </h1>

            {similar.slice(0, 10).map((movie, index) => (
              <div key={index} className="col-md-2">
                <a href={`/moviedetails/${movie.id}/${media_type}`}>
                  <div className="movie position-relative overflow-hidden">
                    {movie.poster_path ? (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                        alt=""
                        className="w-100"
                      />
                    ) : (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.profile_path
                        }
                        alt=""
                        className="w-100"
                      />
                    )}

                    {movie.vote_average > 0 && (
                      <div className="vote p-2 position-absolute top-0 end-0">
                        {movie.vote_average?.toFixed(1)}
                      </div>
                    )}

                    <div className="text-center cover position-absolute w-100 h-100 bg-black d-flex justify-content-center flex-column">
                      <h5 className="fw-bolder">
                        {movie.title}
                        {movie.name}
                      </h5>
                      <p className="text-muted">
                        {movie.overview
                          ? movie.overview?.slice(0, 50)
                          : movie.known_for.overview?.slice(0, 50)}
                      </p>
                    </div>
                  </div>
                  <h2 className="h6 py-2">
                    {movie.title}
                    {movie.name}
                  </h2>
                </a>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
