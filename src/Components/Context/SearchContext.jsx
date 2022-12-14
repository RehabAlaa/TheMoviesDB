import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { MediaContext } from "./MediaContext";
export let SearchContext = createContext(0);
export default function SearchContextProvider(props) {
  const [search, setSearch] = useState([]);
  let { getTrending, setTrendingMovies, setTrendingTv, setTrendingPeople } =
    useContext(MediaContext);
  async function searchToApi(e) {
    if (e.target.value === " ") {
      getTrending("movie", setTrendingMovies);
      await getTrending("tv", setTrendingTv);
      await getTrending("person", setTrendingPeople);
    } else {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=44ee5523e457e74020effc2bddc4592e&query=${e.target.value}&page=1`
      );
      console.log(data.results);
      setSearch(data.results);
    }
  }

  return (
    <>
      <SearchContext.Provider value={{ search, searchToApi }}>
        {props.children}
      </SearchContext.Provider>
    </>
  );
}
