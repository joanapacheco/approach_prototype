import React from 'react'
import { useLocation } from 'react-router-dom';
import { model_goals } from '../reducers/modelReducer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubmittedAnswerPage =()=>{
  const location = useLocation()
  const {goals_list} = location.state

  const labelStyle = {
    marginBottom: '0rem',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.2',
    letterSpacing: '0.01000em',
    paddingLeft: '0rem',
    color: 'inherit'
  }

  const labelStyle2 = {
    marginBottom: '0rem',
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: '1.2',
    letterSpacing: '0.01000em',
    paddingLeft: '0rem',
    marginBlockStart: '1em',
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

  const json = Object.values(model_goals);

  const countCheckedGoalsByCat = (catName) => {
    let count = 0

    goals_list.map(g =>
      g.category === catName && g.isChecked ? count++ : null
    )

    return count
  }

  const getDescription = (goalName, cat) => {
    let desc = ""

    goals_list.map( goal => 
      goal.category === cat && goal.isChecked ? 
        Object.values(json).map(g =>
          Object.values(g).map(goal1 => (
              goal1.name === cat ? 
                Object.values(goal1.goals).map(goal2 => (
                  goalName === goal2.goalName ? desc = goal2.description : null,
                  desc === "" ? 
                  Object.values(goal2.goals).map(goal3 => (
                    goalName === goal3.goalName ? desc = goal3.description : null,
                    desc === "" ?
                    Object.values(goal3.goals).map(goal4 => (
                      goalName === goal4.goalName ? desc = goal4.description : null,
                      desc === "" ?
                        Object.values(goal4.goals).map(goal5 => 
                          goalName === goal5.goalName ? desc = goal5.description : null
                      )
                      : null
                    ))
                    :null))
                  :null))
            :null)))
      :null
    )
      return desc
  }

  const getCheckedSons = (parent) => {
    let sons = []

    goals_list.map(goal => 
        goal.parent === parent && goal.isChecked ? sons.push(goal) : null
    )

    return sons
  }

  return(
    <div >
      <div>
        <h1 style={{ textAlign: 'center', margin: '2rem  0 4rem 0'}}>Selected Properties</h1>
      </div>
      
      <div style={{width:'60rem', marginBottom:'4rem'}}>
        <ul>
          {
            Object.values(json).map(category =>
              Object.values(category).map( cat =>
                countCheckedGoalsByCat(cat.name) !== 0 ? 
                  <div style={{ marginBottom:'2rem'}}>
                    <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                      
                      <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.313rem',marginBottom:'0rem',height:'inherit'}}
                      >

                        <><li style={{fontSize:'1.125rem'}}><label style={labelStyle2} >{cat.name}</label></li></>
                                                            
                      </AccordionSummary>

                      <div style={{display:'inline-list-item', paddingTop:'0.25rem', paddingLeft:'1.5rem'}}>
                        {goals_list.map( g => (
                          g.isChecked && g.category === cat.name && g.parent === "" ? 
                          (
                              g.hasSon ? (
                                <div>
                                <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginBottom:'0.850rem',marginTop:'0rem'}}>
                                                  
                                  <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.313rem',height:'inherit'}}
                                  >
                                    { getDescription(g.name, cat.name) === "" ? 
                                      <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{g.name}</label></li></>
                                    :
                                    <><label ><li style={{fontSize:'1.25rem'}}><Typography style={labelStyle} >{g.name} </Typography></li>{g.description !== "" ? <AccordionDetails style={details}>{getDescription(g.name,cat.name)}</AccordionDetails>: <div style ={{height:'0rem'}}/>}</label></> 
                                    }
                                    
                                                                        
                                  </AccordionSummary>

                                  {getCheckedSons(g.name).map(son1 => 
                                    son1.hasSon ?
                                      <div style={{display:'inline-list-item', paddingLeft:'1.5rem'}}>
                                        <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                                          
                                          <AccordionSummary
                                              expandIcon={<ExpandMoreIcon />}
                                              style={{paddingLeft:'0rem', paddingRight:'0rem',marginBottom:'0rem',height:'inherit'}}
                                          >
                    
                                          <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{son1.name}</label></li></>
                                                                                
                                          </AccordionSummary>

                                          {getCheckedSons(son1.name).map(son2 => 
                                              son2.hasSon ? 
                                              <div style={{display:'inline-list-item',  paddingLeft:'1.5rem'}}>
                                                <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                                            
                                                  <AccordionSummary
                                                      expandIcon={<ExpandMoreIcon />}
                                                      style={{paddingLeft:'0rem', paddingRight:'0rem',marginTop:'0.313rem',marginBottom:'0rem',height:'inherit'}}
                                                  >
                            
                                                    <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{son2.name}</label></li></>
                                                                                      
                                                </AccordionSummary>

                                                </Accordion>
                                                
                                              </div>
                                              : 
                                              <div style={{display:'inline-list-item', paddingTop:'1rem', paddingLeft:'1.5rem', marginBottom: '0rem'}}>
                                                <li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{son2.name}</label></li>
                                                <AccordionDetails style={details}>{getDescription(son2.name, cat.name)}</AccordionDetails>
                                              </div>
                                          )}
                                        </Accordion>
                                      </div>
                                    
                                    : 
                                    <div style={{display:'inline-list-item', paddingTop:'1rem', paddingLeft:'1.5rem', marginBottom: '0rem'}}>
                                       <li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{son1.name}</label></li>
                                      <AccordionDetails style={details}>{getDescription(son1.name, cat.name)}</AccordionDetails>
                                    </div>
                                    )}
                                  </Accordion>
                                  </div>)
                              : 
                              <div style={{display:'inline-list-item',paddingTop:'0.7rem', paddingLeft:'0rem'}}>
                                 <li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{g.name}</label></li>
                                <AccordionDetails style={details}>{getDescription(g.name, cat.name)}</AccordionDetails><p></p>
                              </div>
                          )
                            : 
                            null 
                        ))
                        }
                      </div>
                      
                    </Accordion>
                  </div>
                : null
                ))
          }
        </ul>
      </div>
    </div>
  )

}

export default SubmittedAnswerPage;
