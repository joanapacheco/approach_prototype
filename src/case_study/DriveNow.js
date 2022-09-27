
import { goals_examples} from '../reducers/modelReducer';
import { all_categories} from '../reducers/modelReducer';
import { model_goals } from '../reducers/modelReducer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DriveNow = () => {
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

    const details2 = {
        fontSize: '0.938rem',
        paddingBottom:'0rem',
        marginBottom: '0rem',
        paddingLeft: '0rem',
        textAlign: 'justify',
        lineHeight: '1.563rem'
    }

    const json = Object.values(model_goals);
 

    const hasExamplesByCat = (category) => {
      let has = false;

      goals_examples.map(e =>
        e.category === category ? has = true : null
      )

      return has
    }

    const getGoalsWithoutParentsByCat = (category) => {
      let goals = []

      goals_examples.map(goal =>
        goal.parent === "" && goal.category === category ? goals.push(goal) : null
      )

      return goals
    } 

    const sons = (goalName) => {
      let sons = []

      goals_examples.map(goal => 
        goal.parent === goalName ? sons.push(goal) : null
      )

      return sons
    }


    const getGoalDescription = (goalName) => {
      let desc = ""

      Object.values(json).map(category =>
        Object.values(category).map( cat => 
          Object.values(cat.goals).map(goal => ( console.log(goal.goalName + "  " + goal.description),
            goal.goalName === goalName ?  desc = goal.description : null,
            desc === "" ? 
            Object.values(goal.goals).map(g2 => ( console.log(g2.goalName + "  " + g2.description),
              g2.goalName === goalName ? desc = g2.description : null,
              desc === "" ? 
                Object.values(g2.goals).map(g3 => (console.log(g3.goalName + "  " + g3.description),
                  g3.goalName === goalName ? desc = g3.description : null)
                  )
                : 
                null
              )
              
              )
            : 
            null
            
          )
        )

      ))

      return desc
    }

    const getExampleDescription = (goalName) => {
      let desc

      goals_examples.map(e =>
        e.goalName === goalName ? desc = e.example_desc : null
        
      )

      return desc
    }

    return(
      <div style={{display:'inline-block'}}>
        <div className='oi' style={{ height: '22.5rem', width: '65.625rem', paddingTop: '3%' }}>
          <h1 style={{textAlign:'center'}}>Drive Now</h1>
          <p style={{marginTop:'5%', fontSize:'0.938rem',textAlign: 'justify', lineHeight: '1.563rem'}}>
            DriveNow is a car sharing platform from BMW Munich, currently offering its services in four countries. The business model is commercial car sharing for registered users with flexible drop-off points for the vehicles on public parking lots. The car sharing system is composed of a web application for registration, reservation and billing, a car fleet maintained by a service partner where each car is equipped with a meter and a transponder, and a central database. In exchange for a one-time fee, members of the program can use DriveNow cars whenever needed. The nearest car can be located and reserved though an online application or via phone. Once reserved, the car is held free of charge for 15 minutes. Members only pay for the time they used the car, not needing to inform in advance about when they will need it for. At the end of a booking, the car can be dropped anywhere in a specified business area. Members can also choose the car model they want, incur no extra fuel costs, and park for free within city limits.
            </p>
        </div>
        <div style={{width:'65.625rem',  marginBottom:'2rem'}}>
        <ul style={{paddingLeft: '1.2rem'}}>
          {
            all_categories.map(category =>
              hasExamplesByCat(category) ?
              <div style={{ marginBottom:'2rem'}}>
              <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem'}}>
                                
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    style={{paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0rem', paddingBottom:'1rem',marginBottom:'0rem',height:'inherit', marginRight:'0rem'}}
                >

                  <><li style={{fontSize:'1.125rem'}}><label style={labelStyle2} >{category}</label></li></>
                                                      
                </AccordionSummary>

                <div style={{display:'inline-list-item', paddingTop:'0.5rem', paddingLeft:'1.5rem'}}>
                  {getGoalsWithoutParentsByCat(category).map( g1 => (
                        sons(g1.goalName).length !== 0 ? (
                          <div>
                          <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginBottom:'0.850rem',marginTop:'0rem'}}>
                                            
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                style={{paddingLeft:'0rem', paddingTop:'0rem', paddingBottom:'1.5rem' ,height:'inherit', paddingRight:'0rem'}}
                            >
                              { getExampleDescription(g1.goalName) === "" ? 
                                <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{g1.goalName}</label></li></>
                              :
                                <><label ><li style={{fontSize:'1.25rem'}}><Typography style={labelStyle} >{g1.goalName} </Typography></li>{g1.example_desc !== "" ? <ul type="circle">
                                <AccordionDetails style={details2} ><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}>Description: {getGoalDescription(g1.goalName)}</p></li><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}><AccordionDetails style={details2} >Example: {getExampleDescription(g1.goalName)}</AccordionDetails></p></li></AccordionDetails></ul>
                         : <div style ={{height:'0rem'}}/>}</label></> 
                              }
                              
                                                                  
                            </AccordionSummary>

                            {sons(g1.goalName).map(g2 => 
                              g2.hasSon ?
                                <div style={{display:'inline-list-item', paddingTop:'0rem', paddingBottom:'1rem', paddingLeft:'1.5rem'}}>
                                  <Accordion style={{border: 'none', boxShadow:'none', height:'inherit',marginTop:'0rem',}}>
                                                    
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        style={{paddingLeft:'0rem', paddingRight:'0rem',marginBottom:'0rem',height:'inherit'}}
                                    >
              
                                    <><li style={{fontSize:'1.25rem'}}><label style={labelStyle} >{g2.goalName}</label></li></>
                                                                          
                                    </AccordionSummary>

                                    {sons(g2.goalName).map(g3 =>
                                      g3.hasSon ?
                                        null
                                      :
                                      g3.example_desc !== "" ? 
                                      <div style={{display:'inline-list-item', paddingTop:'1.5rem', paddingBottom:'1.5rem', paddingLeft:'1.5rem', marginBottom: '0rem'}}>
                                        <li style={{fontSize:'1.25rem'}}><label style={labelStyle}>{g3.goalName}</label></li>
                                        <ul type="circle">
                                        <AccordionDetails style={details2} ><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}>Description: {getGoalDescription(g3.goalName)}</p></li><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}><AccordionDetails style={details2} >Example: {getExampleDescription(g3.goalName)}</AccordionDetails></p></li></AccordionDetails></ul>
                            
                                      </div>
                                      : 
                                      null
                                    )}


                                  </Accordion>
                                </div>
                              
                              :
                              g2.example_desc !== "" ? 
                              <div style={{display:'inline-list-item', paddingTop:'0rem', paddingBottom:'3rem', paddingLeft:'1.5rem', marginBottom: '0rem'}}>
                                 <li style={{fontSize:'1.25rem'}}><label style={labelStyle}>{g2.goalName}</label></li>
                                 <ul type="circle">
                                   <AccordionDetails style={details2} ><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}>Description: {getGoalDescription(g2.goalName)}</p></li><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}><AccordionDetails style={details2} >Example: {getExampleDescription(g2.goalName)}</AccordionDetails></p></li></AccordionDetails></ul>
                            
                              </div>
                              :
                              null
                              )}
                          </Accordion>
                          </div>
                            )
                        : 
                        g1.example_desc !== "" ? 
                        <div style={{display:'inline-list-item',paddingTop:'0rem', paddingBottom:'3rem', paddingLeft:'0rem'}}>
                           <li style={{fontSize:'1.25rem'}}><label style={labelStyle}>{g1.goalName}</label></li>
                           <ul type="circle">
                              <AccordionDetails style={details2} ><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}>Description: {getGoalDescription(g1.goalName)}</p></li><li><p style={{marginBottom:'0rem', paddingTop:'0rem'}}><AccordionDetails style={details2} >Example: {getExampleDescription(g1.goalName)}</AccordionDetails></p></li></AccordionDetails></ul>
                            
                        </div>
                        : 
                        null
                    
                  
                  ))}
                </div>
                
              </Accordion>
            </div>
              :
              null
            )}
          </ul>
        </div>
      </div>     
    )

}

export default DriveNow;