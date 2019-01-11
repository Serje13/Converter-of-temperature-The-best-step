import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};
const butSt = {
  color: "white"
};
const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <Button color="inherit" style={butSt}>
              Issue 1
            </Button>
          </NavLink>
          <NavLink to="/issue3">
            <Button color="inherit" style={butSt}>
              Issue 3
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
