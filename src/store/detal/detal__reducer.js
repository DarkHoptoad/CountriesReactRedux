import {
  SET__COUNTRY,
  SET__ERROR,
  SET__LOADING,
  SET__CLEAR,
  SET__NEIGHBORS,
} from "./detal__action";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
};

export const detalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET__LOADING:
      return {
        ...state,
        error: null,
        status: "loading",
      };
    case SET__ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET__COUNTRY:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    case SET__CLEAR:
      return initialState;
    case SET__NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };
    default:
      return state;
  }
};
