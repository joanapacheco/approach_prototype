
import React from 'react';
import logo from './Homepage.png'; 

const Instructions = () => {
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
        marginTop: '2rem',
        marginBottom: '3rem',
        paddingLeft: '0rem',
        textAlign: 'justify',
        lineHeight: '1.563rem'
    }

    return(
      <div style={{display:'inline-block'}}>
        <div style={{width:'65.625rem', textAlign:'center', marginTop:'2.5rem'}}>
            <img src={logo} alt="HomePage" style={{width:'55rem', heigth:'auto'}}/>
            <div style={details2}>
                <p>When the frame is opened, the user is presented with a home page containing the name and description of the frame, as well as a series of buttons that the user must select to navigate through the system.</p>
                <p>TThe buttons that are displayed to the user are:</p>
                <ul >
                    <li><a style={{color:'blue'}}>Instructions</a><label> (Clicking this button takes the user to this page and allows the user to get information about the system)</label></li>
                    <li><a href="/workspace_instructions" style={{color:'blue'}} target="_blank" rel="noopener noreferrer" > Workspace</a></li>
                    <li><a href="/genderinclusiveproperties_instructions" style={{color:'blue'}}>Gender Inclusive Properties</a></li>
                    <li><a href="/example_instructions_instructions" style={{color:'blue'}}>DriveNow - Example</a></li>
                </ul>
            </div>
        </div>
        
      </div>     
    )

}

export default Instructions;