import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchPopular } from "./MoviesSlice";
function Movies() {
  const state = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8bfe642b7313820765ab9ace9499e9fb&language=en-US`
      )
      .then((res) => dispatch(fetchPopular(res.data)));
  }, []);
  console.log(state);
  return <div>
      <ul>
          {Object.keys(state).length === 0 ? "" : state.results.map((movie)=><li key={movie.id}>{movie.original_title}</li>)}
      </ul>
  </div>;
}

export default Movies;
