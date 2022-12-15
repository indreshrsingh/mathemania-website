import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function Categories() {
    const useStyles = makeStyles({
        catContainer: {
          maxWidth: '1400px',
          margin: 'auto',
        },

        root: {
          maxWidth: 325,
          height: '400px',
          marginBottom: '50px',
          marginLeft: '50px',
          marginRight: '50px',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='325' height='400' preserveAspectRatio='none' viewBox='0 0 325 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='325' height='400' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c291 C 21.8%2c268.4 65.4%2c188.4 109%2c178 C 152.6%2c167.6 174.8%2c248.2 218%2c239 C 261.2%2c229.8 303.6%2c153.4 325%2c132L325 400L0 400z' fill='rgba(24%2c 61%2c 93%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='325' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
backgroundAttachment: 'inherit',
backgroundSize: 'cover',
          color: theme.palette.primary.contrastText,
          borderRadius: '15px',
          transformOrigin: 'center center 0px',
  transition: "all .5s ease-out",
  animationName: 'animate',
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  transform: 'perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg)',
  zIndex: '1',
  '&:hover': {
    animation: 'unset',
    marginTop: '1vh',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
  },
    
          [theme.breakpoints.down('xs')]: {
            marginLeft: '10px',
            marginRight: '10px',
            width: '300px',
            transformOrigin: 'none',
  transition: "none",
  animationName: 'animate',
  animationDuration: 'none',
  animationIterationCount: 'none',
  transform: 'none',
  marginBottom: '-100px',
  zIndex: '1',
  '&:hover': {
    animation: 'none',
    marginTop: '0',
    transform: 'none'
  },
        },
      },

      subContent: {
        height: '230px',
        position: 'relative',
        width: '320px',
        margin: 'auto'
      },
      subText: {
        position: 'absolute',
      bottom: '0',
      width: '250px',
      },

      cont: {
        height: '600px',
        marginBottom: '-100px',
      }
    });

      const classes = useStyles();
    return (
        <div className={classes.catContainer}>
          
            <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.categoryCard}>

              <Grid Item xl={12}  lg={12} >
              <Typography variant='h2'  align='center' style={{marginTop: '12%', paddingBottom: '50px'}}>All About <span style={{color: '#3ed1b8'}}>MATHEMANIA</span></Typography>
              </Grid>
     <Grid item className={classes.cont}>
    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Event Details"
        
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        21 December-22 December
        The first round will be objective with the next two rounds being subjective.
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item className={classes.cont}>
    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Medium"
       
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        The event will be completely online. All updates and rules for the event will be posted by 12 noon, 21 December on this website. Stay tuned! </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item className={classes.cont}>
    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Register"
        
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        Link to be uploaded soon</Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item className={classes.cont}>
    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Prizes"
       
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        Special Prizes for Top 3.
        Honourable Mention Certificate for Top 10.
        Participation  Certificate for all.
       </Typography>
      </CardContent>
    </Card>
    </Grid>

    </Grid>
      
        </div>
    )
}

export default Categories
