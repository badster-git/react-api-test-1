import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.common.red,
  },
}));

const Header = (fetchUsers) => {
  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar disableGutters>
          <Container>
            <Typography className={classes.title} variant="h3">
              List of users
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
