import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from "typewriter-effect";

import Toolbar from "./Toolbar";

const animationTime = "3s";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "15vh",
  },
  introText: {
    fontSize: "4vh",
    fontWeight: 600,
    width: "100%",
    letterSpacing: "12px",
  },
  welcome: {
    // textAlign: "left",
    animation: `$fadeInDown ${animationTime}`,
  },
  to: {
    textAlign: "center",
    animation: `$fadeInUp ${animationTime}`,
  },
  the: {
    textAlign: "right",
    animation: `$fadeInDown ${animationTime}`,
  },
  titleText: {
    fontSize: "clamp(5rem, 14vw, 14rem)",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: "-2px",
    fontFamily: "Cousine",
    lineHeight: "0.95em",
  },
  daydream: {
    willChange: "auto",
    display: "block",
    backgroundRepeat: "no-repeat",
    // gradient from https://products.ls.graphics/mesh-gradients/
    backgroundImage: "url(\"https://products.ls.graphics/mesh-gradients/images/05.-Flax.jpg\")",
    // backgroundImage: 'url("static/Ronchi.jpg")',
    backgroundSize: "200%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "$bg 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite",
  },
  tagline: {
    fontWeight: 600,
    marginTop: "10vh",
    fontSize: "4vh",
  },
  "@keyframes bg": {
    "0%": {
      backgroundPosition: "5% 5%",
    },
    "25%": {
      backgroundPosition: "5% 95%",
      backgroundSize: "250%",
    },
    "50%": {
      backgroundPosition: "95% 95%",
      backgroundSize: "150%",
    },
    "75%": {
      backgroundPosition: "5% 95%",
    },
    "100%": {
      backgroundPosition: "5% 5%",
    },
  },
  "@keyframes fadeInDown": {
    "0%": {
      opacity: "0",
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeInUp": {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.introText}>
          <Grid item xs={4} className={classes.welcome}>
            Welcome
          </Grid>
          <Grid item xs={4} className={classes.to}>
            to
          </Grid>
          <Grid item xs={4} className={classes.the}>
            the
          </Grid>
        </Grid>
        <div className={classes.titleText}>
          <div className={classes.daydream}>Daydream</div>
          <div>Exchange</div>
        </div>
        <div className={classes.tagline}>Write more, with others.</div>
      </div>
    </div>
  );
}
