import React from "react";
import { NavLink } from "react-router-dom";
import cardsInfo, { transformSelection } from "../redux/testing";
import AdvantagesSection from "./AdvantagesSection/AdvantagesSection";
import "./GameSelection.css";

const GameSelection = () => {
    return (
        <div className="double__wrapper__cards">
            <div className="wrapper__cards">
                {cardsInfo.card.map((item, index) => {
                    let card__number = `card card__number${index}`;
                    let page = transformSelection(index);
                    console.log(page);
                    return (
                        <NavLink key={index} to={page}>
                            <div className={card__number}>
                                <div className="cardContainer">
                                    <div className="cardFront">
                                        <div className="cardPhoto"></div>
                                        <h2>{item.nameKvest}</h2>
                                        <p className="p__price">{item.price}</p>
                                    </div>
                                    <div className="cardBack">
                                        <h2>{item.nameKvest}</h2>
                                        <p>{item.discriptionKvest}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
            <div className="advantages__section">
                <AdvantagesSection />
            </div>
        </div>
    );
}

export default GameSelection;