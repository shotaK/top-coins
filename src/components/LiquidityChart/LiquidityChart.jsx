import React, { useEffect } from "react";
import { func, object } from "prop-types";
import * as Recharts from "recharts";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

import CustomTooltip from "./CustomTooltip";
import ApiResult from "components/Shared/ApiResult";

const LiquidityChart = ({ topCoins, getCoins }) => {
  const { t } = useTranslation();
  const { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } = Recharts;

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  const { coinsList } = topCoins;

  return (
    <Container>
      <ApiResult {...topCoins}>
        <ScatterChart
          width={1100}
          height={500}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <XAxis
            type="number"
            dataKey={"quote.USD.market_cap"}
            name={t("liquidityChart.xAxisName")}
            unit="$"
            tick={false}
            label={t("liquidityChart.xAxisName")}
          />
          <YAxis
            type="number"
            dataKey={"quote.USD.volume_24h"}
            name={t("liquidityChart.xAxisName")}
            unit="$"
            label={t("liquidityChart.yAxisName")}
            tick={false}
          />
          <ZAxis
            type="number"
            dataKey={"quote.USD.money_change_24h"}
            name={t("liquidityChart.zAxis")}
            unit="$"
            range={[60, 400]}
            scale="sequential"
            label={t("liquidityChart.zAxis")}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<CustomTooltip />}
          />
          <Scatter data={coinsList.data} fill="#8884d8" shape="circle" />
        </ScatterChart>
      </ApiResult>
    </Container>
  );
};

LiquidityChart.propTypes = {
  getCoins: func.isRequired,
  topCoins: object.isRequired
};

export default LiquidityChart;
