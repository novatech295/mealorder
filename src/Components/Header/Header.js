import React, { Fragment } from 'react';
import { CounterContext } from '../../App';
import img from '../../Assets/Food.jpg';
import './Header.css';
import HeaderButton from '../HeaderButton/HeaderButton';
const Header = () => {
    return (
        <Fragment>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-g-6 col-md-6 col-sm-6'>
                            <h2>MeatApp</h2>
                        </div>
                        <div className='col-g-6 col-md-6 col-sm-6 Header-Button'>
                            <HeaderButton />

                        </div>

                    </div>
                </div>
            </header>
            <div className='main'>
<img src={process.env.PUBLIC_URL + '/Food.jpg'} alt="Food" />


            </div>
        </Fragment>

    )
}

export default Header

