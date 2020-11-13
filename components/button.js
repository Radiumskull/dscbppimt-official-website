import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      float:'center',
    },
    alignItems:'center',
    justifyContent:'center',
    float:'center',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary" alignItems="center" justifyContent='center' float='center'>
        View More
      </Button>
    </div>
  );
}



