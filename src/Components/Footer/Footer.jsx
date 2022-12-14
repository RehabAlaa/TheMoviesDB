import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Footer() {
  const { userData } = useContext(AuthContext);

  return (
    <>
      {userData ? (
        <footer className="dark pt-3 lg-shadow">
          <div className="container text-start">
            <div className="row text-md-start mt-3 pb-5 text-sm-center">
              <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
                <h4 className="fw-bolder">Noxe</h4>
                {/* <p>
                {userData.first_name} {userData.last_name}
              </p> */}
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="fw-bolder">THE BASICS</h5>
                <p>
                  <a href="/about">About</a>
                </p>
                <p>
                  <a href="/">API</a>
                </p>
                <p>
                  <a href="/">Contact Us</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="fw-bolder">COMMUNITY</h5>

                <p>
                  <a href="/">Help/FAQ</a>
                </p>
                <p>
                  <a href="/">Support & Bugs</a>
                </p>
                <p>
                  <a href="/">Feature Request</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="fw-bolder">LEGAL</h5>

                <p>
                  <a href="/">Privacy Policy</a>
                </p>
                <p>
                  <a href="/">Cookies Policy</a>
                </p>
                <p>
                  <a href="/">Terms of Use</a>
                </p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-7 col-lg-8 text-center">
                <p className="text-md-left small">
                  © 2022 Digiwalls Media, all rights reserved. All trademarks
                  are property of their respective owners.
                </p>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-end text-md-right">
                  <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item pe-4">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item pe-4">
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.freetogame.com/">
                        <i className="fas fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}
