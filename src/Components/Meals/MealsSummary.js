import React from 'react';
import './Meals.css';
const MealsSummary = () => {
    var root = document.querySelector(':root');
    root.style.setProperty('--color', '#333');
    return (

        <div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2'></div>
                        <div className='col-lg-8 col-md-8'>
                            <div className='text' >
                                <h3>Delicious Food , Deliverd To You </h3>
                                <p>Choose your favoraite meal from our broad selection of available melas and enjoy a delicious lunch or dinner at home. <br />
                                    All our meals are cooked with high-quality ingerdients,just-in-time and of course by experinced chefs!
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2'></div>




                    </div>

                </div>
            </section>

        </div>
    )
}

export default MealsSummary
