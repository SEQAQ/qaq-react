/* import ButtonBase from '@material-ui/core/ButtonBase';*/
import Grid from '@material-ui/core/Grid';
/* import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';*/
import React from 'react';

export class HomeViewQuestonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*    render() {
        return (
            <div className="root">
                <Paper className="paper">
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className="image">
                                <img className="img" alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }*/

  render() {
    return (
      <>
        {/* 一个Card */}
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          {/* 问题的标题 */}
          <Grid item>{/* <span>{this.props.title}</span>*/}</Grid>
          {/* 图片和简介 */}
          <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item></Grid>
          </Grid>
          {/* 最下面的各种按钮 */}
          <Grid item></Grid>
        </Grid>
      </>
    );
  }
}

export default HomeViewQuestonCard;
