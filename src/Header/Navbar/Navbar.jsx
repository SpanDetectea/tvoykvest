import React from "react";
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

const Navbar = (props) => {
    let path = `/${props.path}`;
    // console.log(props.icon);
    const addClass = props => {
        // console.log('da');
        let wrapper = document.querySelector('.wrapper__modal__window');
        wrapper.classList.remove('wrapper__hidden');
    }
    return <div className="wrapper__navbar">
        <NavLink to='/'> <button className="button__back">Назад</button></NavLink>
        <ul className="navbar__ul">
            {/* <ListMenu path='aboutGame' text='Об игре' />
            <ListMenu path='difficulty' text='Уровни страха' icon={difficultyIcon} />
            {/* <ListMenu path = 'certificate' text = 'Сертификат' icon = {certificateIcon}/> */}
            {/* <ListMenu path='birthday' text='День рождения' icon={stockIcon} />
            <ListMenu path='reviews' text='Отзывы' icon={reviewsIcon} />
            <ListMenu path='location' text='Где находится?' icon={locationIcon} />
            <ListMenu path='reservation' text='Забронировать' icon={reservationIcon} /> */}
            {/* <li className="navbar__ul__li">
                <NavLink to='/reserv' >Reserv</NavLink>
            </li> */}

            <li className="navbar__ul__li">
                <a href="#span__square">Об игре</a>
            </li>
            <li className="navbar__ul__li">
                <a href="#span__square">Уровни страха</a>
            </li>
            <li className="navbar__ul__li">
                <a href="#span__square">День рождения</a>
            </li>
            <li className="navbar__ul__li">
                <a href="#span__square">Отзывы</a>
            </li>
            <li className="navbar__ul__li">
                <a href="#span__square">Где находится?</a>
            </li>
            {/* <NavLink to='/karantin' onClick={addClass}>
                {props.text}
            </NavLink> */}
        </ul>
    </div>
}

export default Navbar;
