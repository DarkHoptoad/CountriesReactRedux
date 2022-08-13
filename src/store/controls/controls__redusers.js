import { SET__REGION, SET__SEARCH, SET__CLEAR } from "./controls__actions";

const initialState = {
  search: "",
  region: "",
};

export const controlReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET__CLEAR: {
      return {
        initialState,
      };
    }
    case SET__SEARCH: {
      return {
        ...state,
        search: payload,
      };
    }
    case SET__REGION: {
      return {
        ...state,
        region: payload,
      };
    }

    default: {
      return state;
    }
  }
};
