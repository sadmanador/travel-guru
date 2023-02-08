import React from 'react';
import { Outlet } from 'react-router-dom';
import Option from '../../Pages/Hotels_option/Option';

const Hotels = () => {
    return (
        <div>
            <Option></Option>
            <Outlet></Outlet>
        </div>
    );
};

export default Hotels;