import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import BasicRoute from './Router';
import { blueTheme } from './utils/theme';

const App = () => (
  <div className="App">
    <ThemeProvider theme={blueTheme}>
      <BasicRoute />
    </ThemeProvider>
  </div>
);

export default App;
