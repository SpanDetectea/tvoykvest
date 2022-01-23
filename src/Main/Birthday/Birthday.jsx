import React, { useState } from "react";
import './Birthday.css';
import present from './../../assets/images/present.png';

const Birthday = () => {
    const [isPresent, setisPresent] = useState(true);
    const [isInfo, setisInfo] = useState(false);
    const birthdayInfo = () => {
        // console.log('da');
        setisPresent(false);
        setisInfo(true);
    }

    return (
        <div className="wrapper__birthday">
            {/* {isPresent &&
                <div>
                    <div>Отпразднуй свой День Рождения вместе с нами!</div>
                    <div>
                        <div className="birthday__text">Нажми на подарок, чтобы узнать, что тебя ждет</div>
                        <img className="birthday__present__img" src={present} onClick={birthdayInfo}></img>
                    </div>
                </div>
            }
            {isInfo && */}
                <div >
                    <div>
                        Отпразднуй свой День Рождения вместе с нами!
                    </div>
                    <div className="wrapper__birthday__text">
                        <div className="birthday__description">
                            В честь твоего Дня Рождения - именно ты проходишь квест <span className="span__free">БЕСПЛАТНО!</span>
                        </div>
                        <div className="birthday__description">
                            После прохождения квеста, вы с друзьями можете остаться и отпраздновать прямо в одной из комнат!
                        </div>
                        <div className="birthday__description">
                            Вы, точно, запомните свой День Рождения, ведь такие эмоции невозможно  забыть
                        </div>
                        <div className="birthday__description">
                            Дадим вам реквизит, сфотографируем на память, а так же покажем моменты, в которых вы принимали участия
                        </div>
                        <div className="birthday__description"> 
                            Ну и конечно же вы сможете оставить след в истории нашего квеста, оставив на СТЕНЕ ПАМЯТИ свой инстаграм, эмоции, <span className="span__clue">подсказку</span>, вконтакте
                        </div>
                    </div>
                </div>
            {/* } */}
        </div>

    );
}

export default Birthday;