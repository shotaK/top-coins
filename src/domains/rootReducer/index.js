import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";

import topCoins from "domains/topCoins/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    topCoins
  });
