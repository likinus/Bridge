import {INIT_BALANCE} from "@store/balance/balance.action-types";
import {InitBalancePayload} from "@store/balance/balance.types";

export const actions = {
    initBalance: (payload: InitBalancePayload) =>
        ({
            type: INIT_BALANCE,
            payload,
        } as const),
}
