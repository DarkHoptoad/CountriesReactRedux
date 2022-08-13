import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries__reducer";
import { controlReducer } from "./controls/controls__redusers";
import { detalReducer } from "./detal/detal__reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlReducer,
  details: detalReducer,
});
