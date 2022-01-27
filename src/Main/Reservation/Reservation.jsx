import React from "react";
import './Reservation.css';
import cross from './../../assets/icons/cross.png';
import cross_touch from './../../assets/icons/cross_touch.png';


const Reservation = (props) => {

    const deleteClass = (e) => {
        if (e.target.className == 'wrapper__reservation__double' || e.target.localName == 'p') {
            return;
        }
        let wrapper = document.querySelector('.wrapper__modal__window');
        wrapper.classList.add('wrapper__hidden');
    }
    // const crossTouch = (props) => {
    //     props.target.src = cross_touch;
    // }

    return (
        <div className="wrapper__modal__window wrapper__hidden" onClick={deleteClass}>
            <div className="wrapper__reservation">
                <div className="wrapper__reservation__double">
                    <p>Телефонный номер: +7 (911) 412-03-26</p>
                    <p>Адрес: улица Державина, 5</p>
                </div>
                <img className="wrapper__reservation__cross" src={cross} onClick={deleteClass}></img>
            </div>
        </div>
    );
}

export default Reservation;