
import React from 'react';
import Model from './workspace_model_selection.png'; 
import CategoryGoals from './workspace_model_category_goals.png'

const WorkspaceInstructions = () => {
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
        textAlign: 'justify',
        lineHeight: '1.563rem',
        textAlign: 'center'
    }

    const oi = "ao abrir a pagina de instrucoes e apresentado um modelo que no qual o utilizador pode selecionar uma categoria de objetivos."

    return(
      <div style={{display:'inline-block', textAlign:'center', marginBottom:'3rem'}}>
        <h2>Workspace Instructions</h2>
        <div style={{ marginTop:'2.5rem', textAlign:'center', width:'auto', display: 'inherit'}}>
          <p style={details2}>{oi.toString()}</p>
          <img src={Model} alt="HomePage" style={{width:'55rem', heigth:'auto', marginTop:'1.5rem'}}/>
        </div>
        <div style={{ marginTop:'2rem', textAlign:'center', width:'55rem', display: 'inherit'}}>
          <p style={details2}>ao selecionar uma categoria serao apresentados, a baixo do modelo, um conjunto de objetivos que o utilizador pode selecionar e que quaqndo integrados no software a ser produzido permitem desenvolver sistemas mais inclusivas a nivel de genero</p>
          <img src={CategoryGoals} alt="HomePage" style={{width:'55rem', heigth:'auto',  marginTop:'1.5rem'}}/>
        </div>

        <div style={{ marginTop:'2rem', textAlign:'center', width:'55rem', display: 'inherit'}}>
          <p style={details2}>existem objetivos que dao origem a sub-objetivos e para que os utilizador os consiga visualizar tem de selecionar a seta virada para baixo que se encontra do lado direito do ecrã </p>
          <img src={CategoryGoals} alt="HomePage" style={{width:'55rem', heigth:'auto',  marginTop:'1.5rem'}}/>
        </div>
      </div>     
    )

}

export default WorkspaceInstructions;