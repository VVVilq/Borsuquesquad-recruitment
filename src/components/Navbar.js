import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = ({ userLogged,signout }) => {


    const currentnavbar = userLogged ? (
        <ul>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/browse">Browse Films</NavLink></li>
            <button onClick={signout}>Log out</button>
        </ul>
    ) : (
            <ul>
                <li><NavLink to="/">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
        )

    return (
        <nav>
            <div>
                {currentnavbar}
            </div>
        </nav>
    )
}

export default Navbar;