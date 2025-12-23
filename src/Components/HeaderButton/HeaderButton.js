import { CounterContext } from '../../App';
import React, { useContext } from 'react';
import imagecart from '../../Assets/pngegg.avif';
import ConfirmOrder from '../Meals/ConfirmOrder/ConfirmOrder';
import '../Header/Header.css';
const HeaderButton = () => {
  var root = document.querySelector(':root');
  function Confirm() {
    if (count.length !== 0) {
      root.style.setProperty('--vis', 'visible');
    }

  }
  const { count } = useContext(CounterContext);
  return (
    <div>
      <button onClick={Confirm} className='Header-But'>
        <img src={imagecart} />
        <span>{count.length}</span>
      </button>
    </div>
  )
}

export default HeaderButton;