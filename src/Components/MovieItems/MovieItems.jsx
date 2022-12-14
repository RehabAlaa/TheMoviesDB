import React from "react";
import { Link } from "react-router-dom";

export default function MovieItems({ movie }) {
  return (
    <>
      <div className="col-md-2 ">
        <Link to={`/moviedetails/${movie.id}/${movie.media_type}`}>
          <div className="movie position-relative overflow-hidden">
            {movie.poster_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
                className="w-100"
              />
            ) : (
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.profile_path}
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
                {movie.overview ? movie.overview?.slice(0, 50) : ""}
              </p>
            </div>
          </div>
          <h2 className="h6 py-2">
            {movie.title}
            {movie.name}
          </h2>
        </Link>
      </div>
    </>
  );
}
