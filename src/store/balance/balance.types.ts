import {PropertiesTypes} from "@utils/action-creators-types";

import {actions} from "./balance.actions";

export interface InitBalancePayload {
    balance: number;
}

export interface BalanceState {
    balance: number;
}

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
