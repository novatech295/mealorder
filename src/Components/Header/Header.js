import React, { Fragment } from 'react';
import { CounterContext } from '../../App';
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
             <img src="/Meal_Order/Food.jpg" />

            </div>
        </Fragment>

    )
}

export default Header

