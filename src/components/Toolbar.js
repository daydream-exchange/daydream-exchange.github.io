import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import HoverHighlight from "./HoverHighlight";
import { headerFooterFontSize } from "./PageStyles";
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    marginTop: "1vh",
  },
  menu: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: headerFooterFontSize,
    fontFamily: "Cousine",
  },
}));

function ToolBar(props) {
  const classes = useStyles({ smallScreen });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Toolbar className={classes.root}>
      <Grid container spacing={3} className={classes.menu}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HoverHighlight>Home</HoverHighlight>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <HoverHighlight>About</HoverHighlight>
          </Link>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Link to="/how-it-works" style={{ textDecoration: "none" }}>
            <HoverHighlight>How it works</HoverHighlight>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <HoverHighlight>Login</HoverHighlight>
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Toolbar>
  );
}

export default ToolBar;
