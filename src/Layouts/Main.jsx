import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
               <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;