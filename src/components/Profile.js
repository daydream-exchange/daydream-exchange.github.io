import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import HoverHighlight from "./HoverHighlight";
import StoryCard from "./StoryCard";
import { pageWidth } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    marginTop: "8vh",
  },
  username: {
    fontSize: "4vh",
    marginTop: "1vh",
  },
  realname: {
    fontSize: "2vh",
    marginTop: "2vh",
  },
  avatar: {
    width: "128px",
    height: "128px",
    fontSize: "4vh",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "2vh",
  },
  stories: {
    width: "90%",
    textAlign: "center",
    margin: "0 auto",
  },
}));

export default function Profile() {
  const classes = useStyles();

  const stories = () => {
    let content = [];
    for (var i = 0; i < 10; i++) {
      content.push(
        <Grid item xs={6}>
          <StoryCard />
        </Grid>
      );
    }
    return content;
  };

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.menu}>
          <Grid item xs={3}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}>UM</Avatar>
            </div>
            <div className={classes.username}>
              <HoverHighlight>Username McUserface</HoverHighlight>
            </div>
            <div className={classes.realname}>Realname Lastname</div>
            <Button variant="outlined" className={classes.button}>
              Edit Profile
            </Button>
          </Grid>

          <Grid item xs={9}>
            <Grid container spacing={2} className={classes.stories}>
              {stories()}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
