import { useSelector} from 'react-redux';
import React, {useState} from 'react'
import {selectDetail} from '../reducers/modelReducer';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    column: {
        flexBasis: '100%',
      },
    table: {
        minWidth: 650,
      },
    
    typography: {
        fontSize: theme.typography.pxToRem(2),
    }
  }));


const labelStyle = {
    marginBottom: '0rem',
  //  fontFamily: 'Roboto , Helvetica , Arial, sans-serif',
    fontWeight: '0',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0.01000em',
    paddingLeft: '0.938rem',
    color: 'inherit'
}

const labelStyle2 = {
    marginBottom: '0rem',
    fontWeight: 'light',
    fontSize: '1rem',
    lineHeight: '1.2',
    letterSpacing: '0.01000em',
    paddingLeft: '0.656rem',
    marginBlockStart: '1em',
    } 

const inputStyle = {
    height: '0.813rem',
    width: '0.813rem', 
    marginTop: '0.375rem',
    marginBottom: '0rem'
}

const roundInputStyle = {
    height: '0.813rem',
    width: '0.813rem', 
    marginTop: '0.375rem',
    marginBottom: '0rem',
    borderRadius: '0',
    border: '1px solid #ccc',
}


const details = {
    fontSize:'0.938rem',
    textAlign: 'justify',
    lineHeight: '1.563rem',
    paddingBottom:'0.938rem',
    paddingLeft: '2.188rem',
}

const details2 = {
    fontSize:'0.938rem',
    textAlign: 'justify',
    paddingBottom:'1.25rem',
    paddingLeft: '2.188rem',
    paddingBottom:'1rem',
    lineHeight: '1.563rem'
}

