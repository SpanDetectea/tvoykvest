import React from "react";
import './Reservation.css';
import cross from './../../assets/icons/cross.png';

const Reservation = (props) => {

    const deleteClass = () => {
        let wrapper = document.querySelector('.wrapper__reservation');
        wrapper.classList.add('wrapper__hidden');
    }

    return (
        <div className="wrapper__reservation wrapper__hidden">
            <div className="wrapper__reservation__double">
                <p>Телефонный номер: +7 (911) 412-03-26</p>
                <p>Адресс: улица Державина, 5</p>
            </div>
            <img className="wrapper__reservation__cross" src = {cross} onClick={deleteClass}></img>
        </div>
    );
}

export default Reservation;