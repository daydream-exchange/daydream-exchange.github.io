import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
import { hoverColor2, pageWidth } from "./PageStyles";
import HoverHighlight from "./HoverHighlight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${pageWidth}%`,
    textAlign: "center",
    margin: "0 auto",
    marginTop: "15vh",
  },
  menu: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: "4vh",
    fontFamily: "Cousine",
  },
  title: {
    fontSize: "4vh",
    marginBottom: "2vh",
  },
  text: {
    fontSize: "3vh",
  },
  form: {
    // width: "100%",
  },
  textField: {
    width: "60%",
    marginBottom: "1vh",
  },
  button: {
    marginTop: "3vh",
  },
}));

const LoginTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: hoverColor2,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: hoverColor2,
    },
  },
})(TextField);

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.menu}>
          <Grid item xs={6}>
            <HoverHighlight>Login</HoverHighlight>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              className={classes.form}
            >
              <LoginTextField
                id="standard-basic"
                label="Username"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Password"
                className={classes.textField}
              />
              <br />
              <Button variant="outlined" className={classes.button}>
                Login
              </Button>
            </form>
          </Grid>
          <Grid item xs={6}>
            <HoverHighlight>Create Account</HoverHighlight>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              className={classes.form}
            >
              <LoginTextField
                id="standard-basic"
                label="First Name"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Last Name"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Username"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Email Address"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Password"
                className={classes.textField}
              />
              <LoginTextField
                id="standard-basic"
                label="Re-type Password"
                className={classes.textField}
              />
              <br />
              <Button variant="outlined" className={classes.button}>
                Create Account
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
