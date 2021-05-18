import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
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
    fontSize: '3vh',
    fontFamily: "Cousine",
    willChange: "auto",
    // display: "block",
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

function ToolBar(props) {
  const classes = useStyles({ smallScreen });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Toolbar className={classes.root}>
    <Grid container spacing={3} className={classes.menu}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2}>
          {/*<Link to="/" style={{ textDecoration: 'none' }}>*/}
            About
          {/*</Link>*/}
        </Grid>
        <Grid item xs={2}>
          {/*<Link to="/" style={{ textDecoration: 'none' }}>*/}
            Contact
          {/*</Link>*/}
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
          {/*<Link to="/" style={{ textDecoration: 'none' }}>*/}
            Contribute
          {/*</Link>*/}
        </Grid>
        <Grid item xs={2}>
          {/*<Link to="/" style={{ textDecoration: 'none' }}>*/}
            Login
          {/*</Link>*/}
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default ToolBar;
