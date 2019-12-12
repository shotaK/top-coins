import { fromJS } from "immutable";

import {
  GET_COINS_REQUEST,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE,
  SELECT_COINS_LIMIT
} from "./actionTypes";
import { COINS_NUMBERS_DEFAULT } from "./constants";

const initialState = fromJS({
  pending: false,
  coinsList: {},
  limit: COINS_NUMBERS_DEFAULT
});

export default function(
  state = initialState,
  { type, limit, coinsList, error }
) {
  switch (type) {
    case SELECT_COINS_LIMIT:
      return state.set("limit", fromJS(limit));
    case GET_COINS_REQUEST:
      return state.set("pending", true);
    case GET_COINS_SUCCESS:
      return state.set("coinsList", fromJS(coinsList)).set("pending", false);
    case GET_COINS_FAILURE:
      return state.set("error", fromJS(error)).set("pending", false);
    default: {
      return state;
    }
  }
}
