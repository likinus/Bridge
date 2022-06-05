import {AppState} from "@store/root.reducer";

export const getBalance = (state: AppState): number => state.balance.balance;
