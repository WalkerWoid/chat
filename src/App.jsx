import React
    from 'react'
import {Provider}
    from "react-redux";
import {createRoot}
    from "react-dom/client";

import {RouterProvider}
    from "react-router-dom";
import {Layer}
    from "components/Layer";
import {router}
    from "data/router";

import {store}
    from "data/store";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <Layer />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
)