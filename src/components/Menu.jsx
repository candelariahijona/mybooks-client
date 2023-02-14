import React, { useState } from "react";


export default function Menu() {
    const [open, setOpen] = useState(false);

    // Toggle menu
    function toggleMenu() {
        if (!open) { 
            document.getElementById("menu").classList.add("open");
            setOpen(true);
        } else {
            document.getElementById("menu").classList.remove("open");
            setOpen(false);
        }
    }
    
    // Render
    return (
        <div id="menu">
            <button onClick={toggleMenu}></button>

            <ul>
                <li>
                    <a href="#">
                        <img src="/Assets/Icons/Black/profile.svg"/>
                        Profile
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src="/Assets/Icons/Black/power.svg"/>
                        Log out
                    </a>
                </li>
            </ul>
        </div>
    )
}