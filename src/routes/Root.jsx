import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";


export default function Root() {
    return (
        <div id="global">
            <Menu />

            <div id="main-content">
                <Outlet />
            </div>

            <Navbar />
        </div>
    )
}