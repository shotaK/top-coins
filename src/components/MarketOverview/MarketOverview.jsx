import React, { useEffect } from "react";
import get from "lodash.get";
import { func, object } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { StyledTableCell } from "./Styled";
import CoinRow from "./CoinRow";
import ApiResult from "components/Shared/ApiResult";

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(3)
  },
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const MarketOverview = ({ topCoins, getCoins }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const data = get(topCoins, "coinsList.data", []);

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  return (
    <Container className={classes.container}>
      <ApiResult {...topCoins}>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>{t("marketOverview.rank")}</StyledTableCell>
                <StyledTableCell align="right">
                  {t("marketOverview.name")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {t("marketOverview.price")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {t("marketOverview.priceChange24h")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {t("marketOverview.marketCap")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {t("marketOverview.volume24h")}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <CoinRow key={row.name} coin={row} />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </ApiResult>
    </Container>
  );
};

MarketOverview.propTypes = {
  getCoins: func.isRequired,
  topCoins: object.isRequired
};

export default MarketOverview;
