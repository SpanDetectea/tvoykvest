import React from "react";
import './Difficulty.css';
import fear from './../../assets/icons/fear.png';
import ghost_medium from './../../assets/icons/ghost_medium.png';
import ghost_hard from './../../assets/icons/ghost_hard.png';

const Difficulty = () => {
    return (
        <div className="wrapper__difficulty">
            Уровни Страха
            <div className="wrapper__ul__difficulty">
                <ul className="ul__difficulty">
                    <li className="li__difficulty">Вы можете выбрать уровень страха прямо перед игрой</li>
                    <li className="li__difficulty">У нас индивидуальный подход к каждой команде и к  каждому игроку</li>
                    <li className="li__difficulty">Актеры впервую очередь смотрят на вашу реакцию</li>
                </ul>
            </div>
            <div className="wrapper__difficulty_description">
                <div className="wrapper__difficulty_description__light">
                    <b className="b__difficulty__description">Легкий
                        <img src={fear}></img>
                    </b>
                    <div className="difficulty_description">Игра актеров без контакта или полное их отсутсвие<br></br>
                        Скримеры<br></br>
                        Жуткие звуки
                    </div>
                </div>
                <div className="wrapper__difficulty_description__medium">
                    <b className="b__difficulty__description"> Средний
                        <img src={ghost_medium}></img>
                    </b>
                    <div className="difficulty_description">Легкий контакт (касания)<br></br>
                        Скримеры<br></br>
                        Жуткие звуки<br></br>
                        Переодическое пребывание в полной темноте<br></br><br></br><br></br>
                    </div>
                </div>
                <div className="wrapper__difficulty_description__hard">
                    <b className="b__difficulty__description"> Хард
                        <img src={ghost_hard}></img>
                    </b>
                    <div className="difficulty_description">Полный контакт<br></br>
                        Скримеры<br></br>
                        Жуткие звуки<br></br>
                        Переодическое пребывание в полной темноте<br></br>
                        Разделение команды во время игры
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Difficulty;