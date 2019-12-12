import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router/immutable";
import { Map } from "immutable";

import rootReducer from "domains/rootReducer";

import history from "./history";

const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer(history), Map(), composedEnhancers);

export default store;
