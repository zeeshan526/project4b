import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import footer from './Footer.module.css'
import fb from '../image/fb.jpg'
import git from '../image/git.png'
import Linked from '../image/in.png'



import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={footer.Container}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <p className={footer.foot}>interactive Designe + code by zeeshan Malik</p>
<br/>
<br/>
<br/>
<br/>
        <a href="https://www.facebook.com/zeshanali.zeshanali.735"> <img className={footer.image} src={fb} alt="Facebook" /></a>
        <a href="https://github.com/zeeshan526"> <img className={footer.image}  src={git} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/zeeshan-ali-a57a17176"> <img className={footer.image}  src={Linked} alt="Linkin" /></a>



        </Grid>
       
      </Grid>
      </div>
    </div>
  );
}
