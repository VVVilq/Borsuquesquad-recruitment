import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Styles.scss';

const Navbar = ({ userLogged, signout }) => {

    const currentnavbar = userLogged ? (
        <ul>
            <li><NavLink to="/">Browse</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <button onClick={signout}>Log out</button>
        </ul>
    ) : (
            <ul>
                <li><NavLink to="/">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
        )

    return (
        <div>
            <nav id="navigacja">
                {currentnavbar}
            </nav>
        </div>

    )
}

export default Navbar;