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

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.title}>
          <HoverHighlight>About the Exchange</HoverHighlight>
        </div>
        <div className={classes.text}>
          The <HoverHighlight>Daydream Exchange</HoverHighlight> is a place for
          writing all the things that haven't been penned before. It is a
          collaborative space for users to doodle, ponder, explore, and perhaps
          even write in. You may want to write something new, or perhaps remix
          someone elses work. You might find you want to expand a story in new
          ways, or remove an unfortunate plot twist. At the{" "}
          <HoverHighlight>Daydream Exchange</HoverHighlight>, it's up to you.
        </div>
      </div>

      <Footer />
    </div>
  );
}
