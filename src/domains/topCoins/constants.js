export const COINS_NUMBERS_DEFAULT = -1; // -1 means API default number of coins will be fetched
export const COINS_NUMBERS = [10, 50];
export const COINS_NUMBER_ALL = 5000;

export const ENDPOINTS = {
  listingsLatest: limit =>
    `/cryptocurrency/listings/latest?convert=USD${
      limit !== COINS_NUMBERS_DEFAULT ? `&limit=${limit}` : ``
    }`
};
