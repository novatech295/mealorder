import React, { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { CounterContext } from '../../App';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      <ConfirmOrder />
    </Fragment>
  )
}

export default Meals
