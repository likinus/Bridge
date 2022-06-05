import React, {useEffect} from 'react';

import {Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import appRoutes from "@routes";
import {Routes as EnumRoutes} from "@enums";
import {actions} from "@store/auth";

import styles from './index.scss';


function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const item = localStorage.getItem('user');

        if (item) {
            const isAuthorized = JSON.parse(item).isAuthorized;

            dispatch(actions.setIsUserAuthorized(isAuthorized));

            if (isAuthorized) {
                navigate(EnumRoutes.Main);
            } else {
                navigate(EnumRoutes.Login)
            }

        } else {
            navigate(EnumRoutes.Login);
        }

    }, []);

  return (
    <div className={styles.app}>
            <Routes>
                {appRoutes.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
    </div>
  );
}

export default App;
