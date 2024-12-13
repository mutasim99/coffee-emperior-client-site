import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayouts;