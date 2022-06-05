import {SET_IS_USER_AUTHORIZED} from "./auth.action-types";
import {ActionsTypes, AuthState} from "./auth.types";

const initialState: AuthState = {
    isAuthorized: false,
};

const authReducer = (state = initialState, action: ActionsTypes): AuthState => {
    switch (action.type) {
        case SET_IS_USER_AUTHORIZED: {

            return {
                ...state,
                isAuthorized: action.payload.isAuthorized,
            };
        }

        default: {
            return state;
        }
    }
};

export default authReducer;
