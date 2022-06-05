import React, {FC, FormEvent, useState} from "react";

import {useNavigate} from "react-router-dom";

import useInput from "@hooks";
import {Routes} from "@enums";
import {Button} from "@components";
import {BalanceService} from "@services/balance/balance.service";

import styles from "./login-form-styles.scss";

const loginConst = 'admin';
const passwordConst = '123456';

const LoginFormComponent: FC = () => {
    const [isCorrectLoginData, setIsCorrectLoginData] = useState<boolean>(true);
    const login = useInput('');
    const password = useInput('');
    const navigate = useNavigate();

    const submitForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (login.value === loginConst && password.value === passwordConst) {
            localStorage.setItem('user', JSON.stringify({isAuthorized: true}));
            BalanceService.initBalance(7500);
            navigate(Routes.Main);
        } else {
            setIsCorrectLoginData(false);
        }
    }

    return (
        <form onSubmit={submitForm} className={styles.loginForm}>
            <input
                onChange={login.onChange}
                value={login.value}
                className={styles.input}
                type='text'
                placeholder='Email address'
                autoComplete='username'
            />
            <input
                onChange={password.onChange}
                value={password.value}
                className={styles.input}
                type='password'
                placeholder='Password'
                autoComplete='current-password'
            />
            {
                !isCorrectLoginData &&
                <p className={styles.error}>
                    Имя пользователя или пароль введены не верно
                </p>
            }
            <Button>Submit</Button>
        </form>
    )
}

export default LoginFormComponent;
