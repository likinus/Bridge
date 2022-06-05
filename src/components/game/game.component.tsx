import React, {FC} from "react";

import card from "@assets/images/card.png";
import {Button} from "@components";

import {GameProps} from "./game.types";

import styles from "./game.styles.scss";

const GameComponent: FC<GameProps> = ({isClicked, playAgain, openCards, cards, result}) => {
    return (
        <div className={styles.gameContainer}>
            <div onClick={openCards(cards?.[0]?.value, cards?.[1]?.value)} className={styles.cardContainer}>
                <div className={!isClicked ? styles.cardInner : styles.cardInnerRotate}>
                    <div className={styles.cardFront}>
                        <img className={styles.img} src={card}/>
                    </div>
                    <div className={styles.cardBack}>
                        <img className={styles.img} src={cards?.[0]?.image}/>
                    </div>
                </div>
            </div>
            {
                isClicked ?
                    <div className={styles.playButtonContainer}>
                        <h4 className={styles.result}>
                            {result}
                        </h4>
                        <Button onClick={playAgain}>Сыграть еще</Button>
                    </div>
                    :
                    <div />
            }
            <div onClick={openCards(cards?.[1]?.value, cards?.[0]?.value)} className={styles.cardContainer}>
                <div className={!isClicked ? styles.cardInner : styles.cardInnerRotate}>
                    <div className={styles.cardFront}>
                        <img className={styles.img} src={card}/>
                    </div>
                    <div className={styles.cardBack}>
                        <img className={styles.img} src={cards?.[1]?.image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameComponent
