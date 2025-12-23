import React, { useContext, useEffect, useState } from 'react';
import './ConfirmOrder.css';
import { CounterContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { MEALS_DATA } from '../../../data/mealsData';

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { count, setCount } = useContext(CounterContext);

  const [Demmy_Meals] = useState(MEALS_DATA.items);
  const [quantities, setQuantities] = useState(
    Array(MEALS_DATA.items.length).fill(0)
  );

  var root = document.querySelector(':root');

  function Close() {
    root.style.setProperty('--vis', 'hidden');
  }

  function Order() {
    root.style.setProperty('--vis', 'visible');
    navigate('datacustomer', { state: { invoice: f(), orders: count } });
  }

  useEffect(() => {
    const newQuantities = Array(Demmy_Meals.length).fill(0);
    for (let i = 0; i < count.length; i++) {
      newQuantities[count[i] - 1]++;
    }
    setQuantities(newQuantities);
  }, [count, Demmy_Meals.length]);

  useEffect(() => {
    if (count.length === 0) {
      Close();
    }
  }, [count]);

  function Add(id) {
    setCount((count) => [...count, id]);
  }

  function Minse(id) {
    setCount((count) => {
      const lastIndex = count.lastIndexOf(id);
      if (lastIndex !== -1) {
        return count.slice(0, lastIndex).concat(count.slice(lastIndex + 1));
      }
      return count;
    });
  }

  function f() {
    let total = 0;
    for (let i = 0; i < Demmy_Meals.length; i++) {
      total += Demmy_Meals[i].price * quantities[i];
    }
    return total.toFixed(2);
  }

  return (
    <div className='focus'>
      <div className='Confirm-Box'>
        {Demmy_Meals.map((item, index) =>
          quantities[index] ? (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <span className='price'>${item.price}</span>
              <span className="numberItem"> x {quantities[index]} </span>
              <button className='AddButton' onClick={() => Add(item.id)}>+</button>
              <button className='MinseButton' onClick={() => Minse(item.id)}>-</button>
              <div className='my-hr'></div>
            </div>
          ) : null
        )}

        <div className='row'>
          <div className='col-9'>
            <h4>Total Amount</h4>
          </div>
          <div className='col-3'>
            <h4 className='totalAmount'>${f()}</h4>
          </div>
        </div>

        <button className='order-btn' onClick={Order}>Order</button>
        <button className='close-btn' onClick={Close}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
