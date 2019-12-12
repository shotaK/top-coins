import { createStructuredSelector, createSelector } from "reselect";
import Big from "big.js";
import isNumber from "lodash.isnumber";

const limit = state => state.getIn(["topCoins", "limit"]);
const topCoins = state => state.getIn(["topCoins"]);
const coinsList = state => state.getIn(["topCoins", "coinsList"]);

export const limitSelector = createStructuredSelector({
  limit
});

export const topCoinsSelector = createStructuredSelector({
  topCoins
});

export const coinsListSelector = createStructuredSelector({
  coinsList
});

export const coinsListChartSelect = createSelector(topCoins, coins => {
  if (coins.get("coinsList").size === 0) {
    return coins;
  }
  const data = coins.getIn(["coinsList", "data"]);
  const updatedCoins = data.map(coin => {
    const usd = coin.getIn(["quote", "USD"]);
    const priceRaw = usd.get("price");
    const percentChange24hRaw = usd.get("percent_change_24h");
    if (!isNumber(priceRaw) || !isNumber(percentChange24hRaw)) {
      return coin;
    }
    const price = new Big(priceRaw);
    const percentChange24h = new Big(percentChange24hRaw);
    const priceChange = Number(
      price
        .times(percentChange24h)
        .div(100)
        .toFixed(2)
    );
    return coin.setIn(["quote", "USD", "money_change_24h"], priceChange);
  });
  return coins.setIn(["coinsList", "data"], updatedCoins);
});

export const coinsListChartSelector = createStructuredSelector({
  topCoins: coinsListChartSelect
});
