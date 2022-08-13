import { SET__THEME } from "./theme-actions";

export const themeReducer = (state = "light", { type, payload }) => {
  switch (type) {
    case SET__THEME:
      return payload;

    default:
      return state;
  }
};
