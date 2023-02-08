import React from 'react';
import { Outlet } from 'react-router-dom';
import Option from '../../Pages/Hotels_option/Option';

const Hotels = () => {
    return (
        <div className='grid grid-cols-2'>
            <Option></Option>
            <Outlet></Outlet>
        </div>
    );
};

export default Hotels;