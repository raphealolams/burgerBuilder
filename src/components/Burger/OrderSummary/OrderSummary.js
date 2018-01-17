import React from 'react';

import Aux from '../../../hoc/New';
import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]} 
        </li>
      );
  } );
  
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue To Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>      
    </Aux>
  )
};

export default orderSummary;