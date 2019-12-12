import get from "lodash.get";

import {
  GET_COINS_REQUEST,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE,
  SELECT_COINS_LIMIT
} from "./actionTypes";
import api from "helpers/api";
import { METHODS, GENERIC_API_ERROR_MSG } from "constants/api";
import { limitSelector, coinsListSelector } from "./selectors";
import { ENDPOINTS } from "./constants";

export const changeCoinsLimit = limit => ({
  type: SELECT_COINS_LIMIT,
  limit
});

export const getCoinsRequest = () => ({
  type: GET_COINS_REQUEST
});

export const getCoinsSuccess = coinsList => ({
  type: GET_COINS_SUCCESS,
  coinsList
});

export const getCoinsFailure = error => ({
  type: GET_COINS_FAILURE,
  error
});

export const fetchCoins = limit => async (dispatch, getState) => {
  dispatch(getCoinsRequest());

  try {
    const res = await api(METHODS.GET, ENDPOINTS.listingsLatest(limit), "");
    const data = get(res, "data");
    const error = get(res, "data.status.error_message");

    if (get(res, "data")) {
      dispatch(getCoinsSuccess(data));
    } else if (error) {
      dispatch(getCoinsFailure({ error }));
    } else {
      dispatch(getCoinsFailure({ error: GENERIC_API_ERROR_MSG }));
    }
  } catch (error) {
    dispatch(getCoinsFailure({ error: GENERIC_API_ERROR_MSG }));
  }
};

export const getCoins = () => async (dispatch, getState) => {
  const { limit } = limitSelector(getState());

  const { coinsList } = coinsListSelector(getState());

  if (coinsList.size === 0) {
    dispatch(fetchCoins(limit));
  }
};

export const selectCoinsLimit = limit => dispatch => {
  dispatch(changeCoinsLimit(limit));
  dispatch(fetchCoins(limit));
};
