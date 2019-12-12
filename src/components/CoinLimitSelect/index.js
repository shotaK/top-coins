import { connect } from "react-redux";
import toJS from "with-immutable-props-to-js";

import { selectCoinsLimit } from "domains/topCoins/actions";

import CoinLimitSelect from "./CoinLimitSelect";
import { limitSelector } from "domains/topCoins/selectors";

export default connect(limitSelector, { selectCoinsLimit })(
  toJS(CoinLimitSelect)
);
