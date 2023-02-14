import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav id="navbar">
            <NavLink to="/"><button id="btn-home"></button></NavLink>
            <NavLink to="/listen"><button id="btn-listen"></button></NavLink>
            <NavLink to="/saved"><button id="btn-saved"></button></NavLink>
        </nav>
    )
}

export default Navbar;