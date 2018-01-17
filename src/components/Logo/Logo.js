import React from 'react';
import burgerLogo from '../../assets/images/burger.png';
import classess from './Logo.css';
const logo = (props) => (
  <div className={classess.Logo}>
    <img src={burgerLogo} alt="App Logo" />
  </div>
);

export default logo;