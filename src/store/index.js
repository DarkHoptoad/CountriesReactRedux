import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root-reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);

export { store };
