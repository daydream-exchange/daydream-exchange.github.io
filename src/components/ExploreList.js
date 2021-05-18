import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

// This file is mostly a placeholder. These entries can be auto-generated.
export default function ExploreList() {
  const classes = useStyles();

  const loremIpsum =
    "— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis mi sit amet ante pulvinar efficitur. Vestibulum ac dapibus arcu. Maecenas quam nulla, molestie id dolor eu, elementum semper nunc. Integer gravida maximus nisi vitae tincidunt. Quisque id massa velit. Donec vehicula metus urna, in pretium mauris ullamcorper id. ";

  return (
    <div className={classes.root}>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Gavin G." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="Thoughts, young and old."
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Gavin G.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Jeremy K." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="The Trouble with Ibsen"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Jeremy K.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Randall M." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="What If?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Randall M.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Brandon S." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="An extraordinarily long tale..."
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Brandon S.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Patrick R." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="A trilogy of two parts"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Patrick R.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Gavin G." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="Thoughts, young and old."
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Gavin G.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Jeremy K." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="The Trouble with Ibsen"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Jeremy K.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Randall M." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="What If?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Randall M.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Brandon S." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="An extraordinarily long tale..."
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Brandon S.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Patrick R." src="/404" />
          </ListItemAvatar>
          <ListItemText
            primary="A trilogy of two parts"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  by Patrick R.
                </Typography>
                {loremIpsum}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}
