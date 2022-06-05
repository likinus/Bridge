import {HTMLProps, ReactNode} from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement>{
    children: ReactNode;
}
