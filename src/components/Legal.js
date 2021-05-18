import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import HoverHighlight from "./HoverHighlight";
import { pageWidth } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    marginTop: "8vh",
  },
  title: {
    fontSize: "4vh",
    marginBottom: "2vh",
  },
  text: {
    fontSize: "3vh",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.title}>
          <HoverHighlight>Daydream Exchange Writing License</HoverHighlight>
        </div>
        <div className={classes.text}>
          As noted in the <HoverHighlight>Daydream Exchange</HoverHighlight>{" "}
          Terms of Service, all publicly accessible user contributions are
          licensed under Creative Commons Attribution-ShareAlike license.
          Specifically, the terms of the{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC-BY-SA 4.0
          </a>
          .
        </div>
      </div>

      <Footer />
    </div>
  );
}
