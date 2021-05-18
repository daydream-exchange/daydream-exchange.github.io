import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import HoverHighlight from "./HoverHighlight";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExploreList from "./ExploreList";
import Chip from "@material-ui/core/Chip";
import { pageWidth } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    marginTop: "8vh",
  },
  explore: {
    fontSize: "6vh",
  },
  listRoot: {
    width: "100%",
  },
  nested: {
    paddingLeft: "32px",
  },
}));

export default function Explore() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.menu}>
          <Grid item xs={3}>
            <div className={classes.explore}>
              <HoverHighlight>Explore Newest</HoverHighlight>
            </div>

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.listRoot}
            >
              <ListItem button>
                <ListItemText primary="All Writing" />
                <Chip label="10.1k" variant="outlined" size="small" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Discussions" />
                <Chip label="1.3k" variant="outlined" size="small" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Shorts" />
                <Chip label="4.4k" variant="outlined" size="small" />
              </ListItem>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Stories" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Fiction" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Non-Fiction" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Established Universe" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemText primary="Writers" />
                <Chip label="1.1k" variant="outlined" size="small" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Topics" />
                <Chip label="765" variant="outlined" size="small" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Characters" />
                <Chip label="233" variant="outlined" size="small" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={9}>
            <ExploreList />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
