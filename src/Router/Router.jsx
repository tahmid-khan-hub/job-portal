import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetails from '../pages/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component: Home,
        },
        {
            path: '/register',
            Component: Register,
        },
        {
            path: '/signIn',
            Component: SignIn,
        },
        {
            path: '/jobs/:id',
            Component: JobDetails,
        }
    ]
  },
]);

export default router;