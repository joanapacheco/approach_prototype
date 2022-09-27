import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDetail,selectedNode } from '../reducers/modelReducer';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import ModelInfo from './ModelPresentation';
import * as Scroll from 'react-scroll';
import Goals from './GoalsPage';

const CustomNode = (props) => {
    const { inputs } = props;
    const dispatch = useDispatch();
    const selected_node = useSelector(selectedNode);
    const bg_color = (selected_node === props.content ? '#a82834' :'	#Dc7048')
    //'#9b77da':'#a86bff') 

    const onClick= function(){
        dispatch(setDetail(props.content));
        Scroll.animateScroll.scrollToBottom();
    }

    return (
      <div style={{ background:bg_color, borderRadius: '0.313rem' }} onClick={onClick}>
        <div style={{ padding: '0.938rem', color: 'white'}}>
          {props.content}
        </div>
        <div style={{marginTop: '1.25rem'}}>
          {inputs.map((port) => React.cloneElement(port, {
            style: { width: '3.125rem', height: '1.25rem', background: '##9b77da' }
          }))}
        </div>
      </div>
    );
  };

  const initialSchema = createSchema({
    nodes: [
      //{ id: 'goals', content: 'Gender Inclusive Software Goals', coordinates: [400, 50], render: CustomNode, disableDrag:true },
      { id: 'goals', content: 'Gender Inclusion Properties', coordinates: [400, 50], render: CustomNode, disableDrag:true },
      { id: 'help', content: 'Help', coordinates: [50, 250], render: CustomNode, disableDrag:true },
      { id: 'errorsandfaults', content: 'Errors and Faults Management', coordinates: [45, 350], render: CustomNode, disableDrag:true },
      { id: 'systemInfo', content: 'System Information', coordinates: [250, 250], render: CustomNode, disableDrag:true },
      { id: 'presentation', content: 'Presentation', coordinates: [400, 350], render: CustomNode, disableDrag:true },
      { id: 'inputs', content: 'Inputs', coordinates: [550, 250], render: CustomNode, disableDrag:true },
      { id: 'features', content: 'Features', coordinates: [750, 250], render: CustomNode, disableDrag:true },
      { id: 'risk', content: 'Risk Support', coordinates: [900, 350], render: CustomNode, disableDrag:true },
      { id: 'alternativePaths', content: 'Alternative Ways to Achieve Goal', coordinates: [575, 350], render: CustomNode, disableDrag:true },
    ],
    
    links: [
      { input: 'goals',  output: 'help', readonly:true },
      { input: 'goals',  output: 'errorsandfaults', readonly:true , className: 'my-custom-link-class' },
      { input: 'goals',  output: 'systemInfo', readonly:true , className: 'my-custom-link-class' },
      { input: 'goals',  output: 'presentation', readonly:true , className: 'my-custom-link-class' },
      { input: 'goals',  output: 'inputs', readonly:true , className: 'my-custom-link-class' },
      { input: 'goals',  output: 'risk', readonly:true , className: 'my-custom-link-class' },
      { input: 'goals',  output: 'features', readonly:true, className: 'my-custom-link-class'  },
      { input: 'goals',  output: 'alternativePaths', readonly:true, className: 'my-custom-link-class' },
    ]
  });


const Model=(props)=>{
    const [schema, { onChange }] = useSchema(initialSchema);
    
  
    return (
      <div style={{display:'inline-block'}}>
        <div className='oi' style={{ height: '28rem', width: '65.625rem', paddingTop: '3%' }}>
          <Diagram style={{ alignItems: 'center', border: '0.063rem solid #000000' }} schema={schema} onChange={onChange} onClick={onChange} />
        </div>
        <div>
          {props.page === "MODEL" ? <ModelInfo goals={props.goals} getGoals={props.getGoals} altMessage={props.altMessage} getAltMessage={props.getAltMessage}/> : <Goals/>}    
        </div>
      </div>     
    )

}

export default Model;