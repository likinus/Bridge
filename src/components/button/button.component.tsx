import React, {FC} from "react";

import {ButtonProps} from "./button.types";

import styles from './button.styles.scss';

const Button: FC<ButtonProps> = ({children, ...restProps}) => {
    return (
        <button className={styles.button} {...restProps}>
            {children}
        </button>
    )
};

export default Button;
