import React from "react";
import './Description.css';
import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Description = () => {
    let Element = Scroll.Element;
    return (
        <div className="wrapper__aboutGame__description__double">
            <Element name="myScrollToElement">
                <div className="span__square" id="aboutGame">Перед вами более 150 кв.метров</div>
            </Element>
            <div className="wrapper__description__location">
                <div className="description__location">
                    Лабиринты
                    <span className="description__location__comment"> попробуйте найти выход, конечно, если вас не найдут первыми...</span>
                </div>
                <div className="description__location">
                    Многоуровневые переходы
                    <span className="description__location__comment"> а туда точно нужно лезть?</span>
                </div>
                <div className="description__location">
                    Темные уголки
                    <span className="description__location__comment"> кажется я кого-то там видел!</span>
                </div>
                <div className="description__location">
                    Частичное разделение
                    <span className="description__location__comment"> говорят: "Один в поле не воин", но это, ведь, точно не про тебя</span>
                </div>
                <div className="description__location">
                    Жуткие звуки
                    <span className="description__location__comment"> поверь - они будут волновать в последнюю очередь</span>
                </div>
            </div>
        </div>
    );
}

export default Description;