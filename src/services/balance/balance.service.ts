import {dispatch} from "@store/store";
import {actions} from "@store/balance";

class BalanceServiceClass {
    initBalance (balance: number) {
        dispatch(actions.initBalance({balance}))
    }
}

const BalanceService = new BalanceServiceClass();

export { BalanceService };
