import React
    from 'react'
import {createRoot}
    from "react-dom/client";

import {RouterProvider}
    from "react-router-dom";
import {Layer}
    from "components/Layer";
import {router}
    from "data/router";


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Layer />
        </RouterProvider>
    </React.StrictMode>
)