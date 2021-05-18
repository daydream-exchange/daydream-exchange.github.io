import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    marginTop: "1vh",
  },
  menu: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: "2vh",
    fontFamily: "Cousine",
  },
  menuItem: {
    textDecoration: "none",
    lineHeight: 1,
    position: "relative",
    zIndex: 0,
    display: "inline-block",
    padding: "5px 5px",
    overflow: "hidden",
    color: "#333",
    verticalAlign: "bottom",
    transition: "color .3s ease-out",
    "&::before": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      transform: "translateY(calc(100% - 2px))",
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(60deg, #f6cb62 0%, #ec4d11 100%)",
      transition: "transform .25s ease-out",
    },
    "&:hover": {
      color: "white",
      "&::before": {
        transform: "translateY(0)",
        transition: "transform .25s ease-out",
      },
    },
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
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.menuItem}
          >
            About
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/coming-soon"
            style={{ textDecoration: "none" }}
            className={classes.menuItem}
          >
            How it works
          </Link>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Link
            to="/coming-soon"
            style={{ textDecoration: "none" }}
            className={classes.menuItem}
          >
            Get Started
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/coming-soon"
            style={{ textDecoration: "none" }}
            className={classes.menuItem}
          >
            Login
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Toolbar>
  );
}

export default ToolBar;
