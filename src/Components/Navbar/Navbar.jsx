import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Search from "../Search/Search";

export default function Navbar({ logout }) {
  let { userData } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top top-0 start-0 end-0 shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Noxe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tv">
                    TV Show
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/people">
                    People
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            <div className="social ms-auto">
              <i className="fa-brands me-3 fa-facebook-f"></i>
              <i className="fa-brands me-3 fa-twitter"></i>
              <i className="fa-brands me-3 fa-spotify"></i>
              <i className="fa-brands me-3 fa-instagram"></i>
            </div>
            {userData ? <Search /> : ""}
            {userData ? (
              <span
                className="px-2 nav-link cursor d-flex me-2"
                onClick={logout}
              >
                Logout
              </span>
            ) : (
              <>
                <Link className="px-2 nav-link d-flex me-2" to="/login">
                  Login
                </Link>
                <Link className="px-2 nav-link d-flex me-2" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
