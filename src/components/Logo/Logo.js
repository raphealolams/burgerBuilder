import React from 'react';
import burgerLogo from '../../assets/images/burger.png';
import classess from './Logo.css';
const logo = (props) => (
  <div className={classess.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="App Logo" />
  </div>
);

export default logo;