import {SET_IS_USER_AUTHORIZED} from "./auth.action-types";
import {SetIsUserAuthorizedPayload} from "./auth.types";

export const actions = {
    setIsUserAuthorized: (payload: SetIsUserAuthorizedPayload) =>
        ({
            type: SET_IS_USER_AUTHORIZED,
            payload,
        } as const),
}