const ModelInfo = (props) =>{
    
    const classes = useStyles();
    const detail = useSelector(selectDetail);

    const [changeCat, setChangeCat] = useState(true)
    if (!detail) {                        
        return (
            <div className={classes.root}/>
          );
    }

    const checkCheckedGoal = (goalName) =>{
        var checked;

        props.goals.map(g => 
            g.name === goalName ? 
                g.isChecked ? checked = true : checked = false 
            :
            null
        )
        return checked;
    }

    const handleOnChange = (e, goalName, subgoals, parentName) => {
        e.stopPropagation();

        if(parentName !== "" )
        {            
            checkParent(goalName,subgoals, parentName)
        }
        else {
            selectGoal(goalName, subgoals)
        }
       
    }

    const checkParent = (goalName, subgoals, parentName) => {
        props.goals.map(goal => 
            goal.name === parentName ? 
                    goal.isChecked ? selectGoal(goalName, subgoals)
                :
                    null
            :
            null
        )
    }

    let otherGoalName;

    const selectGoal = (goalName, subgoals) => {
        let goalsA = [...props.goals]
        let pos = -1
        let alt = false

        props.goals.map( (goal, index) => 
            goal.name === goalName ? pos = index : null
        )

        if(pos !== -1){
            goalsA[pos].isChecked ? goalsA[pos].isChecked = false : goalsA[pos].isChecked = true;
            if(goalsA[pos].log_req === "alternative")
                alt = checkAlternative(goalsA[pos]);
        }

        if(!alt){
            props.getGoals(goalsA)

            if(subgoals !== "") {
                handleSubGoals(pos, subgoals)
            }

            props.getAltMessage(false)
        }
        else {
            if(pos !== -1){
                goalsA[pos].isChecked ? goalsA[pos].isChecked = false : goalsA[pos].isChecked = true;
            }
            setChangeCat(false);
            props.getAltMessage(true)
        }
    }

    const checkAlternative = (goal) => {
        let alt = false;
        otherGoalName = "";

        props.goals.map( g => 
            g.parent === goal.parent && g !== goal ?
                (goal.isChecked && g.isChecked ? (alt = true, otherGoalName = g.name) : null)
            : null
        )

        return alt
    }

/*
    const json = Object.values(model_goals);

    //OBTER NÓS DE PRIMEIRA "linha"
    Object.values(json).map(goal =>
        Object.values(goal).map(g => console.log(g))
        )

*/
    
    const handleSubGoals = (pos, subgoals) => {
        var oldGoals = [...props.goals]

        props.goals.map( (goal, index) => 
            subgoals.map( sub => 
                sub.goalName === goal.name && sub.requirements === "sub-mandatory" ? 
                    oldGoals[index].isChecked ? oldGoals[index].isChecked = false : oldGoals[index].isChecked = true
                : 
                sub.goalName === goal.name && sub.requirements === "optional" && pos != -1 && oldGoals[pos].isChecked === false ? oldGoals[index].isChecked = false : null                
            )
        )

        props.getGoals(oldGoals)
    }

    

    return(
        <div style={{paddingTop:'1.5rem', paddingBottom:'1.5rem', width:'65.625rem'}}>
            {detail.map( d => 
                <>
                <div>
                    <Typography variant="h5" component='h5' style={{fontFamily: 'Helvetica'}}>{d.name}</Typography>
                </div>
                
                <div style={{paddingTop:'0.625rem'}}>
                    
                    {d.goals.map( (goal, index) => (
                    <div key={index}>
                        {goal.goals === "" ? // verificar a descendência- se existe subgoals
                            <div style={{display:'inline-list-item'}}>
                                <div style={{height:'1.875rem', paddingTop:'1.563rem'}}> 
                                    {goal.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                        <><input style={inputStyle} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"}  checked={checkCheckedGoal(goal.goalName)} enabled onClick={e => e.stopPropagation()} id={goal.goalName} /> <label style={labelStyle2} for={goal.goalName}>{goal.goalName} (*)</label></>
                                        :
                                        <><input style={inputStyle} checked={checkCheckedGoal(goal.goalName)} enabled="true" onClick={e => handleOnChange(e,goal.goalName, goal.goals, goal.parentName)} id={goal.goalName} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /> <label style={labelStyle2} htmlFor={goal.goalName}>{goal.goalName}</label></>
                                   }
                                    
                                    
                                </div>
                                <AccordionDetails style={details2}>{goal.description}</AccordionDetails>
                            </div>
                        : 
                            <div>
                                <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                    
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.5rem',marginBottom:'0rem',height:'inherit'}}
                                    >
                                        {goal.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                            <><input style={inputStyle} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(goal.goalName)} enabled onClick={e => e.stopPropagation()} style={inputStyle} id={goal.goalName} /> <label style={labelStyle} ><Typography styles={{color:'black', fontWeight:'normal'}}>{goal.goalName} (*)</Typography>{goal.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', textAlign:'justify', lineHeight: '1.563rem', paddingBottom:'0rem', paddingLeft:'0rem' }}>{goal.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>
                                        :
                                            <><input style={inputStyle} checked={checkCheckedGoal(goal.goalName)} onClick={e => handleOnChange(e,goal.goalName,goal.goals, goal.parentName)} id={goal.goalName} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle} ><Typography styles={{color:'black', fontWeight:'normal'}}>{goal.goalName} </Typography>{goal.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', textAlign:'justify', lineHeight: '1.563rem', paddingBottom:'0rem', paddingLeft:'0rem' }}>{goal.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>                                            
                                        }
                                             
                                    </AccordionSummary>

                                    {goal.goals.map( g => ( 
                                        <div>
                                            {g.goals === "" ?  // verificar se existem subsubgoals
                                                <div style={{display:'inline-list-item', marginTop:'0.625rem', paddingLeft:'1.875rem'}}>
                                                    <div>
                                                        {g.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                                            <><input type={g.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(g.goalName)} enabled onClick={e => e.stopPropagation()} style={inputStyle} id={g.goalName} /> <label style={labelStyle2} for={g.goalName}>{g.goalName} (*)</label> </>
                                                        :
                                                            <><input style={inputStyle} checked={checkCheckedGoal(g.goalName)} onClick={e => handleOnChange(e,g.goalName, g.goals, g.parentName)} id={g.goalName} type={g.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle2} for={g.goalName}>{g.goalName}</label></>
                                                        }
                                                    </div>

                                                    <AccordionDetails style={details}>{g.description}</AccordionDetails>
                                                </div>
                                            :
                                                <div style={{display:'inline-list-item', paddingTop:'0.625rem', paddingLeft:'1.875rem'}}>

                                                   <Accordion style={{border: 'none', boxShadow:'none', height:'auto',marginTop:'0rem',paddingTop:'0rem', paddingBottom:'0rem'}} >
                                    
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.938rem', marginBottom:'0rem',height:'0.625rem'}}
                                                            aria-controls="panel1bh-content33"
                                                            id="panel1bh-header33"
                                                        >
                                                            {g.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                                                <><input style={inputStyle} type={g.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(g.goalName)} enabled  onClick={e => e.stopPropagation()} id={g.goalName} /><label style={labelStyle} ><Typography>{g.goalName} (*)</Typography>{g.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem',  textAlign:'justify', lineHeight: '1.563rem', paddingLeft:'0rem' }}>{g.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>
                                                               :
                                                                <><input style={inputStyle} checked={checkCheckedGoal(g.goalName)} onClick={e => handleOnChange(e, g.goalName, g.goals, g.parentName)} id={g.goalName} type={g.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle} ><Typography>{g.goalName} </Typography>{g.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', textAlign:'justify', lineHeight: '1.563rem', paddingLeft:'0rem' }}>{g.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></> 
                                                            }
                                                                                              
                                                        </AccordionSummary>

                                                        {g.goals !== "" ?
                                                            <div>
                                                                {Object.values(g.goals).map( auxgoal => ( //última camada erros - error cause
                                                                    <div style={{display:'inline-list-item', paddingTop:'0.25rem', paddingLeft:'1.875rem'}}>
                                                                    <div style={{height:'inherit'}}>
                                                                        {auxgoal.requirements === 'mandatory' ?
                                                                            <><input style={inputStyle} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(auxgoal.goalName)} enabled onClick={e => e.stopPropagation()} id={auxgoal.goalName} /><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName} (*)</label></>
                                                                             :
                                                                            <>
                                                                                {auxgoal.requirements === 'sub-mandatory' ?
                                                                                    <>
                                                                                        {g.requirements === 'mandatory' ?
                                                                                            <><input style={inputStyle} type={auxgoal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(auxgoal.goalName)} enabled onClick={e => e.stopPropagation()} id={auxgoal.goalName} /><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}</label></>
                                                                                            :
                                                                                            <><input style={inputStyle} checked={checkCheckedGoal(auxgoal.goalName)} onClick={e => handleOnChange(e,auxgoal.goalName, auxgoal.goals, auxgoal.parentName)} id={auxgoal.goalName} type={auxgoal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}</label></>
                                                                                        }
                                                                                    </>
                                                                                    :
                                                                                    <><input style={inputStyle} checked={checkCheckedGoal(auxgoal.goalName)} onClick={e => handleOnChange(e,auxgoal.goalName, auxgoal.goals, auxgoal.parentName)} id={auxgoal.goalName} type={auxgoal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}</label></> 
                                                                                }                                                                                    
                                                                            </>                                                                        
                                                                        }

                                                                </div>
                                                                    <AccordionDetails style={details}>{auxgoal.description}</AccordionDetails>
                                                                </div>
                                                                ))}
                                                            </div>  
                                                        :
                                                            <div style={{display:'inline-list-item',paddingTop:'0.375rem', paddingLeft:'0rem'}}>
                                                                <div style={{height:'inherit'}}>
                                                                    {g.requirements === 'mandatory' ?
                                                                        <><input style={inputStyle} type={goal.logic_operators !== "alternative"  ?  "checkbox" : "radio"} checked={checkCheckedGoal(g.goalName)} enabled onClick={e => e.stopPropagation()} id={g.goalName} /><label style={labelStyle} for={g.goalName}>{g.goalName} (*)</label></>
                                                                       :
                                                                        <><input style={inputStyle} checked={checkCheckedGoal(g.goalName)} onClick={e => handleOnChange(e,g.goalName, g.goals, g.parentName, g.parentName)} id={g.goalName} type={g.logic_operators !== "alternative"  ?  "checkbox" : "radio"} /><label style={labelStyle} for={g.goalName}>{g.goalName}</label></>
                                                                    }
                                                                    
                                                                    </div>
                                                                    <AccordionDetails style={details}>{g.description}</AccordionDetails>
                                                            </div>
                                                        }
                                                    </Accordion>
                                                </div>
                                            }
                                        </div>
                                        ))}     
                                </Accordion>
                            </div>
                        }                                
                    </div>
                ))}
                </div>
                </>    
            )}
        </div>

    ) 
    

}

export default ModelInfo;
