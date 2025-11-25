import React, { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../../App';
import '../Header/Header.css';

const AvailableMeals = () => {
  const [Demmy_Meals, setDemmy_Meals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setCount } = useContext(CounterContext);

  useEffect(() => {
    // حط البيانات التجريبية هون داخل useEffect
const mealsData = [
  {
    id: 1,
    name: "Sushi",
    price: 20.59,
    description: "Fresh sushi rolls filled with seasoned rice and raw fish, served with soy sauce and pickled ginger."
  },
  {
    id: 2,
    name: "Grilled Fish",
    price: 25.19,
    description: "Tender grilled fish fillet marinated with herbs and lemon, served with sautéed vegetables."
  },
  {
    id: 3,
    name: "Italian Pizza",
    price: 22.09,
    description: "Classic Italian pizza with tomato sauce, melted mozzarella, and your choice of fresh toppings."
  },
  {
    id: 4,
    name: "BBQ Chicken",
    price: 40.29,
    description: "Juicy grilled chicken seasoned with BBQ sauce, served with crispy French fries."
  }
];


    setDemmy_Meals(mealsData);

    // إعداد خصائص CSS
    const root = document.querySelector(':root');
    root.style.setProperty('--visibility', 'visible');
    root.style.setProperty('--heightImg', '300px');
  }, []);

  const Add = (id) => {
    setCount((prevCount) => [...prevCount, id]); // تأكد إنو count مصفوفة بالـ context
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
