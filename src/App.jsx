import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { Container, CssBaseline } from '@material-ui/core';
import store from './redux/store';

import Routes from './Routes';

const App = memo(() => (
  <>
    <CssBaseline />
    <Container>
      <h4>React Redux</h4>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Container>
  </>
));

export default App;
