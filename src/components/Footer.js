import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import HoverHighlight from "./HoverHighlight";
import { headerFooterFontSize, pageWidth } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    fontSize: headerFooterFontSize,
    marginTop: "12vh",
    left: `${(100 - pageWidth) / 2}%`,
    bottom: "1vh",
  },
  name: {
    fontWeight: 600,
    fontSize: "3vh",
  },
  listItem: {
    marginLeft: "50%", // This is a terrible hack. Find better way...
    marginBottom: "1vh",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.menu}>
        <Grid item xs={4} className={classes.name}>
          The Daydream Exchange
        </Grid>
        <Grid item xs={4}>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>Home</HoverHighlight>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>About</HoverHighlight>
          </Link>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>Explore</HoverHighlight>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>Login</HoverHighlight>
          </Link>
          <Link
            to="/profile"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>Profile</HoverHighlight>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            to="/coming-soon"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>FAQ</HoverHighlight>
          </Link>
          <Link
            to="/legal"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <HoverHighlight>Legal</HoverHighlight>
          </Link>
          <a
            className={classes.listItem}
            href="https://github.com/daydream-exchange"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverHighlight>Contribute</HoverHighlight>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
