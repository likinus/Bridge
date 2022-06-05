import React, {FC, useEffect, useState} from "react";

import {useSelector} from "react-redux";

import {HeaderComponent, GameComponent} from "@components";
import {CardsService} from "@services";
import {getCards} from "@store/cards";

import styles from './main-page.styles.scss'
import {getCardsError} from "@store/cards/cards.selector";
import {cardNumberUtil} from "@utils/card-number";
import {getBalance} from "@store/balance";
import {BalanceService} from "@services/balance/balance.service";
import {BetConstants} from "@constants";

const MainPage: FC = () => {
    const cards = useSelector(getCards);
    const isError = useSelector(getCardsError);
    const balance = useSelector(getBalance);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');

    const openCards = (firstValue: string, secondValue: string) => (): void => {
        if (!isClicked) {
            setIsClicked(true);
            BalanceService.initBalance(balance - BetConstants.BET);

            if (cardNumberUtil(firstValue) === cardNumberUtil(secondValue)) {
                BalanceService.initBalance(balance + BetConstants.BET);
                setResult("Ничья!");
            }

            if (cardNumberUtil(firstValue) > cardNumberUtil(secondValue)) {
                BalanceService.initBalance(balance + (BetConstants.BET * 2));
                setResult(`Вы выиграли ${BetConstants.BET}$!!! `);
            } else {
                setResult("Вы проиграли :(");
            }
        }
    };

    const playAgain = () => {
        setIsClicked(false);
        setResult("");
        void CardsService.getCardsFromServer();
    }

    useEffect( () => {
        void CardsService.getCardsFromServer();
    }, [])

    return (
        <>
            <HeaderComponent />
            <main className={styles.mainContainer}>
                <div className={styles.letsPlayTextContainer}>
                    {
                        isError ?
                            <h2>Упс... Что-то пошло не так</h2>
                            :
                            <>
                                <h2>Кто выйграет?</h2>
                                <p className={styles.subtitle}>
                                    Сыграй в игру и испытай удачу!
                                </p>
                                <h3>Balance: {balance}</h3>
                            </>
                    }
                </div>
                <GameComponent
                    result={result}
                    isClicked={isClicked}
                    openCards={openCards}
                    playAgain={playAgain}
                    cards={cards} />
            </main>
        </>
    )
}

export default MainPage;
