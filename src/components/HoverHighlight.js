import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { hoverColor1, hoverColor2, hoverColorAngle } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  text: {
    textDecoration: "none",
    lineHeight: 1,
    position: "relative",
    zIndex: 0,
    display: "inline-block",
    padding: "5px 5px",
    overflow: "hidden",
    color: "#333",
    verticalAlign: "bottom",
    transition: "color .3s ease-out",
    "&::before": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      transform: "translateY(calc(100% - 2px))",
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(${hoverColorAngle}, ${hoverColor1} 0%, ${hoverColor2} 100%)`,
      transition: "transform .25s ease-out",
    },
    "&:hover": {
      color: "white",
      "&::before": {
        transform: "translateY(0)",
        transition: "transform .25s ease-out",
      },
    },
  },
}));

export default function HoverHighlight(props) {
  const classes = useStyles();

  return <div className={classes.text}>{props.children}</div>;
}
