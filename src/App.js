import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Main from './Components/Meals/Meals.js'
import DataCustomer from './Components/DataCustomer/DataCustomer.js';
export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState([]);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path='Meal_Order' element={<Main />}></Route>
          <Route path='Meal_Order/dataCustomer' element={<DataCustomer />} ></Route>
        </Routes>
      </div>
    </CounterContext.Provider>
  );
}

export default App;