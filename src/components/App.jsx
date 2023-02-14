import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/Root";
import Home from "../routes/Home";
import Listen from "../routes/Listen";
import Saved from "../routes/Saved";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "listen",
                element: <Listen />,
                children: [
                    {
                        path: ":id",
                        element: <Listen />
                    }
                ]
            },
            {
                path: "saved",
                element: <Saved />
            }
        ]
    }

])

export default function App() { 
    return  <RouterProvider router={router} />
};