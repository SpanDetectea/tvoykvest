import React, { useState } from "react";
import './AboutGame.css';
import Description from "./Description/Description";

const AboutGame = (props) => {
    const [textButton, settextButton] = useState('Забронировать')
    const reserv = (props) => {
        settextButton('Страаашно..');
    }
    const leave = (props) => {
        settextButton('Забронировать');
    }
    const addClass = () => {
        let wrapper = document.querySelector('.wrapper__reservation');
        wrapper.classList.remove('wrapper__hidden');
    }
    const addClassPhone = () => {
        let wrapper = document.querySelector('wrapper__aboutGame__reserv');
        wrapper.classList.add('wrapper__aboutGame__reserv_for_phone');
    }
    const deleteClassPhone = () => {
        let wrapper = document.querySelector('wrapper__aboutGame__reserv');
        wrapper.classList.remove('wrapper__aboutGame__reserv_for_phone');
    }

    return (
        <div className="wrapper__aboutGame">
            <div className="wrapper__aboutGame__intro">
                Очнувшись привязанными, вы узнаете, что стали жертвами
                эксперимента со смертельным вирусом, который проводила
                международная компания.
            </div>
            <div>
                <button className="wrapper__aboutGame__reserv"
                    onMouseEnter={reserv} onMouseLeave={leave}
                    onClick={addClass} onTouchMove={addClassPhone}
                    // onTouchEnd={deleteClassPhone}
                    >
                    {textButton}
                </button>
            </div>
            <div className="wrapper__aboutGame__rules">
                У вас есть ровно 90 минут на то, чтобы найти антидот
                и спастись
            </div>
            <div className="wrapper__aboutGame__description">
                {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#010e1b" fill-opacity="1" d="M0,160L8.6,165.3C17.1,171,34,181,51,165.3C68.6,149,86,107,103,117.3C120,128,137,192,154,229.3C171.4,267,189,277,206,240C222.9,203,240,117,257,112C274.3,107,291,181,309,224C325.7,267,343,277,360,266.7C377.1,256,394,224,411,218.7C428.6,213,446,235,463,250.7C480,267,497,277,514,277.3C531.4,277,549,267,566,256C582.9,245,600,235,617,202.7C634.3,171,651,117,669,122.7C685.7,128,703,192,720,229.3C737.1,267,754,277,771,277.3C788.6,277,806,267,823,256C840,245,857,235,874,208C891.4,181,909,139,926,133.3C942.9,128,960,160,977,181.3C994.3,203,1011,213,1029,186.7C1045.7,160,1063,96,1080,112C1097.1,128,1114,224,1131,245.3C1148.6,267,1166,213,1183,176C1200,139,1217,117,1234,117.3C1251.4,117,1269,139,1286,128C1302.9,117,1320,75,1337,53.3C1354.3,32,1371,32,1389,69.3C1405.7,107,1423,181,1431,218.7L1440,256L1440,320L1431.4,320C1422.9,320,1406,320,1389,320C1371.4,320,1354,320,1337,320C1320,320,1303,320,1286,320C1268.6,320,1251,320,1234,320C1217.1,320,1200,320,1183,320C1165.7,320,1149,320,1131,320C1114.3,320,1097,320,1080,320C1062.9,320,1046,320,1029,320C1011.4,320,994,320,977,320C960,320,943,320,926,320C908.6,320,891,320,874,320C857.1,320,840,320,823,320C805.7,320,789,320,771,320C754.3,320,737,320,720,320C702.9,320,686,320,669,320C651.4,320,634,320,617,320C600,320,583,320,566,320C548.6,320,531,320,514,320C497.1,320,480,320,463,320C445.7,320,429,320,411,320C394.3,320,377,320,360,320C342.9,320,326,320,309,320C291.4,320,274,320,257,320C240,320,223,320,206,320C188.6,320,171,320,154,320C137.1,320,120,320,103,320C85.7,320,69,320,51,320C34.3,320,17,320,9,320L0,320Z"></path></svg> */}
                <Description />
            </div>
        </div>
    );
}

export default AboutGame;