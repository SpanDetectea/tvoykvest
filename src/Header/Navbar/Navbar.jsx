import React, { useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import ListMenu from "../../common/ListMeni/ListMenu";
import './Navbar.css';
import contactIcon from './../../assets/icons/contact.png';
import certificateIcon from './../../assets/icons/certificate.png';
import difficultyIcon from './../../assets/icons/difficulty.png';
import locationIcon from './../../assets/icons/location.png';
import reservationIcon from './../../assets/icons/reservation.png';
import reviewsIcon from './../../assets/icons/reviews.png';
import stockIcon from './../../assets/icons/stock.png';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = (props) => {

    const addClass = props => {
        // console.log('da');
        let wrapper = document.querySelector('.wrapper__modal__window');
        wrapper.classList.remove('wrapper__hidden');
    }

    let scroller = Scroll.scroller;

    const goToScroll =(props) => {
        scroller.scrollTo(props, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -50
          });
    }
    

    return <div className="wrapper__navbar">
        <NavLink to='/'> <button className="button__back">Назад</button></NavLink>
        {/* <NavLink to='/Reserv'> <button >Reserv</button></NavLink> */}
        <ul className="navbar__ul">

            <li className="navbar__ul__li">
                <a onClick={() => {goToScroll('myScrollToElement')}}>Об игре</a>
            </li>
            <li className="navbar__ul__li">
                <a onClick={() => {goToScroll('scrollDifficulty')}}>Уровни страха</a>
            </li>
            <li className="navbar__ul__li">
                <a onClick={() => {goToScroll('scrollbirthday')}}>День рождения</a>
            </li>
            <li className="navbar__ul__li">
                <a  onClick={() => {goToScroll('scrollreviews')}}>Отзывы</a>
            </li>
            <li className="navbar__ul__li">
                <a onClick={() => {goToScroll('scrolllocation')}}>Где находится?</a>
            </li>
            <li className="navbar__ul__li">
                <a onClick={addClass}>Забронировать</a>
            </li>
        </ul>
    </div>
}

export default Navbar;
