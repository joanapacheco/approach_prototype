import './App.css';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Header from './HomePage';
import GenderInclusiveGoalsWorkspace from './workspace/GoalsSelectionPage';
import Model from './Model/Model';
import DriveNow from './case_study/DriveNow';
import SubmitAnswerPage from './Model/SubmitAnswerPage';
import Instructions from './Instructions/Instructions';
import WorkspaceInstructions from './Instructions/workspace_instructions';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
     // main: "#ab47bc", main: "#6b78ff",
      main: "#7bbcce"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));


function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Grid className={classes.root} container  justifyContent = "center" alignItems='center' direction='row' >
                  <Grid item xs={12}>
                    <NavBar/>
                  </Grid>
                  <Switch> 
                      <Route path="/document/new">
                        <Grid item xs={12} md={12}>
                            
                        </Grid>
                      </Route>
                      <Route path="/workspace">
                        <Grid item xs={12} md={10}>
                          <GenderInclusiveGoalsWorkspace/>
                        </Grid>
                      </Route>
                      <Route path="/workspace_instructions">
                        <Grid item xs={12} md={10}>
                          <WorkspaceInstructions/>
                        </Grid>
                      </Route>
                      <Route path="/instructions">
                        <Grid item >
                          <Instructions/>
                        </Grid>
                      </Route>
                      <Route path="/genderinclusiveproperties">
                        <Grid item style={{paddingBottom:'0'}}>
                          <Model page="PROPERTIES"/>
                        </Grid>
                      </Route>
                      <Route path="/genderinclusiveproperties_instructions">
                        
                      </Route>
                      <Route path="/submittedproperties">
                        <Grid item style={{paddingBottom:'0'}}>
                          <SubmitAnswerPage/>
                        </Grid>
                      </Route>
                      <Route path="/example">
                        <Grid item style={{paddingBottom:'0'}}>
                          <DriveNow/>
                        </Grid>
                      </Route>
                      <Route path="/example_instructions">
                        
                      </Route>
                      <Route path="/">
                        <Header />
                      </Route>
                  </Switch>
                  </Grid>
          </Router>
      </ThemeProvider>
);
}

export default App;
