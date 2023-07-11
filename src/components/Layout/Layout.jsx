import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css'

const Layout = () => {
    return (
        <div className='layout'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;