import React from 'react';
import Nav from './../components/Nav';
import { Outlet } from 'react-router';
const RootLayout = () => {
    return (
        <>
            <div id='sidebar'>
                <Nav />
        </div>
        <div id='detail'>
            <Outlet />
        </div>
        </>
    );
};

export default RootLayout;