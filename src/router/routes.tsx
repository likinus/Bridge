import React from "react";

import {LoginPage, MainPage} from "../pages";

const appRoutes = [
    {
        name: '/',
        path: '/',
        component: <MainPage />
    },
    {
        name: '/login',
        path: '/login',
        component: <LoginPage />
    }
];

export default appRoutes;
