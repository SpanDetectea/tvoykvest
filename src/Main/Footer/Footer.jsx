import React from "react";
import './Footer.css';
import logo from './../../assets/images/logo.png';
import Contact from "../Contact/Contact";

const Footer = () => {
    return (
        <footer>
            <div className="footer__border">
                <div className="wrapper__footer">
                    <img src={logo} alt="" className="footer__logo" />
                    <div className="author__site">
                        Сайт создан <a href="https://www.instagram.com/spandetectea/">SpanDetectea</a>
                    </div>
                    <div><Contact /></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;