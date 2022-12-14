import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { SearchContext } from "../Context/SearchContext";
import MovieItems from "../MovieItems/MovieItems";
export default function Tv() {
  const [Tv, setTv] = useState([]);
  const [loading, setLoading] = useState(true);
  let pageList = new Array(10).fill("rehab").map((page, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);
  let { search, searchToApi } = useContext(SearchContext);
  async function getPopularTv(currentPage) {
    let { data } = await axios.get(
      `
      https://api.themoviedb.org/3/tv/popular?api_key=44ee5523e457e74020effc2bddc4592e&language=en-US&page=${currentPage}`
    );
    setTv(data.results);
    setLoading(false);
    console.log(data.results);
  }

  useEffect(() => {
    getPopularTv(currentPage);
  }, [currentPage]);
  useEffect(() => {
    searchToApi();
    setLoading(false);
  }, [search]);
  function onPaginate(page) {
    setCurrentPage(page);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tv Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {loading && <Loader />}
      {!loading && (
        <>
          {search.length > 0 ? (
            <div className="row py-5 my-5 align-items-center">
              {search.map((movie, index) => (
                <MovieItems key={index} movie={movie} />
              ))}
            </div>
          ) : (
            <>
              <div className="row py-5 my-5">
                <h1 className="fw-bolder text-center  py-3">Popular Tv</h1>

                {Tv.filter(
                  (ele) => ele.profile_path || ele.poster_path !== null
                ).map((movie, index) => (
                  <div key={index} className="col-md-2">
                    <Link to={`/moviedetails/${movie.id}/tv`}>
                      <div className="movie position-relative overflow-hidden">
                        {movie.poster_path ? (
                          <img
                            src={
                              "https://image.tmdb.org/t/p/w500" +
                              movie.poster_path
                            }
                            alt=""
                            className="w-100"
                          />
                        ) : (
                          <img
                            src={
                              "https://image.tmdb.org/t/p/w500" +
                              movie.profile_path
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
                ))}
              </div>
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center py-5"
              >
                <ul className="pagination">
                  {currentPage > 1 ? (
                    <li className="page-item cursor" onClick={prevPage}>
                      <Link class="page-link">Prev</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {pageList.map((page, index) => (
                    <li
                      className="page-item"
                      onClick={() => onPaginate(page)}
                      key={index}
                    >
                      <Link className="page-link">{page}</Link>
                    </li>
                  ))}
                  {currentPage < 10 ? (
                    <li className="page-item cursor" onClick={nextPage}>
                      <Link class="page-link">Next</Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </nav>
            </>
          )}
        </>
      )}
    </>
  );
}
