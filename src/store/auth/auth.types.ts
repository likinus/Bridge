import {PropertiesTypes} from "@utils/action-creators-types";

import {actions} from "./auth.actions";

export interface SetIsUserAuthorizedPayload {
    isAuthorized: boolean;
}

export interface AuthState {
    isAuthorized: boolean;
}

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
