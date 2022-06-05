import {ActionsTypes, CardsState} from "./cards.types";
import {SET_CARDS, SET_CARDS_ERROR} from "./cards.action-types";

const initialState: CardsState = {
    cards: [],
    isError: false,
};

const cardsReducer = (state = initialState, action: ActionsTypes): CardsState => {
    switch (action.type) {
        case SET_CARDS: {

            return {
                ...state,
                cards: action.payload,
                isError: false,
            };
        }

        case SET_CARDS_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        default: {
            return state;
        }
    }
};

export default cardsReducer;
