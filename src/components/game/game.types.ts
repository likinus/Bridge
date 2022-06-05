import {SetCardsPayload} from "@store/cards/cards.types";

export interface GameProps {
    isClicked: boolean;
    openCards: (firstValue: string, secondValue: string) => () => void;
    playAgain: () => void;
    cards: SetCardsPayload[];
    result: string;
}
