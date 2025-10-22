import React from 'react';
import Nav from './../components/Nav';
import { Outlet } from 'react-router';
const RootLayout = () => {
    return (
        <>
            <div id='sidebar'>
                <h1>React Router Contacts</h1>
                <Nav />
        </div>
        <div id='detail'>
            <Outlet />
        </div>
        </>
    );
};

export default RootLayout;