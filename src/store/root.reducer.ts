import { combineReducers } from 'redux';

import {cardsReducer} from "@store/cards";
import {authReducer} from "@store/auth";
import {balanceReducer} from "@store/balance";

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer,
    balance: balanceReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
