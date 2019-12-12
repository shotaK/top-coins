import React from "react";
import { func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";

import {
  COINS_NUMBERS,
  COINS_NUMBERS_DEFAULT,
  COINS_NUMBER_ALL
} from "domains/topCoins/constants";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  formControl: {
    minWidth: 200
  }
}));

const CoinLimitSelect = ({ selectCoinsLimit, limit }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChange = event => selectCoinsLimit(event.target.value);

  return (
    <Container className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {t("coinAmount.selectLabel")}
        </InputLabel>
        <Select
          id="demo-simple-select-placeholder-label"
          value={limit}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={COINS_NUMBERS_DEFAULT}>
            <em>{t("coinAmount.default")}</em>
          </MenuItem>
          {COINS_NUMBERS.map(coin => (
            <MenuItem key={coin} value={coin}>
              {coin}
            </MenuItem>
          ))}
          <MenuItem value={COINS_NUMBER_ALL}>
            {t("coinAmount.allCoinsLabel")}
          </MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

CoinLimitSelect.propTypes = {
  selectCoinsLimit: func.isRequired
};

export default CoinLimitSelect;
