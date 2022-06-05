import {SET_CARDS, SET_CARDS_ERROR} from "./cards.action-types";
import {SetCardsPayload} from "./cards.types";

export const actions = {
    setCards: (payload: SetCardsPayload[]) =>
        ({
            type: SET_CARDS,
            payload: payload,
        } as const),

    setCardsError: () =>
        ({
            type: SET_CARDS_ERROR,
        } as const),
}
