import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Nav.css"

function Nav(props) {
    return (
        <>
        <nav>
            <NavLink  className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/home">Home</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/overzichtpagina">Alle posts</NavLink>
            <NavLink  className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/newpost">Nieuwe post maken</NavLink>
        </nav>
        </>
    );
}

export default Nav;