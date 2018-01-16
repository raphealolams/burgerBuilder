import React from 'react';

import styleSheet from './BuildControl.css';


const buildControl = (props) => (
    <div className={styleSheet.buildControl}>
      <div className={styleSheet.Label}> {props.label} </div>
      <button className={styleSheet.Less}>Less</button>
      <button className={styleSheet.More}>More</button>      
    
    </div>
);

export default buildControl;