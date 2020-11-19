import Grid from '@material-ui/core/Grid';
import React from 'react';

import AppBar from '../../component/AppBar/AppBar';

export class UserInfomation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          <Grid item>
            <AppBar />
          </Grid>
          <Grid></Grid>
        </Grid>
      </div>
    );
  }
}
