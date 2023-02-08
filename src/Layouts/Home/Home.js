import React from 'react';
import { Outlet } from 'react-router-dom';
import Booking from '../../Pages/Booking/Booking';

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
           <Booking></Booking>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;