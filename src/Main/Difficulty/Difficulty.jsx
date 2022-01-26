import React from "react";
import './Difficulty.css';
import fear from './../../assets/icons/fear.png';
import ghost_medium from './../../assets/icons/ghost_medium.png';
import ghost_hard from './../../assets/icons/ghost_hard.png';
import * as Scroll from 'react-scroll';


const Difficulty = () => {
    const addClass = (id) => {
        let imgClass = document.body.querySelectorAll('.img__difficulty__description')[id];
        imgClass.classList.add('img__animation');
    }
    const deleteClass = (id) => {
        let imgClass = document.body.querySelectorAll('.img__difficulty__description')[id];
        imgClass.classList.remove('img__animation');
    }
    return (
        <div className="wrapper__difficulty" id="difficulty">
           <Scroll.Element name="scrollDifficulty"> Уровни Страха</Scroll.Element>
            <div className="wrapper__ul__difficulty">
                <ul className="ul__difficulty">
                    <li className="li__difficulty">Вы можете выбрать уровень страха прямо перед игрой</li>
                    <li className="li__difficulty">У нас индивидуальный подход к каждой команде и к  каждому игроку</li>
                    <li className="li__difficulty">Актеры впервую очередь смотрят на вашу реакцию</li>
                </ul>
            </div>
            <div className="wrapper__difficulty_description">
                <div className="wrapper__difficulty_description__light">
                    <b className="b__difficulty__description" onMouseOver={() => {addClass(0)}} onMouseOut={() => {deleteClass(0)}}>Легкий
                        <img src={fear} className="img__difficulty__description"></img>
                    </b>
                    <div className="difficulty_description">Игра актеров без контакта или полное их отсутсвие<br></br>
                        Скримеры<br></br>
                        Жуткие звуки
                    </div>
                </div>
                <div className="wrapper__difficulty_description__medium">
                    <b className="b__difficulty__description" onMouseOver={() => {addClass(1)}} onMouseOut={() => {deleteClass(1)}}> Средний
                        <img src={ghost_medium} className="img__difficulty__description"></img>
                    </b>
                    <div className="difficulty_description">Легкий контакт (касания)<br></br>
                        Скримеры<br></br>
                        Жуткие звуки<br></br>
                        Переодическое пребывание в полной темноте<br></br><br></br><br></br>
                    </div>
                </div>
                <div className="wrapper__difficulty_description__hard">
                    <b className="b__difficulty__description" onMouseOver={() => {addClass(2)}} onMouseOut={() => {deleteClass(2)}}> Хард
                        <img src={ghost_hard} className="img__difficulty__description"></img>
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