import React from "react";
import { Helmet } from "react-helmet";
import photo from "../../assets/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row py-5 my-5 justify-content-center">
        <div className="photo position-relative text-center">
          <h1 className=" text-center fw-bolder larg position-absolute top-0 start-25 end-25">
            Hi there ,
          </h1>
          <br />
          <br />
          <br />
          <br />
          <img src={photo} className="w-100  text-center" alt="" />
        </div>
      </div>

      <div className="row text-center py-5">
        <div className="about">
          <h2 className="fw-bolder">Let's talk about Noxe</h2>
          <p className="text-muted">
            The Movie Database (Noxe) is a community built movie and TV
            database. Every piece of data has been added by our amazing
            community dating back to 2008. TMDB's strong international focus and
            breadth of data is largely unmatched and something we're incredibly
            proud of. Put simply, we live and breathe community and that's
            precisely what makes us different.
          </p>
        </div>

        <div className="row text-center justify-content-center align-items-center">
          <h3 className="fw-bolder">The TMDB advantage</h3>
          <div className="col-md-1 text-danger">
            <h2 className="fw-bolder">1</h2>
          </div>
          <div className="col-md-10 text-start py-3">
            Every year since 2008, the number of contributions to our database
            has increased. With over 750,000 developers and companies using our
            platform, TMDB has become a premiere source for metadata.
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-1  text-danger">
            <h2 className="fw-bolder">2</h2>
          </div>
          <div className="col-md-10 text-start py-3">
            Along with extensive metadata for movies, TV shows and people, we
            also offer one of the best selections of high resolution posters and
            fanart. On average, over 1,000 images are added every single day.
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-1  text-danger">
            <h2 className="fw-bolder">3</h2>
          </div>
          <div className="col-md-10 text-start py-3">
            We're international. While we officially support 39 languages we
            also have extensive regional data. Every single day TMDB is used in
            over 180 countries.
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center ">
          <div className="col-md-1  text-danger">
            <h2 className="fw-bolder">4</h2>
          </div>
          <div className="col-md-10 text-start py-3">
            Our community is second to none. Between our staff and community
            moderators, we're always here to help. We're passionate about making
            sure your experience on TMDB is nothing short of amazing.
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-1  text-danger">
            <h2 className="fw-bolder">5</h2>
          </div>
          <div className="col-md-10 text-start py-3">
            Trusted platform. Every single day our service is used by millions
            of people while we process over 3 billion requests. We've proven for
            years that this is a service that can be trusted and relied on.
          </div>
        </div>
      </div>
    </>
  );
}
