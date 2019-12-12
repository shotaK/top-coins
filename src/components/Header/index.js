import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navigation from "../Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("md")]: {
      padding: "0"
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Navigation />
    </Container>
  );
};

export default Header;
