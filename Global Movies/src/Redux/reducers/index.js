import { combineReducers } from "redux";
import {
  moviesReducer,
  RatedMoviesReducer,
  TredingTvReducer,
} from "./productReducer";

const rootReducer = combineReducers({
  Popilarmovies: moviesReducer,
  RatedMovies: RatedMoviesReducer,
  TradingTv: TredingTvReducer,
});

export default rootReducer;