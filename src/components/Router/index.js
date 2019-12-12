import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { HOME, LIQUIDITY } from "constants/routing";

import Home from "pages/Home";
import Liquidity from "pages/Liquidity";
import NotFound from "pages/NotFound";
import Header from "components/Header";
import CoinLimitSelect from "components/CoinLimitSelect";

const Router = () => (
  <Fragment>
    <Header />
    <CoinLimitSelect />
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route path={LIQUIDITY} component={Liquidity} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
