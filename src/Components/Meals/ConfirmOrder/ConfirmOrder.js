import React, { useContext, useEffect, useState } from 'react';
import './ConfirmOrder.css';
import { CounterContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ConfirmOrder = () => {
  const [Demmy_Meals, setDemmy_Meals] = useState([]);
  useEffect(() => {
    axios.get('https://nehadshretahh.pythonanywhere.com/items/')
    .then((response => {
      setDemmy_Meals(response.data.items)
    }))

  }, []);
  const navigate = useNavigate();
  var root = document.querySelector(':root');
  function Close() {
    root.style.setProperty('--vis', 'hidden');
  }
  function Order() {
    root.style.setProperty('--vis', 'visible');
    navigate('datacustomer', { state: { invoice: f(), orders: count } });


  }

  const { count, setCount } = useContext(CounterContext);
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const newQuantities = Array(Demmy_Meals.length).fill(0);
    for (let i = 0; i < count.length; i++) {
      newQuantities[count[i] - 1]++;

    }
    setQuantities(newQuantities);
  }, [count]);
  useEffect(() => {
    if (count.length == 0) {
      Close();
    }
  }, [count])

  function Add(id) {
    setCount((count) => [...count, id]);
  };


  function Minse(id) {
    setCount((count) => {
      const lastIndex = count.lastIndexOf(id);
      if (lastIndex !== -1) {
        return (count.slice(0, lastIndex).concat(count.slice(lastIndex + 1)));
      }
      return (count);
    });
  }
  function f() {
    let c = 0;
    for (let i = 0; i < Demmy_Meals.length; i++) {
      c += (Demmy_Meals[i].price * quantities[i])
    }
    return (c.toFixed(2));
  }

  return (

    <div className='focus'>
      <div className='Confirm-Box '>
        {Demmy_Meals.map((item, itemIndex) =>
          <div key={itemIndex} >
            {quantities[itemIndex] ? (<div>
              <h4 >{item.name} </h4>
              <span className='price'>${(item.price)}</span>    <span className="numberItem">x {quantities[itemIndex]} </span> <button className='AddButton' onClick={() => Add(item.id)}>+</button> {quantities[itemIndex] ? (<button className='MinseButton' onClick={() => Minse(item.id)}>-</button>
              ) : ""}
              <div className='my-hr'></div>
            </div>) : ""}
          </div>)}
        <div className='row' >
          <div className='col-9 col-9'>
            <h4>Total Amount</h4>
          </div>
          <div className='col-3 col-3'>
            <h4 className='totalAmount'>${f()}</h4>
          </div>


        </div>
        <button className='order-btn' onClick={Order}>Order</button>
        <button className='close-btn' onClick={Close} > Close</button>
      </div>
    </div>
  )
}

export default ConfirmOrder
