import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const location = useLocation();
  return (
    <div className={classes.root}>
      {location.pathname !== '/' ?
      <AppBar position="static">
        <Toolbar>
          <Typography component={Link} to='/' color='inherit' size='large' className={classes.title}>
          A Requirements Engineering Approach Prototype
          </Typography>
         
          <a href="/workspace" size='large' style={{fontSize:'1rem', fontWeight:'450', textDecoration:'none', color:' black'}}>WORKSPACE</a>
          {//<Button component={Link} to='/workspace' color="inherit" size='large'>Workspace</Button>}
          /*<Button color="inherit" size='large'>Model</Button>
          <Button color="inherit">Project</Button>*/}
        </Toolbar>
      </AppBar>
      :
      <AppBar position="static">
        <Toolbar>
         
        </Toolbar>
      </AppBar>
    }
    </div>
  );
}