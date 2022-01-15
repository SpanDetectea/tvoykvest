import React from "react";
import './Header.css';
import Navbar from "./Navbar/Navbar";
import down_menu from './../assets/icons/down_menu2.png';

const Header = () => {
    const showNavbar = () => {
        let navbar = document.body.querySelector('.wrapper__navbar');
        navbar.classList.remove('navbar__hidden');
        let down_menu = document.body.querySelector('.down__menu');
        down_menu.classList.add('down__menu__hidden')
    }
    return <div className="wrapper__header">
        <Navbar />
        <img className="down__menu down__menu__hidden" src={down_menu} alt="" onClick={showNavbar}/>
    </div>
}

export default Header;