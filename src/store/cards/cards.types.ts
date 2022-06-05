import {PropertiesTypes} from "@utils/action-creators-types";

import {actions} from "./cards.actions";

export interface SetCardsPayload {
        code: string;
        image: string;
        images: {
            svg: string;
            png: string;
        }
        suit: string
        value: string
}

export interface CardsState {
    cards: SetCardsPayload[] | [];
    isError?: boolean;
}

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
