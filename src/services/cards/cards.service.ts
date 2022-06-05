import {actions} from "@store/cards";
import {dispatch} from "@store/store";

class CardsServiceClass {
    async apiDeckIdGet () {
            const resp = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            const {deck_id} = await resp.json();

            return deck_id;
    }

    async apiCardsGet (id: string) {
            const resp = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`);
            const cards = await resp.json();

            return cards;
    }

    async getCardsFromServer (): Promise<void> {
        try {
            const id = await this.apiDeckIdGet();
            const cards = await this.apiCardsGet(id);

            dispatch(actions.setCards(cards.cards))

        } catch (e) {
            console.log(e)
            dispatch(actions.setCardsError())
        }
    }
}

const CardsService = new CardsServiceClass();

export { CardsService };
