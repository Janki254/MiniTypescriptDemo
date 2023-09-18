import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import RootLayout from './Pages/RootLayout';

const App = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
            ],
        },
    ]);

    return (
        <React.Fragment>
            <RouterProvider router={routes}></RouterProvider>
        </React.Fragment>
    );
};

export default App;
