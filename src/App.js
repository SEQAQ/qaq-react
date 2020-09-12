import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Activity from './views/Activity/Activity';
import { blueTheme } from './utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={blueTheme}>
        {/* For Demo Purpose */}
        <Activity />
      </ThemeProvider>
    </div>
  );
}

export default App;
