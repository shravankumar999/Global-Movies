import { ActionType } from "./actionType";
import axiosClient from "../api/axiosClient";
import apiConfig from "../api/apiConfig";

export const getPopularMovies = () => async (dispatch) => {
  const response = await axiosClient.get(
    `/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
  );
  dispatch({ type: ActionType.GET_MOVIES, payload: response.data.results });
};
export const getRatedMovies = () => async (dispatch) => {
  const response = await axiosClient.get(
    `/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1'`
  );
  dispatch({
    type: ActionType.GET_RATED_MOVIES,
    payload: response.data.results,
  });
};
export const getTredingTv = () => async (dispatch) => {
  const response = await axiosClient.get(
    `/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`
  );
  dispatch({ type: ActionType.GET_TREDING_TV, payload: response.data.results });
};

export const getMovies = (page, catalog) => async (dispatch) => {
  const response = await axiosClient.get(
    `/discover/${catalog}?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
  );
  dispatch({ type: ActionType.GET_MOVIES, payload: response.data.results });
};
export const SearchMovies = (search) => async (dispatch) => {
  const response = await axiosClient.get(
    `/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
  );
  dispatch({ type: ActionType.SEARCH_MOVIES, payload: response.data.results });
};
