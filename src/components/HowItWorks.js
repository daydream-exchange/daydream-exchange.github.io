import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import HoverHighlight from "./HoverHighlight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "20vh",
  },
  title: {
    fontSize: "4vh",
    marginBottom: "2vh",
  },
  text: {
    fontSize: "3vh",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.title}>
          <HoverHighlight>How the Exchange works</HoverHighlight>
        </div>
        <div className={classes.text}>
          The <HoverHighlight>Daydream Exchange</HoverHighlight> is intended to
          be an open and inviting collaborative writing platform. As such, there
          are very few limitations on what you may do here. You can{" "}
          <HoverHighlight>start a new story</HoverHighlight>, or choose to{" "}
          <HoverHighlight>remix someone elses</HoverHighlight>. You can{" "}
          <HoverHighlight>add on to stories</HoverHighlight> by adding a "leaf"
          to the story. Users may continue with your thread of the writing, or
          choose to go back a couple steps and take the writing in a different
          direction. Your curated feed will show you top stories of the day, or
          since you last logged in. You may also choose to{" "}
          <HoverHighlight>follow writers</HoverHighlight> you find particularly
          inspiring, and view all the work they have written.
        </div>
      </div>

      <Footer />
    </div>
  );
}
