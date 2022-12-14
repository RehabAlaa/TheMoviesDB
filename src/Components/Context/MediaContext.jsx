import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export let MediaContext = createContext("");
export default function MediaContextProvider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=44ee5523e457e74020effc2bddc4592e`
    );
    callback(data.results);
    setLoading(false);
    console.log(data.results);
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);
  return (
    <>
      <MediaContext.Provider
        value={{
          trendingMovies,
          trendingTv,
          trendingPeople,
          loading,
          setLoading,
          getTrending,
          setTrendingMovies,
          setTrendingTv,
          setTrendingPeople,
        }}
      >
        {props.children}
      </MediaContext.Provider>
    </>
  );
}
