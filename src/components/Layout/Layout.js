import React from 'react';
import Aux from '../../hoc/Aux';
import styleSheet from './Layout.css';

const layout = ( props ) => (
  <Aux>
    <div>Toolbar, Sidedrawer , Backdrop</div>
    <main className={styleSheet.Content}>
      {props.children}
    </main>
  </Aux>
);


export default layout;