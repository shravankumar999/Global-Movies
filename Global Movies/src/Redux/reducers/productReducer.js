import { ActionType } from "../actionType";

const initialaiz = {
  products: [],
};

export const moviesReducer = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ActionType.SEARCH_MOVIES: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const RatedMoviesReducer = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.GET_RATED_MOVIES: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const TredingTvReducer = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.GET_TREDING_TV: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
