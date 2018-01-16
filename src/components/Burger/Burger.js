import React from "react";

import styleSheet from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transFormedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map( (_ ,i ) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />      
    });
  }).reduce((arr , el) => {
    return arr.concat(el)
  } , []);
  // console.log(transFormedIngredients);
  if(transFormedIngredients === 0){
    transFormedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  return( 
    <div className={styleSheet.Burger}>
      <BurgerIngredient type="bread-top" />
        {transFormedIngredients}
      <BurgerIngredient type="bread-bottom" />   
    </div>
  );
}

export default burger;