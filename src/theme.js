import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const mainBlack = "#000";
const mainWhite = "#fff";
const mainBlue = "#0c1446";
const mainRed = "#ff4500";
const mainGrey = "#5f5f5f";
const blue = "#757ce8";
const orange = "#ffa00a";
const darkblue = "#282B31";
const lightGrey = "#d3d3d3";
// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ms: 760,
      sd: 860,
      md: 960,
      ml: 1100,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      grey: mainGrey,
      blue: blue,
      red: mainRed,
      orange: orange,
      darkblue: darkblue,
      lightGrey: lightGrey,
    },
    primary: {
      main: mainBlue,
    },
    secondary: {
      main: mainRed,
    },
    ternary: {
      main: mainRed,
    },
    info: {
      main: blue,
    },
    error: {
      main: orange,
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.75rem",
      },
    },
    h2: {
      color: mainBlack,
      fontSize: "2.5rem",
      fontWeight: 500,
      [breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
      [breakpoints.up("md")]: {
        fontSize: "4rem",
      },
    },
    h3: {
      color: mainBlack,
      fontSize: "2rem",
      fontWeight: 600,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    },
    a: {
      color: `${mainBlack} !important`,
    },
    subtitle1: {
      color: mainGrey,
    },
    body1: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: mainWhite,
      [breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    body2: {
      fontSize: "18px",
      [breakpoints.down("sm")]: {
        fontSize: "16px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    button: {
      background: mainRed,
      textTransform: "none",
      "&.MuiButton-text": {
        padding: " 6px 16px !important",
      },

      "&.MuiButton-root:hover": {
        backgroundColor: `${lightGrey} !important`,
        "& .MuiButton-label": {
          color: `${mainBlack} !important`,
        },
      },

      "& .MuiButton-label": {
        color: `${mainWhite} !important`,
      },
    },
  },
});

export default theme;
