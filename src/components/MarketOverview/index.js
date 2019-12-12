import { connect } from "react-redux";
import toJS from "with-immutable-props-to-js";

import { getCoins } from "domains/topCoins/actions";

import MarketOverview from "./MarketOverview";
import { topCoinsSelector } from "domains/topCoins/selectors";

export default connect(topCoinsSelector, { getCoins })(toJS(MarketOverview));
