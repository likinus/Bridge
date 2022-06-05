import {AppState} from "@store/root.reducer";
import {SetCardsPayload} from "@store/cards/cards.types";

export const getCards = (state: AppState): SetCardsPayload[] => state.cards.cards;
export const getCardsError = (state: AppState): boolean | undefined => state.cards.isError;
