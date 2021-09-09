import moviesReducer from "../components/movies/MoviesSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  movies: moviesReducer,
});
export default reducer;
