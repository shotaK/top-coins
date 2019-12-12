import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";

import { HOME, LIQUIDITY } from "constants/routing";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  active: {
    backgroundColor: theme.palette.primary.dark
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div>
          <Button
            component={NavLink}
            activeClassName={classes.active}
            to={HOME}
            color="inherit"
            isActive={match => match.isExact}
          >
            {t("nav.home")}
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.active}
            to={LIQUIDITY}
            color="inherit"
          >
            {t("nav.liquidity")}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
