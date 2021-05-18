import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Toolbar from "./Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
 	width: "60%",
 	textAlign: "center",
 	margin: '0 auto',
 	marginTop: '15vh'
  },
  introText: {
  	fontSize: '4vh',
  	fontWeight: 600,
  	width: "100%",
  },
  welcome: {
  	float: "left",
  },
  to: {
  	textAlign: "center",
  },
  the: {
  	textAlign: "right",
  },
  titleText: {
  	fontSize: "clamp(5rem, 14vw, 14rem)",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: '-2px',
    fontFamily: "Cousine",
    lineHeight: '0.95em',
  },
  daydream: {
    willChange: "auto",
    display: "block",
    backgroundRepeat: "no-repeat",
    // gradient from https://products.ls.graphics/mesh-gradients/
    backgroundImage: "url(\"https://products.ls.graphics/mesh-gradients/images/05.-Flax.jpg\")",
    backgroundSize: "200%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "$bg 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite",
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
	      <Grid container spacing={3} className={classes.introText}>
	      	<Grid item xs={4}>
	      		Welcome
	      	</Grid>
	      	<Grid item xs={4}>
	      		to
	      	</Grid>
	      	<Grid item xs={4}>
	      		the
	      	</Grid>
	      </Grid>
	      <div className={classes.titleText}>
	        <div className={classes.daydream}>Daydream</div>
	        <div>Exchange</div>
	      </div>
      </div>
    </div>
  );
}
