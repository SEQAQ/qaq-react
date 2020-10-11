import React from 'react';
import AppBar from '../../component/AppBar/AppBar';
import Grid from '@material-ui/core/Grid';

const HomeView = () => (
  <div>
    <Grid container>
      <Grid item>
        <AppBar />
      </Grid>
      <Grid contaner>
        <Grid item></Grid>
      </Grid>
    </Grid>
  </div>
);

export default HomeView;
