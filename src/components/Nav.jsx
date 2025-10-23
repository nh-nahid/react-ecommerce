import React from 'react';
import { Link } from 'react-router';
const Nav = () => {
    return (
       <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
       </ul>
    );
};

export default Nav;