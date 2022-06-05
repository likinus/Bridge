import React, {FC} from "react";

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {actions} from "@store/auth";
import {Routes} from "@enums";

import styles from './header.styles.scss'

const HeaderComponent: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = (): void => {
        localStorage.setItem('user', JSON.stringify({isAuthorized: false}));
        dispatch(actions.setIsUserAuthorized({isAuthorized: false}));
        navigate(Routes.Login);
    }

    return (
        <header className={styles.header}>
            <p>Bridge</p>
            <button onClick={logOut} className={styles.logoutButton}>Logout</button>
        </header>
    )
}

export default HeaderComponent
