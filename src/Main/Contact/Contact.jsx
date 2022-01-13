import React from "react";
import vkIcon from './../../assets/icons/vk.png';
import instagramIcon from './../../assets/icons/instagram.png';
import whatsappIcon from './../../assets/icons/whatsapp.png';
import './Contact.css';

const Contact = (props) => {
    // debugger;
    return (
        <div className="wrapper__contact">
            {/* <div className="double__wrapper__contact"> */}
                <a className="wrapper__contact__a">
                    <img className="contact__icons" src={vkIcon} alt='VK'></img>
                </a>
                <a className="wrapper__contact__a">
                    <img className="contact__icons" src={instagramIcon} alt='Instagram'></img>
                </a>
                <a className="wrapper__contact__a">
                    <img className="contact__icons" src={whatsappIcon} alt='Whatsup'></img>
                </a >
            {/* </div> */}
        </div>
    );
}

export default Contact;
