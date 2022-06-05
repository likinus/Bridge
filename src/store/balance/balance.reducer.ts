import {BalanceState, ActionsTypes} from "./balance.types";
import {INIT_BALANCE} from "./balance.action-types";

const initialState: BalanceState = {
    balance: 0,
};

const balanceReducer = (state = initialState, action: ActionsTypes): BalanceState => {
    switch (action.type) {
        case INIT_BALANCE: {

            return {
                ...state,
                balance: action.payload.balance,
            };
        }

        default: {
            return state;
        }
    }
};

export default balanceReducer;
