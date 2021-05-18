import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HoverHighlight from "./HoverHighlight";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "left",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: "1vh",
  },
  pos: {
    marginBottom: "1vh",
  },
});

export default function StoryCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          <HoverHighlight>Story Title</HoverHighlight>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by Username McUserface
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          iaculis mi sit amet ante pulvinar efficitur. Vestibulum ac dapibus
          arcu. Maecenas quam nulla, molestie id dolor eu, elementum semper
          nunc. Integer gravida maximus nisi vitae tincidunt. Quisque id massa
          velit. Donec vehicula metus urna, in pretium mauris ullamcorper id.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Continue Reading</Button>
        <Button size="small">Remix Story</Button>
      </CardActions>
    </Card>
  );
}
