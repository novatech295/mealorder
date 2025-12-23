import React, { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../../App';
import '../Header/Header.css';
import axios from 'axios';
const AvailableMeals = () => {
  const [Demmy_Meals, setDemmy_Meals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setCount } = useContext(CounterContext);
  useEffect(() => {

    setIsLoading(true);
    axios.get('https://nehadshretahh.pythonanywhere.com/items/')
      .then((response => {
  
        setDemmy_Meals(response.data.items)
      })).catch((error) => {
        setError(error);
      }).finally(() => {
        setIsLoading(false);
      });

  }, []);
  if (isLoading) {
    return (<div>Loading...</div>);
  }
  if (error) {
    return( <div>error : {error.message}</div>);
  }
  var root = document.querySelector(':root');
  root.style.setProperty('--visibility', 'visible');
  root.style.setProperty('--heightImg', '300px');
  const Add = (id) => {
    setCount((count) => [...count, id]);
  };
  const meallist = Demmy_Meals.map((meal) => (
    <div className='row li' key={meal.id}>
      <div className='col-10  col-sm-9   '>
        <h4>{meal.name}</h4>
        <p>{meal.description}</p>
        <h4 className='price'>${meal.price}</h4>
        <hr className="my-hr" />
      </div>
      <div className='col-2 col-sm-3   '>
        <button className='add-btn' onClick={() => Add(meal.id)}>+ Add</button>
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
