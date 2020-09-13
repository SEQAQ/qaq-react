import React from 'react';
import './App.css';
import BasicRoute from './Router';
import { ThemeProvider } from '@material-ui/core/styles';
import { blueTheme } from './utils/theme';

const App = () => (
  <div className="App">
    <ThemeProvider theme={blueTheme}>
      <BasicRoute />
    </ThemeProvider>
  </div>
);

export default App;
