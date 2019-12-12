import React from "react";
import { shape, string, number } from "prop-types";
import get from "lodash.get";
import isNumber from "lodash.isnumber";

import { formatAsMoney } from "helpers/numberUtils";
import { StyledTableCell, StyledTableRow } from "./Styled";

const CoinRow = ({ coin }) => {
  const moneyUnits = get(coin, "quote.USD", {});
  const price = get(moneyUnits, "price");
  const percentChange24h = get(moneyUnits, "percent_change_24h");
  const marketCap = get(moneyUnits, "market_cap");
  const volume24h = get(moneyUnits, "volume_24h");

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="coin">
        {coin.cmc_rank}
      </StyledTableCell>
      <StyledTableCell align="right">{coin.name}</StyledTableCell>
      <StyledTableCell align="right">
        {isNumber(price) ? formatAsMoney(price) : "-"}
      </StyledTableCell>
      <StyledTableCell align="right">
        {isNumber(percentChange24h)
          ? `${Number(percentChange24h).toFixed(2)}%`
          : "-"}
      </StyledTableCell>
      <StyledTableCell align="right">
        {isNumber(marketCap) ? formatAsMoney(marketCap, 0) : "-"}
      </StyledTableCell>
      <StyledTableCell align="right">
        {isNumber(volume24h) ? formatAsMoney(volume24h, 0) : "-"}
      </StyledTableCell>
    </StyledTableRow>
  );
};

CoinRow.propTypes = {
  coin: shape({
    name: string,
    cmc_rank: number,
    quote: shape({
      USD: shape({
        price: number,
        percent_change_24h: number,
        market_cap: number,
        volume_24h: number
      })
    })
  }).isRequired
};

export default CoinRow;
