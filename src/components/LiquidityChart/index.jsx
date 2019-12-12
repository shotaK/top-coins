import { connect } from "react-redux";
import toJS from "with-immutable-props-to-js";

import { getCoins } from "domains/topCoins/actions";

import LiquidityChart from "./LiquidityChart";
import { coinsListChartSelector } from "domains/topCoins/selectors";

export default connect(coinsListChartSelector, { getCoins })(
  toJS(LiquidityChart)
);
