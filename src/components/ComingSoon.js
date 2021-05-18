import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typewriter from "typewriter-effect";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "14vh",
  },
  typewriter: {
    fontSize: "4vh",
    marginBottom: "2vh",
  },
}));

export default function ComingSoon() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.typewriter}>
          <Typewriter
            options={{ delay: 90 }}
            onInit={(typewriter) => {
              typewriter
                .typeString("The daydream exchange is coming soon...")
                .start();
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
