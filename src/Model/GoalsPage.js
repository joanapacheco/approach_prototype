import {useSelector} from 'react-redux';
import React from 'react'
import {selectDetail} from '../reducers/modelReducer';

import {makeStyles} from '@material-ui/core/styles';
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
    fontWeight: '0',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0.01000em',
    paddingLeft: '0rem',
    color: 'inherit'
}

const labelStyle2 = {
    marginBottom: '0rem',
    fontWeight: '50',
    fontSize: '1rem',
    lineHeight: '1.2',
    letterSpacing: '0.01000em',
    paddingLeft: '0rem',
    marginBlockStart: '1em',
    } 

const inputStyle = {
    height: '0.813rem',
    width: '0.813rem', 
    marginTop: '0.375rem',
    marginBottom: '0rem'
}

const details = {
    fontSize: '0.938rem',
    paddingBottom:'0.938rem',
    paddingLeft: '0rem',
    textAlign: 'justify',
    lineHeight: '1.563rem'
}

const details2 = {
    fontSize: '0.938rem',
    paddingBottom:'1rem',
    paddingLeft: '0rem',
    textAlign: 'justify',
    lineHeight: '1.563rem'
}

//style={{fonstSize:'0.625rem', height:'inherit',  paddingLeft:'0rem', fontWeight:'100', fontFamily: '"Roboto" , "Helvetica" , "Arial", sans-serif'
const ModelInfo = () =>{
    
    const classes = useStyles();
    const detail = useSelector(selectDetail);

    if (!detail) {                        
        return (
            <div className={classes.root}/>
          );
    }
    return(
        <div style={{paddingTop:'1.5rem', paddingBottom:'1.5rem', width:'65.625rem'}}>
            {detail.map( d => 
                <>
                <div>
                    <Typography variant="h5" component='h5' style={{fontFamily: 'Helvetica'}}>{d.name}</Typography>
                </div>
                <div style={{paddingTop:'0.625rem'}}>
                    <ul>
                    {d.goals.map( (goal, index) => (
                    <div key={index}>
                        {goal.goals === "" ? // verificar a descendência- se existe subgoals
                            <div style={{display:'inline-list-item'}}>
                                <div style={{height:'1.875rem', paddingTop:'1.563rem'}}> 
                                    {goal.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                        <> <li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={goal.goalName}>{goal.goalName} (*)</label></li></>
                                        :
                                        <> <li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={goal.goalName}>{goal.goalName}</label></li></>
                                   }
                                    
                                    
                                </div>
                                <AccordionDetails style={details2}>{goal.description}</AccordionDetails>
                            </div>
                        : 
                            <div>
                                <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                    
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.313rem',marginBottom:'0rem',height:'inherit'}}
                                    >
                                        {goal.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                            <><label style={labelStyle}><li style={{fontSize:'1.25rem'}} ><Typography styles={{color:'black', fontWeight:'normal'}}>{goal.goalName} (*)</Typography></li>{goal.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem',textAlign:'justify', paddingBottom:'0rem', paddingLeft:'0rem', lineHeight: '1.563rem' }}>{goal.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>
                                        :
                                            <><label style={labelStyle}><li style={{fontSize:'1.25rem'}} ><Typography styles={{color:'black', fontWeight:'normal'}}>{goal.goalName} </Typography></li>{goal.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', textAlign:'justify', paddingBottom:'0rem', paddingLeft:'0rem', lineHeight: '1.563rem'}}>{goal.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>                                            
                                        }
                                             
                                    </AccordionSummary>

                                    {goal.goals.map( g => ( 
                                        <div>
                                            {g.goals === "" ?  // verificar se existem subsubgoals
                                                <div style={{display:'inline-list-item', marginTop:'0.625rem', paddingLeft:'1.875rem'}}>
                                                    <div>

                                                        {g.requirements === 'mandatory' ? // verificar a obrigatoriedade dos objetivos para estarem checked e disabld (ainda não funciona nada disto )
                                                            <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={g.goalName}>{g.goalName} (*)</label></li> </>
                                                        :
                                                            <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={g.goalName}>{g.goalName}</label></li></>
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
                                                               <><label style={labelStyle} ><li style={{fontSize:'1.25rem'}}><Typography>{g.goalName} (*)</Typography></li>{g.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', lineHeight: '1.563rem', textAlign:'justify', paddingLeft:'0rem' }}>{g.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></>
                                                               :
                                                                <><label style={labelStyle} ><li style={{fontSize:'1.25rem'}}><Typography>{g.goalName}</Typography></li>{g.description !== "" ? <AccordionDetails style={{ fontSize: '0.938rem', lineHeight: '1.563rem',textAlign:'justify', paddingLeft:'0rem' }}>{g.description}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></> 
                                                            }
                                                                                              
                                                        </AccordionSummary>

                                                        {g.goals !== "" ?
                                                            <div>
                                                                {Object.values(g.goals).map( auxgoal => ( //última camada erros - error cause
                                                                    <div style={{display:'inline-list-item', paddingTop:'0.25rem', paddingLeft:'1.5rem'}}>
                                                                    <div style={{height:'inherit'}}>
                                                                        {auxgoal.requirements === 'mandatory' ?
                                                                            <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName} (*)</label></li></>
                                                                             :
                                                                            <>
                                                                                {auxgoal.requirements === 'sub-mandatory' ?
                                                                                    <>
                                                                                        {g.requirements === 'mandatory' ?
                                                                                            <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}(*)</label></li></>
                                                                                            :
                                                                                            <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}</label></li></>
                                                                                        }
                                                                                    </>
                                                                                    :
                                                                                    <><li style={{fontSize:'1.25rem'}}><label style={labelStyle2} for={auxgoal.goalName}>{auxgoal.goalName}</label></li></> 
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
                                                                       <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} for={g.goalName}>{g.goalName} (*)</label></li></>
                                                                       :
                                                                      <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} for={g.goalName}>{g.goalName}</label></li></>
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
                </ul>
                </div>
                </>    
            )}
        </div>

    ) 

}

export default ModelInfo;

