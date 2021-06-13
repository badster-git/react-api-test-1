import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";

import Layout from "./components/layout/Layout";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <CssBaseline />
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>,
  document.getElementById("root")
);
