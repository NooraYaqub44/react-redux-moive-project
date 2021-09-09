const initialState = {};

export function fetchPopular(popular) {
  return {
    type: "movies/popular",
    payload: popular,
  };
}

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "movies/popular":
      return action.payload;
    default:
      return state;
  }
}
