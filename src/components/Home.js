import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typewriter from "typewriter-effect";
import Toolbar from "./Toolbar";
import { pageWidth } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    marginTop: "14vh",
  },
  typewriter: {
    fontSize: "4vh",
    marginBottom: "2vh",
  },
  titleText: {
    fontSize: "min(12vw, 12vw)",
    textAlign: "center",
    fontWeight: 600,
    // letterSpacing: "-2px",
    fontFamily: "Cousine",
    lineHeight: "0.95em",
  },
  daydream: {
    willChange: "auto",
    backgroundRepeat: "no-repeat",
    // gradient from https://products.ls.graphics/mesh-gradients/
    // backgroundImage:
    //   'url("https://products.ls.graphics/mesh-gradients/images/05.-Flax.jpg")',
    backgroundImage: 'url("static/Flax.jpg")',
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
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.typewriter}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Welcome to the").start();
            }}
          />
        </div>
        <div className={classes.titleText}>
          <div className={classes.daydream}>Daydream</div>
          <div>Exchange</div>
        </div>
        <div className={classes.tagline}>Write more, with others.</div>
      </div>
    </div>
  );
}
