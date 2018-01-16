import React , { Component}  from 'react';
import propTypes from 'prop-types';
import styleSheet from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
          ingredient = <div className={styleSheet.BreadBottom}></div>;
        break;
      case ('bread-top'):
          ingredient = (
            <div className={styleSheet.BreadTop}>
              <div className={styleSheet.Seeds1}></div>
              <div className={styleSheet.Seeds2}></div>            
            </div>
          );
        break;

      case ('meat'):
          ingredient = <div className={styleSheet.Meat}></div>;
        break;

      case ('cheese'):
        ingredient = <div className={styleSheet.Cheese}></div>;
      break;

      case ('bacon'):
          ingredient = <div className={styleSheet.Bacon}></div>;
        break;

      case ('salad'):
        ingredient = <div className={styleSheet.Salad}></div>;
      break;
      default:
          ingredient = null;
        break;
    };
    
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
}

export default BurgerIngredient;