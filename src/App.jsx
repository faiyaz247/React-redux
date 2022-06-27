import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import Routes from "./Routes";

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Container>
      <Routes />
    </Container>
  </React.Fragment>
);

export default App;
