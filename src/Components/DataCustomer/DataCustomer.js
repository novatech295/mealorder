import React, { useState, useContext, useEffect } from 'react';
import '../Header/Header.css';
import axios from 'axios';
import './DataCustomer.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import * as yup from 'yup';
import { CounterContext } from '../../App.js';
const DataCustomer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const invoice = location.state.invoice;
  const orders = location.state.orders;
  const dataCollection = collection(db, "customerData");
  const root = document.querySelector(':root'); 
  const [FormData, setFormData] = useState({
    name: "",
    location: "",
    number: "",
    invoice: invoice,
    orders: orders
  });

  const [errors, setErrors] = useState({});
  const { count, setCount } = useContext(CounterContext);

  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    location: yup.string().required("location is required"),
    number: yup.string().matches(/^\d{10}$/, "phone number must be 10 digits").required("phone number is required")
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      schema.validateSync(FormData, { abortEarly: false });
      const response = await axios.post('https://nehadshretahh.pythonanywhere.com/add/', FormData);
      console.log(response.data);
      setCount([]);
      navigate('/Meal_Order/');
    } catch (error) {

      const newErrors = {};
      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  }

  useEffect(() => {
    root.style.setProperty('--visibility', 'hidden');
    root.style.setProperty('--color', '#fff');
  }, []);

  useEffect(() => { 
   
  }, [FormData]); 

  return (
    <div className='container a '>
      <div>
        <h1>Customer Data</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' className='Name-Input' name='name' placeholder='Name...' value={FormData.name} onChange={handleChange} /><br />
          {errors.name && <div className='Name-Error'>{errors.name}</div>}
          <input type='text' name='location' placeholder='Location...' value={FormData.location} onChange={handleChange} /><br />
          {errors.location && <div className='Location-Error'>{errors.location}</div>}
          <input type='text' className='Phone-Input' name='number' placeholder='phone number...' value={FormData.number} onChange={handleChange} /><br />
          {errors.number && <div className='Number-Error'>{errors.number}</div>}
          <button>Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default DataCustomer
