import React from 'react';
import { Outlet } from 'react-router-dom';
import Booking from '../../Pages/Booking/Booking';

const Home = () => {
    return (
        <div className=''>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;