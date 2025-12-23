import React, { useContext, useState } from 'react';
import { CounterContext } from '../../App';
import '../Header/Header.css';
import { MEALS_DATA } from '../../data/mealsData';

const AvailableMeals = () => {
  const { setCount } = useContext(CounterContext);
  const [Demmy_Meals] = useState(MEALS_DATA.items);

  var root = document.querySelector(':root');
  root.style.setProperty('--visibility', 'visible');
  root.style.setProperty('--heightImg', '300px');

  const Add = (id) => {
    setCount((count) => [...count, id]);
  };

  const meallist = Demmy_Meals.map((meal) => (
    <div className='row li' key={meal.id}>
      <div className='col-10 col-sm-9'>
        <h4>{meal.name}</h4>
        <p>{meal.description}</p>
        <h4 className='price'>${meal.price}</h4>
        <hr className="my-hr" />
      </div>
      <div className='col-2 col-sm-3'>
        <button className='add-btn' onClick={() => Add(meal.id)}>
          + Add
        </button>
      </div>
    </div>
  ));

  return (
    <div className='ava'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='box'>
              {meallist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableMeals;
