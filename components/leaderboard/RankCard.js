import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    width:'auto',
    maxHeight: 100,
    background:'yellow',
    fontWeight:500,
    fontSize:'20px',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius:'50%',
    background:'none',

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
                <Grid item>
                    <Typography variant="subtitle3"><h3>1.</h3></Typography>
                </Grid>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="img" src="/static/images/grid/download.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2} >
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1">
                            <h3>Daniel Donald</h3>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container direction="column" spacing={2} >
                <Grid item>
                    <Typography variant="subtitle2"><h3>12</h3><h5>Submissions</h5></Typography>
                </Grid>
                </Grid>
                
                
                <Grid item xs={12} sm container direction="column" spacing={2} >
                <Grid item>
                    <Typography variant="subtitle2"><h3>218</h3><h5>points</h5></Typography>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
        <br/>
        <br/>

        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
                <Grid item>
                    <Typography variant="subtitle3"><h3>2.</h3></Typography>
                </Grid>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="img" src="/static/images/grid/download.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2} >
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1">
                            <h3>Daniel Donald</h3>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container direction="column" spacing={2} >
                <Grid item>
                    <Typography variant="subtitle2"><h3>12</h3><h5>Submissions</h5></Typography>
                </Grid>
                </Grid>
                
                
                <Grid item xs={12} sm container direction="column" spacing={2} >
                <Grid item>
                    <Typography variant="subtitle2"><h3>218</h3><h5>points</h5></Typography>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
        <br/>
        <br/>
        </div>
    </div>
  );
}
