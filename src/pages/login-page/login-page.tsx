import React, { FC } from "react";

import { LoginFormComponent } from "@components";

import styles from './login-page-styles.scss';

const LoginPage: FC = () => {

    return (
        <div className={styles.container}>
            <LoginFormComponent />
        </div>
    )
}

export default LoginPage
