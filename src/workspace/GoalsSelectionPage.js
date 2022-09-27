import React, {useState} from 'react';
import 'beautiful-react-diagrams/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Model from '../Model/Model';
import Grid from '@material-ui/core/Grid';
import {mandatory_categories} from '../reducers/modelReducer';
import {goals_names} from '../reducers/modelReducer';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


export default function GenderInclusiveGoalsWorkspace() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [goals, setGoals] = useState(goals_names)

  const [mandatoryCatName, setMandatoryCat] = useState("")
  
  const [altMessage, setAltMessage] = useState(false)
  const [valide, setValide] = useState(true)
  const [checkSons, setCheckSons] = useState(true)
  let [sonsNotChecked, setSonsNotChecked] = useState([]);

  const history = useHistory();

  const checkMandatoryCategories = () => {
    let count = 0;
    let valide = true

    mandatory_categories.map(category => (
      count = 0,
      goals.map(goal =>
        goal.isChecked && goal.category === category ? count ++ : null  
      ),
      count === 0 ? (valide = false, setMandatoryCat(category)) : null
    ))

    return valide

  }

  const checkAnswer = () => {
    let sons = []
    let auxArray = []
    let check = true
    let count_sons_checked = 0;
    let aux 
    
    goals.map(goal => (
      count_sons_checked = 0,
      goal.isChecked ? (
        sons = getSons(goal.name),
        sons.length !== 0 ? ( 
          sons.map(s => (
              goal.isChecked && s.isChecked ? ( count_sons_checked++) : null,
              aux = goal
          )),
          count_sons_checked === 0 ? (check = false, auxArray.push({name: aux.name, category: aux.category})) : null
        )
        :
        null 
      )
      :
      null
    ))
  
    let v = checkMandatoryCategories()
    setValide(v)

    setCheckSons(check)

    setSonsNotChecked(auxArray)
    return check && v
  }

  const getSons = (parentName) => {
    let sons = []

    goals.map(goal => 
      goal.parent === parentName ?  sons.push(goal) : null
    )

    return sons
  }

  const submitAnswer = () =>{
     //fazer verificações das restrições
     if(checkAnswer()){
      history.push({pathname: "/submittedproperties", state:{
          goals_list: goals       
        }});
    }
  }

  const getSonsNotCheckedString = () =>{
    let string = ""

    console.log(sonsNotChecked.length)
    sonsNotChecked.map((s, c) => (console.log(s),
      string === "" ? string = `${s.name} (${s.category})` : string = `${string}, ${s}`)
    )  
      

      console.log(string)
    return string
  }

  return (
    <div className={classes.root}>
    <Grid container justifyContent='center' direction='row' spacing={3}>
        <Grid container justifyContent='center' direction='row' spacing={0} style={{marginTop:'3%'}}>
          { activeStep === 0 ? 
            <Button 
            variant="contained" 
            color='primary'
            onClick={submitAnswer}
            >
            Submit
            </Button>
            :
            <div/>
          }
            
        </Grid>
        <Grid >
          {!valide ? <div><p style={{textAlign:'center', marginTop: '2rem'}}>{mandatoryCatName} deve ter objetivos selecionados</p></div> : <div/>}

          {!checkSons ? 
          <div >
            <p style={{textAlign:'center', marginTop: '2rem'}}> {getSonsNotCheckedString()} não têm nenhum subgoal selecionado</p>
            
            </div> 
          : 
          <div/> }


          <Model page="MODEL" goals={goals} getGoals={setGoals} altMessage={altMessage} getAltMessage={setAltMessage}/>
        </Grid>
       
        
           
      </Grid>

    </div>
  );
}